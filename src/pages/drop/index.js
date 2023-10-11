import LeftPanel from "@/components/layout/leftPanel";
import BannerLogo from "../../components/layout/banner/bannerLogo";
import BannerText from "../../components/layout/banner/bannerText";
import DropSizes from "./doorsizes/sizes-list";

const DropModule = () => {
  return (
    <div className='container-fluid pt-5'>
      <div className='row'>
        <LeftPanel title='Please select' description='LOCKERSIZE' />
        <div className='col-lg-6 right-panel'>
          <div className='row'>
            <div className='col-lg-12'>
              <DropSizes />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropModule;
