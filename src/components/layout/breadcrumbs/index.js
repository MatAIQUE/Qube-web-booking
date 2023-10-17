import Home from "./home";

const Breadcrumb = ({ lockerLocationName, serviceName, service }) => {
  return (
    <div className='pt-5 d-flex justify-content-start align-items-center col-md-12'>
      <Home
        lockerLocationName={lockerLocationName}
        serviceName={serviceName}
        service={service}
      />
    </div>
  );
};

export default Breadcrumb;
