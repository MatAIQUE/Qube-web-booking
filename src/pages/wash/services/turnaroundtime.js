import BannerText from "@/components/layout/banner/bannerText";
import BannerLogo from "@/components/layout/banner/bannerLogo";
import TurnAroundTimeList from "./turnaroundtime-list";
import NotLogin from "@/components/layout/notLogin/NotLogin";

const TAT = () => {
  return (
    <>
      <div className='container-fluid pt-5'>
        <div className='row'>
          <div className='col-lg-5 left-panel align-self-center'>
            <div className='row'>
              <div className='col-xl-12 col-lg-12 col-md-12 col-sm-6 col-6 my-auto'>
                <NotLogin />
                <BannerText
                  unboldChar='Please select'
                  boldChar='Turnaround time'
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
