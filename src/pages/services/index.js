import axios from "axios";
import { useState, useEffect, Suspense } from "react";
import { useRouter } from "next/router";

import { useLocation } from "@/context/LocationContext";
import BannerText from "@/components/layout/banner/bannerText";
import BannerLogo from "@/components/layout/banner/bannerLogo";
import NotLogin from "@/components/layout/notLogin/NotLogin";
import ServiceList from "./serviceList";
import { useLoading } from "@/context/LoadingContext";

const Services = () => {
  const router = useRouter();
  const { isLoading, setIsLoading } = useLoading();
  const [service, setService] = useState([]);
  const [active, setActive] = useState(null);

  const { locData } = useLocation();

  const navPage = (e, moduleData) => {
    const selectedServices = e?.toLowerCase();
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
      setIsLoading(false);
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
                <ServiceList
                  service={service}
                  active={active}
                  setActive={setActive}
                  navPage={navPage}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
