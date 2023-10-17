import axios from "axios";
import Lottie from "lottie-react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useLocation } from "@/context/LocationContext";
import { useLoading } from "@/context/LoadingContext";
import bounceLoader from "../../assets/lottie/bounceLoader";

const Location = () => {
  const router = useRouter();
  const { setLocData, setLockerLocationName } = useLocation();
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
    const selectedObject = JSON.parse(selectedValue);
    const { location, lockerLocationName } = selectedObject;
    setLocData(location);
    setLockerLocationName(lockerLocationName);
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
              <div className='col-12 my-auto text-success'>
                <label>Select your Location to start the transaction</label>
              </div>
            </div>
            <div className='px-3'>
              <select
                onChange={handleLocationChange}
                id='locker-location'
                className='fs-28 my-3 text-dark form-control form-select shadow-none text-center height-66 center'
              >
                <option value='0000'>Select location</option>
                {lockerlocation.map((item) => {
                  const lockerLocationOption = (
                    <option
                      value={JSON.stringify({
                        location: item.location,
                        lockerLocationName: item.lockerLocationName,
                      })}
                      key={item.location}
                    >
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
