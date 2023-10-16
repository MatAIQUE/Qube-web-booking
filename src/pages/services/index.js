import axios from "axios";
import { useState, useEffect, Suspense } from "react";
import { useRouter } from "next/router";

import { useLocation } from "@/context/LocationContext";
import ServiceList from "./serviceList";
import { useLoading } from "@/context/LoadingContext";
import LeftPanel from "@/components/layout/leftPanel";
import ServiceSkeleton from "@/components/layout/skeleton/serviceSkeleton";
import { useAuth } from "@/context/AuthContext";

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

  const { user } = useAuth();

  const isAuthenticated = user;

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login");
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated) {
    return null;
  }

  useEffect(() => {
    if (!service) {
      router.push({
        pathname: "/",
      });
    }
  }, [service, router]);

  const getServices = async () => {
    setIsLoading(true);

    try {
      await axios
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
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getServices();
  }, []);

  if (!service) {
    return null;
  }

  return (
    <>
      <div className='container-fluid pt-5'>
        <div className='row'>
          <LeftPanel
            title='Select the Services of  '
            description='SMARTLOCKERS'
          />
          <div className='col-lg-6 right-panel'>
            <div className='row'>
              <div className='col-lg-12'>
                {isLoading ? (
                  <ServiceSkeleton />
                ) : (
                  <ServiceList
                    service={service}
                    active={active}
                    setActive={setActive}
                    navPage={navPage}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
