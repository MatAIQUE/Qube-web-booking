import axios from "axios";
import Lottie from "lottie-react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useLocation } from "@/context/LocationContext";
import { useLoading } from "@/context/LoadingContext";
import bounceLoader from "../../assets/lottie/bounceLoader";

const Location = () => {
  const router = useRouter();
  const { locData, setLocData } = useLocation();
  const [lockerlocation, setLockerLocation] = useState([]);
  const { isLoading, setIsLoading } = useLoading();

  useEffect(() => {
    getLockerLocation();
  }, []);

  const getLockerLocation = async () => {
    setIsLoading(true);
    try {
      await axios
        .get("https://pandora-2-0-live.onrender.com/api/getAll/location")
        .then((res) => {
          const filteredLocation = res.data?.filter(
            (loc) => loc.lockerStatus === "1"
          );
          setLockerLocation(filteredLocation);
          setIsLoading(false);
        });
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  const handleLocationChange = () => {
    const selectedValue = event.target.value;
    setLocData(selectedValue);
    navPage();
  };

  const navPage = () => {
    router.push({
      pathname: "/services",
    });
  };

  return (
    <>
      {isLoading ? (
        <Lottie animationData={bounceLoader} loop={true} className='w-30' />
      ) : (
        <div className='container-fluid'>
          <div className='row'>
            <div className='input-group mt-3 alert alert-success'>
              <div className='col-8 my-auto font-semibold text-success'>
                <label>Select your Location to start the transaction</label>
              </div>
            </div>
            <div className='px-3'>
              <select
                value={locData} // Set the selected value
                onChange={handleLocationChange} // Attach the event handler
                id='locker-location'
                className='fs-28 my-3 text-dark form-control form-select shadow-none text-center height-66 center'
              >
                <option value='0000'>Select location</option>
                {lockerlocation.map((item) => {
                  const lockerLocationOption = (
                    <option value={item.location} key={item.location}>
                      {item.lockerLocationName}
                    </option>
                  );
                  return lockerLocationOption;
                })}
              </select>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Location;
