import Home from "./home";

const Breadcrumb = ({ lockerLocationName, serviceName, service }) => {
  return (
    <div className='pt-5 d-flex flex-row align-items-center overflow-scroll mb-3 invisible-scrollbar'>
      <Home
        lockerLocationName={lockerLocationName}
        serviceName={serviceName}
        service={service}
      />
    </div>
  );
};

export default Breadcrumb;
