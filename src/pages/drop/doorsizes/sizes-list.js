import { useState } from "react";
import Image from "next/image";

import DoorSizes from "../../../utils/door_sizes";
import { useRouter } from "next/router";
import { useAuth } from "@/context/AuthContext";
import { useLocation } from "@/context/LocationContext";
const SizesList = () => {
  const router = useRouter();
  const [active, setActive] = useState(null);
  const { user } = useAuth();
  const { locData } = useLocation();
  let moduleData = router.query.moduleData;
  let serviceName = router.query.serviceName;
  let mobileNumber = user?.mobileNumber;

  const serviceFileName = serviceName?.toLowerCase();

  const navPage = (e) => {
    if (typeof window !== "undefined") {
      router.push(
        {
          pathname: "/inputnumber",
          query: {
            booking_Origin: "3",
            mobileNumber: mobileNumber,
            doorSize: e,
            moduleData: moduleData,
            locData: locData,
            serviceFileName: serviceFileName,
            serviceName: serviceName,
          },
        },
        "/inputnumber"
      );
    }
  };

  const DropSelection = () => {
    return (
      <>
        <div>
          <ul className='container-fluid'>
            {DoorSizes.map((val) => (
              <li
                className={`row bg bg-white rounded align-items-center mb-2 border-shadow services px-3 ${
                  active == val && "active"
                }`}
                key={val.doorSizeCode}
                onMouseLeave={() => setActive(null)}
                onMouseEnter={() => setActive(val)}
                onClick={() => navPage(val.doorSizeCode, val.doorsizesName)}
              >
                <div className='col-3 text-center'>
                  <Image src={val.serviceImage} alt='' />
                </div>
                <div className='col-9'>
                  <div className='row'>
                    <div className='container'>
                      <div className='row font-semibold mb-1'>
                        <div className='col-12 fs-28 font-capitalize font-dark'>
                          {val.doorsizesName}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  };

  if (user) {
    return <DropSelection />;
  }

  if (!user) {
    if (typeof window !== "undefined") {
      router.push({
        pathname: "/login",
      });
    }
  }
};

export default SizesList;
