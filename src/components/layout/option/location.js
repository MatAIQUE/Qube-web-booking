import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
const Location = ({ setLocation }) => {
  const [lockerlocation, setLockerLocation] = useState([]);
  const lockerLocation = "";
  const getLockerLocation = () => {
    axios
      .get("https://pandora-2-0-live.onrender.com/api/getAll/location")
      .then((res) => {
        // console.log(res.data);
        setLockerLocation(res.data);
      });
  };
  useEffect(() => {
    getLockerLocation();
  }, []);
  return (
    <>
      <div className='container-fluid'>
        <div className='row'>
          <div className='input-group mt-3'>
            <label>Select Locker Location:</label>
          </div>
          <div className='px-3'>
            <select
              id='locker-location'
              onChange={(e) => setLocation(e.target.value)}
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
