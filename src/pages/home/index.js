import NotLogin from "@/components/layout/notLogin/NotLogin";
import BannerLogo from "../../components/layout/banner/bannerLogo";
import BannerText from "../../components/layout/banner/bannerText";
import LocationLocker from "../location";

const HomePageWrap = () => {
  return (
    <>
      <div className='container-fluid pt-5'>
        
        {/* LEFT PANEL */}
        {/* implement this to all pages */}
        <div className='row'>
          <div className='col-12 col-md-6 left-panel align-self-center'>
            <div className='row'>
              <div className='col-7 col-md-12'>
                <NotLogin />
                <BannerText
                  unboldChar='Discover the power of'
                  boldChar='SMARTLOCKERS'
                />
              </div>
              <div className='col-5 col-md-12'>
                <BannerLogo />
              </div>
            </div>
          </div>
          <div className='col-12 col-md-6 right-panel'>
            <div className='row'>
              <div className='col-lg-12'>
                <LocationLocker />
              </div>
            </div>
          </div>
        </div>
        {/* end of left panel */}



      </div>
    </>
  );
};

export default HomePageWrap;
