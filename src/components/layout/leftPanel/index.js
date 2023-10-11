import NotLogin from "@/components/layout/notLogin/NotLogin";
import BannerLogo from "@/components/layout/banner/bannerLogo";
import BannerText from "@/components/layout/banner/bannerText";

const LeftPanel = ({ title, description }) => {
  return (
    <div className='col-12 col-md-6 left-panel align-self-center'>
      <div className='row'>
        <div className='col-7 col-md-12'>
          <NotLogin />
          <BannerText unboldChar={title} boldChar={description} />
        </div>
        <div className='col-5 col-md-12'>
          <BannerLogo />
        </div>
      </div>
    </div>
  );
};

export default LeftPanel;
