import BannerText from "@/components/layout/banner/bannerText";
import BannerLogo from "@/components/layout/banner/bannerLogo";
import TurnAroundTimeList from "./turnaroundtime-list";
import NotLogin from "@/components/layout/notLogin/NotLogin";
import LeftPanel from "@/components/layout/leftPanel";
import { useRouter } from "next/router";
import Breadcrumb from "@/components/layout/breadcrumbs";
import { useLocation } from "@/context/LocationContext";

const TAT = () => {
  const router = useRouter();
  const { lockerLocationName } = useLocation();
  let serviceName = router.query.serviceName;
  let service = router.query.service;

  // console.log(service);

  return (
    <>
      <div className='container-fluid'>
        <div className='row'>
          <LeftPanel title='Select the' description='TURNAROUND TIME' />
          <div className='col-lg-6 right-panel'>
            <div className='row'>
              <div className='col-lg-12'>
                <Breadcrumb
                  lockerLocationName={lockerLocationName}
                  serviceName={serviceName}
                  service={service}
                />
                <TurnAroundTimeList />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TAT;
