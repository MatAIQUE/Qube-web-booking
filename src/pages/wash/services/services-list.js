import { useState, useEffect } from "react";
import WashServiceList from "../../../utils/wash_services";
import { useRouter } from "next/router";
import { Player } from "@lottiefiles/react-lottie-player";
import { useAuth } from "@/context/AuthContext";

const Services = () => {
  const router = useRouter();
  const { user } = useAuth();
  const [active, setActive] = useState(null);

  let moduleData = router.query.moduleData;
  let serviceName = router.query.serviceName;

  const navPage = (e) => {
    if (e == 1) {
      router.push(
        {
          pathname: "/wash/services/turnaroundtime",
          query: {
            service: e,
            moduleData: moduleData,
            serviceName: serviceName,
          },
        },
        "/wash/services/turnaroundtime"
      );
    } else {
      router.push(
        {
          pathname: "/wash/services/turnaroundtime",
          query: {
            service: e,
            moduleData: moduleData,
            serviceName: serviceName,
          },
        },
        "/wash/services/turnaroundtime"
      );
    }

    // console.log(e);
  };

  const WashSelection = () => {
    return (
      <>
        <div>
          <ul className='container-fluid'>
            {WashServiceList.map((val) => (
              <li
                className={`row bg bg-white rounded align-items-center mb-2 border-shadow services ${
                  active == val && "active"
                }`}
                key={val.serviceID}
                onMouseLeave={() => setActive(null)}
                onMouseEnter={() => setActive(val)}
                onClick={() => navPage(val.serviceID, val.serviceType)}
              >
                <div className='col-3 col-lg-2 text-center'>
                  <Player src={val.serviceImage} loop autoplay className='' />
                </div>

                <div className='col-9'>
                  <div className='row'>
                    <div className='container'>
                      <div className='row font-semibold text-capitalize mb-1'>
                        <div className='col-12 fs-28 font-dark'>
                          {val.serviceType}
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

  useEffect(() => {
    // Check if the code is running on the client side
    if (typeof window !== "undefined") {
      // Use router.push only on the client side
      if (!user) {
        router.push({
          pathname: "/login",
        });
      }
    }
  }, [user, router]);

  if (user) {
    return <WashSelection />;
  }
};

export default Services;
