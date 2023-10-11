import NotLogin from "@/components/layout/notLogin/NotLogin";
import BannerLogo from "../../components/layout/banner/bannerLogo";
import BannerText from "../../components/layout/banner/bannerText";
import LocationLocker from "../location";
import LeftPanel from "@/components/layout/leftPanel";

const HomePageWrap = () => {
  return (
    <>
      <div className='container-fluid pt-5'>
        <div className='row'>
          <LeftPanel description='SMARTLOCKERS' title='Discover the power of' />
          <div className='col-12 col-md-6 right-panel'>
            <div className='row'>
              <div className='col-lg-12'>
                <LocationLocker />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePageWrap;
