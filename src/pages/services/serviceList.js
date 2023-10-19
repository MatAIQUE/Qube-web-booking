import svgs from "../../utils/svg";
import Image from "next/image";
const ServiceList = ({ service, active, setActive, navPage }) => {
  const getServiceImage = (serviceType) => {
    switch (serviceType) {
      case "Wash":
        return svgs.washSvg;
      case "Drop":
        return svgs.dropSvg;
      case "Food":
        return svgs.foodSvg;
      case "Keep":
        return svgs.keepSvg;
      case "Pay":
        return svgs.keepSvg;
      case "Move":
        return svgs.keepSvg;
      default:
        return null; // Handle other cases if needed
    }
  };
  return (
    <ul className='container-fluid'>
      {service?.map((val) => (
        <li
          className={`row bg bg-white rounded align-items-center mb-2 border-shadow services ${
            active == val && "active"
          }`}
          key={val.serviceID}
          onMouseLeave={() => setActive(null)}
          onMouseEnter={() => setActive(val)}
          onClick={() => navPage(val?.serviceType, val?.serviceID)}
        >
          <div className='col-3 text-center'>
            <Image
              src={getServiceImage(val?.serviceType)}
              alt='Service Image'
              width={82}
              height={82}
            />
          </div>

          <div className='col-9'>
            <div className='row'>
              <div className='container'>
                <div className='row font-semibold mb-1'>
                  <div className='col-12 fs-28 font-capitalize font-dark'>
                    {val?.serviceType.toUpperCase()}
                  </div>
                </div>
              </div>

              <div className='container'>
                <div className='row'>
                  <div className='col-12 fs-12'>{val?.serviceDesc}</div>
                </div>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ServiceList;
