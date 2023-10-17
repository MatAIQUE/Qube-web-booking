import Breadcrumb from "@/components/layout/breadcrumbs";
import WashServices from "./services/services-list";
import LeftPanel from "@/components/layout/leftPanel";
import { useLocation } from "@/context/LocationContext";
import { useRouter } from "next/router";

const WashDefault = () => {
  const router = useRouter();

  const { lockerLocationName } = useLocation();
  let moduleData = router.query.moduleData;
  let serviceName = router.query.serviceName;

  return (
    <div className='container-fluid'>
      <div className='row'>
        <LeftPanel title='Select the' description='SERVICE OPTION' />
        <div className='col-lg-6 right-panel'>
          <div className='row'>
            <div className='col-lg-12'>
              <Breadcrumb
                lockerLocationName={lockerLocationName}
                serviceName={serviceName}
              />
              <WashServices moduleData={moduleData} serviceName={serviceName} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WashDefault;
