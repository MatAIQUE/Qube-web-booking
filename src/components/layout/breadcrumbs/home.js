const Home = ({ lockerLocationName, serviceName, service }) => {
  function getServiceName(service) {
    switch (service) {
      case "1":
        return "Wash And Fold";
      case "2":
        return "Shoe Care";
      case "3":
        return "Dry Clean";
      case "4":
        return "Comforters";
      case "5":
        return "Pet Care";
      case "6":
        return "Bag Care";
      default:
        return null; // Handle other cases if needed
    }
  }

  return (
    <>
    {/* <div className='col-12 overflow-scroll invisible-scrollbar d-flex flex-wrap'>
      <div className='mb-1 text-muted' style={{ marginRight: "10px" }}>
        {lockerLocationName}
        {lockerLocationName && <span> &gt;</span>}
      </div>
      <div className='mb-1 text-muted' style={{ marginRight: "10px" }}>
        {serviceName?.toUpperCase()}
        {serviceName && <span> &gt;</span>}
      </div>
      <div className='mb-1 text-muted' style={{ marginRight: "10px" }}>
        {getServiceName(service)}
        {service && <span> &gt;</span>}
      </div>
    </div> */}
      <div className="btn btn-default d-flex flex-column me-3 mb-1">
        <div className="text-muted mb-1 text-left small">Locker location</div>
        <div className="font-success text-left">
          {lockerLocationName}
          {lockerLocationName && <span> &gt;</span>}
        </div>
      </div>

      <div className="btn btn-default d-flex flex-column me-3 mb-1">
        <div className="text-muted mb-1 text-left small">Service</div>
        <div className="font-success text-left">
          {serviceName}
          {serviceName && <span> &gt;</span>}
        </div>
      </div>
      
      <div className="btn btn-default d-flex flex-column me-3 mb-1">
        <div className="text-muted mb-1 text-left small">Wash option</div>
        <div className="font-success text-left">
          {getServiceName(service)}
          {service && <span> &gt;</span>}
        </div>
      </div>
      </>
    
  );
};

export default Home;
