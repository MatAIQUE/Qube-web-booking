import BannerLogo from "@/components/layout/banner/bannerLogo";
import BannerText from "@/components/layout/banner/bannerText";

const LeftPanel = ({ title, description, locker }) => {
  return (
    <div className='col-12 mt-5 col-md-6 left-panel'>
      <div className='row'>
        {/* <div className='col-7 col-md-12'> */}
        <div className='col-12'>
          <BannerText
            unboldChar={title}
            boldChar={description}
            locker={locker}
          />
        </div>
        <div className='col-5 col-md-12'>
          <BannerLogo />
        </div>
      </div>
    </div>
  );
};

export default LeftPanel;
