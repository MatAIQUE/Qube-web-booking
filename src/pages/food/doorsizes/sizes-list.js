import { useState } from "react";
import { useRouter } from "next/router";

import Image from "next/image";
import DoorSizes from "../../../utils/food_door_sizes";
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
            booking_Origin: "2",
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

  const FoodSelection = () => {
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
                <div className='col-lg-2 col-md-3 col-sm-3 col-3'>
                  <Image src={val.serviceImage} alt='' />
                </div>
                <div className='text-left col-lg-8 col-md-9 col-sm-9 col-9'>
                  <h2 className='fs-28 font-dark text-capitalize m-0'>
                    {val.doorsizesName}
                  </h2>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  };

  if (user) {
    return <FoodSelection />;
  }

  if (!user) {
    router.push({
      pathname: "/login",
    });
  }
};

export default SizesList;
