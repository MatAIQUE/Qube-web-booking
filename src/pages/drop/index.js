import BannerLogo from "../../components/layout/banner/bannerLogo";
import BannerText from "../../components/layout/banner/bannerText";
import DropSizes from "./doorsizes/sizes-list";

const DropModule = () => {
  return (
    <div className='container-fluid pt-5'>
      <div className='row'>
        <div className='col-lg-5 left-panel align-self-center'>
          <div className='row'>
            <div className='col-xl-12 col-lg-12 col-md-12 col-sm-6 col-6 my-auto'>
              <BannerText unboldChar='Please select' boldChar='LOCKERSIZE' />
            </div>
            <div className='col-xl-12 col-lg-12 col-md-12 col-sm-6 col-6'>
              <BannerLogo />
            </div>
          </div>
        </div>
        <div className='col-lg-7 right-panel'>
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
