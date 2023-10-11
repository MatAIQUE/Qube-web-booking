import BannerText from "@/components/layout/banner/bannerText";
import BannerLogo from "@/components/layout/banner/bannerLogo";
import TurnAroundTimeList from "./turnaroundtime-list";
import NotLogin from "@/components/layout/notLogin/NotLogin";
import LeftPanel from "@/components/layout/leftPanel";

const TAT = () => {
  return (
    <>
      <div className='container-fluid pt-5'>
        <div className='row'>
          <LeftPanel title='Select the' description='TURNAROUND TIME' />
          <div className='col-lg-6 right-panel'>
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
