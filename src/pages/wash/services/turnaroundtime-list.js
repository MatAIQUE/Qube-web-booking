import axios from "axios";
import Image from "next/image";
import Lottie from "lottie-react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { useAuth } from "@/context/AuthContext.jsx";
import { useLocation } from "@/context/LocationContext.jsx";
import { useLoading } from "@/context/LoadingContext.jsx";
import turnaroundtime from "../../../utils/turnaroundtime.js";
import turnaroundtimeNotWash from "../../../utils/turnaroundtimeNotWash.js";
import bounceLoader from "../../../assets/lottie/bounceLoader";

const TurnAroundTimeList = () => {
  const router = useRouter();
  const [active, setActive] = useState(null);
  const { isLoading, setIsLoading } = useLoading();

  const { user } = useAuth();
  const { locData } = useLocation();
  let moduleData = router.query.moduleData;
  let serviceName = router.query.serviceName;
  let service = router.query.service;
  let mobileNumber = user?.mobileNumber;

  const navPage = async (e) => {
    setIsLoading(true);
    const [tatID, tatTitle] = e;
    try {
      await axios
        .post("https://pandora-2-0-live.onrender.com/api/wash/post/trans", {
          booking_Origin: "2",
          mobileNumber: mobileNumber,
          locData: locData,
          moduleData: moduleData,
          serviceType: service,
          turnAroundTime: tatID,
          turnAroundName: tatTitle,
          milestone: [
            {
              mlocData: locData,
            },
          ],
        })
        .then((res) => {
          // console.log(res.data);

          router.push(
            {
              pathname: "/generate-qr",
              query: {
                qpin: res.data.qpin,
                transNumber: res.data.transNumber,
                location: res.data.location,
                service: service,
                serviceName: serviceName,
                tat: tatID,
                tatTitle: tatTitle,
              },
            },
            "/generate-qr"
          );
        });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, []);

  if (isLoading) {
    return <Lottie animationData={bounceLoader} loop={true} className='w-30' />;
  }

  const WashAndFold = () => {
    return (
      <>
        {turnaroundtime.map((val) => (
          <li
            className={`row bg bg-white rounded align-items-center mb-2 border-shadow services ${
              active == val && "active"
            }`}
            key={val.tatID}
            onMouseLeave={() => setActive(null)}
            onMouseEnter={() => setActive(val)}
            onClick={() => navPage([val.tatID, val.tatTitle])}
          >
            <div className='col-3 text-center'>
              <Image src={val.serviceImage} alt='' />
            </div>

            {/* module content */}
            <div className='col-9'>
              {/* module title */}
              <div className='row'>
                {/* title */}
                <div className='container'>
                  <div className='row font-semibold mb-1'>
                    <div className='col-12 fs-28 font-capitalize font-dark'>
                      {val.tatTitle}
                    </div>
                  </div>
                </div>

                {/* description */}
                <div className='container'>
                  <div className='row'>
                    <div className='col-12 fs-12'>{val.tatDescription}</div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </>
    );
  };

  const NotWashFold = () => {
    return (
      <>
        {turnaroundtimeNotWash.map((val) => (
          <li
            className={`row bg bg-white rounded align-items-center mb-2 border-shadow services ${
              active == val && "active"
            }`}
            key={val.tatID}
            onMouseLeave={() => setActive(null)}
            onMouseEnter={() => setActive(val)}
            onClick={() => navPage([val.tatID, val.tatTitle])}
          >
            <div className='col-3 text-center'>
              <Image src={val.serviceImage} alt='' />
            </div>

            <div className='col-9'>
              <div className='row'>
                <div className='container'>
                  <div className='row font-semibold mb-1'>
                    <div className='col-12 fs-28 font-capitalize font-dark'>
                      {val.tatTitle}
                    </div>
                  </div>
                </div>

                <div className='container'>
                  <div className='row'>
                    <div className='col-12 fs-12'>{val.tatDescription}</div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </>
    );
  };

  return (
    <div>
      <ul className='container-fluid'>
        {service === "1" ? <WashAndFold /> : <NotWashFold />}
      </ul>
    </div>
  );
};

export default TurnAroundTimeList;
