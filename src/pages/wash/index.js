import WashServices from "./services/services-list";
import LeftPanel from "@/components/layout/leftPanel";

const WashDefault = () => {
  return (
    <div className='container-fluid pt-5'>
      <div className='row'>
        <LeftPanel title='Select the' description='SERVICE OPTION' />
        <div className='col-lg-6 right-panel'>
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
