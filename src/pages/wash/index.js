import NotLogin from "@/components/layout/notLogin/NotLogin";
import BannerLogo from "../../components/layout/banner/bannerLogo";
import BannerText from "../../components/layout/banner/bannerText";
import WashServices from "./services/services-list";

const WashDefault = () => {
  return (
    <div className='container-fluid pt-5'>
      <div className='row'>
        <div className='col-lg-5 left-panel align-self-center'>
          <div className='row'>
            <div className='col-xl-12 col-lg-12 col-md-12 col-sm-6 col-6'>
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
              <WashServices />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WashDefault;
