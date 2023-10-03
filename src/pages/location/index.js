import axios from "axios";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useLocation } from "@/context/LocationContext";

const Location = () => {
  const [lockerlocation, setLockerLocation] = useState([]);
  const { locData, setLocData } = useLocation();
  const router = useRouter();

  // Event handler for when the user selects a location
  const handleLocationChange = (event) => {
    const selectedValue = event.target.value;
    setLocData(selectedValue);
    navPage();
    // console.log(selectedValue);
  };

  const navPage = (e) => {
    router.push({
      pathname: "/services",
    });
  };

  const getLockerLocation = () => {
    try {
      axios
        .get("https://pandora-2-0-live.onrender.com/api/getAll/location")
        .then((res) => {
          // console.log(res.data);
          setLockerLocation(res.data);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getLockerLocation();
  }, []);

  return (
    <>
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
    </>
  );
};

export default Location;
