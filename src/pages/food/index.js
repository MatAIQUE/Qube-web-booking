import LeftPanel from "@/components/layout/leftPanel";
import DropSizes from "./doorsizes/sizes-list";
import { useRouter } from "next/router";
import { useLocation } from "@/context/LocationContext";
import Breadcrumb from "@/components/layout/breadcrumbs";

const FoodModule = () => {
  const router = useRouter();

  const { lockerLocationName } = useLocation();
  let moduleData = router.query.moduleData;
  let serviceName = router.query.serviceName;

  return (
    <div className='container-fluid'>
      <div className='row'>
        <LeftPanel title='Please select' description='LOCKERSIZE' />
        <div className='col-lg-6 right-panel'>
          <div className='row'>
            <div className='col-lg-12'>
              <Breadcrumb
                lockerLocationName={lockerLocationName}
                serviceName={serviceName}
              />
              <DropSizes />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodModule;
