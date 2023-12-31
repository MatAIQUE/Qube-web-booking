import BannerLogo from "@/components/layout/banner/bannerLogo";
import BannerText from "@/components/layout/banner/bannerText";

const LeftPanel = ({ title, description }) => {
  return (
    <div className='col-12 mt-5 col-md-6 left-panel'>
      <div className='row'>
        {/* <div className='col-7 col-md-12'> */}
        <div className="col-12 d-block d-md-none">
          {/* <a type="button" href="#" className="btn btn-default text-muted">&lt; Back</a> */}
          {/* hide back button on register */}
        </div>
        <div className='col-12'>
          <BannerText unboldChar={title} boldChar={description} />
        </div>
        {/* <div className='col-5 col-md-12'>
          <BannerLogo />
        </div> */}
      </div>
    </div>
  );
};

export default LeftPanel;
