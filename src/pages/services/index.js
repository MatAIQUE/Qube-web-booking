import axios from "axios";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { useLocation } from "@/context/LocationContext";
import BannerText from "@/components/layout/banner/bannerText";
import BannerLogo from "@/components/layout/banner/bannerLogo";
import NotLogin from "@/components/layout/notLogin/NotLogin";

const Services = () => {
  const router = useRouter();

  const [service, setService] = useState([]);
  const [active, setActive] = useState(null);

  const { locData } = useLocation();

  const navPage = (e, moduleData) => {
    const selectedServices = e.toLowerCase();
    router.push({
      pathname: selectedServices,
      query: {
        moduleData: moduleData,
        serviceName: e,
      },
    });
  };

  useEffect(() => {
    if (!service) {
      router.push({
        pathname: "/",
      });
    }
  });

  const getServices = () => {
    try {
      axios
        .get(
          `https://pandora-2-0-live.onrender.com/api/get/location/${locData}`
        )
        .then((res) => {
          const result = res.data[0].service;
          const filteredServices = result?.filter(
            (service) => service.serviceStatus === "1"
          );

          setService(filteredServices);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getServices();
  }, []);

  return (
    <>
      <div className='container-fluid pt-5'>
        <div className='row'>
          <div className='col-lg-5 left-panel align-self-center'>
            <div className='row'>
              <div className='col-xl-12 my-auto col-lg-12 col-md-12 col-sm-6 col-6'>
                <NotLogin />
                <BannerText
                  unboldChar='Discover the power of'
                  boldChar='SMARTLOCKERS'
                />
              </div>
              <div className='col-xl-12 col-lg-12 col-md-12 col-sm-6 col-6'>
                <BannerLogo />
              </div>
            </div>
          </div>
          <div className='col-lg-7 right-panel'>
            <div className='row'>
              <div className='col-lg-12'>
                <div>
                  <ul className='container-fluid'>
                    {service?.map((val) => (
                      <li
                        className={`row bg bg-white rounded align-items-center mb-2 border-shadow services ${
                          active == val && "active"
                        }`}
                        key={val.serviceID}
                        onMouseLeave={() => setActive(null)}
                        onMouseEnter={() => setActive(val)}
                        onClick={() => navPage(val.serviceType, val.serviceID)}
                      >
                        <div className='col-3 text-center'>
                          <Image
                            src={`https://qube-gateway.onrender.com/image/get/${val.serviceImage}`}
                            className=''
                            alt='Service Image'
                            width={82}
                            height={82}
                          />
                        </div>

                        <div className='col-9'>
                          <div className='row'>
                            <div className='container'>
                              <div className='row font-semibold mb-1'>
                                <div className='col-12 fs-28 font-capitalize font-dark'>
                                  {val.serviceType}
                                </div>
                              </div>
                            </div>

                            <div className='container'>
                              <div className='row'>
                                <div className='col-12 fs-12'>
                                  {val.serviceDesc}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
