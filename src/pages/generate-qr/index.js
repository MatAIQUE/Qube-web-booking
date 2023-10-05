import QRCodeGenerator from "@/components/layout/qrgenerator";
import { useRouter } from "next/router";
import BannerLogo from "@/components/layout/banner/bannerLogo";
import BannerText from "@/components/layout/banner/bannerText";
import { useEffect } from "react";
import { useLoading } from "@/context/LoadingContext.jsx";
import { useLocation } from "@/context/LocationContext";

const GenerateQR = () => {
  const { setIsLoading } = useLoading();
  const { setLocData } = useLocation();
  useEffect(() => {
    setLocData("");
    setIsLoading(false);
  }, []);

  const router = useRouter();
  let transNumber = router.query.transNumber;
  let qpin = router.query.qpin;
  // let qpin = "asdfasdfasdf";
  let location = router.query.location;
  let serviceName = router.query.serviceName;
  let doorSize = router.query.doorSize;

  let service = router.query.service;
  let tat = router.query.tat;
  let tatTitle = router.query.tatTitle;

  const goHome = () => {
    router.push({
      pathname: "/",
    });
  };

  return (
    <div className='container-fluid pt-5'>
      <div className='row'>
        <div className='col-lg-6 left-panel mx-auto p-3'>
          <div className='row  p-lg-5 m-lg-auto'>
            <div className='mx-auto col-xl-12 col-lg-12 col-md-12 col-sm-6 col-6'>
              <div className='w-100'>
                <div className='text-danger pb-3'>
                  {global.config.globals.loggedOutText}
                </div>
                <BannerText
                  unboldChar='Your QR is ready!'
                  boldChar={`Scan this to ${location}'s QUBE Smart Locker`}
                />
              </div>
            </div>
            <div className='col-xl-8 col-lg-8 col-md-12 col-sm-6 col-6'>
              <BannerLogo />
            </div>
          </div>
        </div>

        <div className='col-lg-6 right-panel mx-auto alert alert-success p-lg-5'>
          <div className='row mx-auto w-100'>
            <div className='col-lg-12 text-center col-xs-12 my-3'>
              <QRCodeGenerator quickpin={qpin} />
              <br />
              {/*                             
                            Transaction #:<br/>
                            <strong>{transNumber}</strong><br />
                            Quickpin: {qpin}<br/>
                            Location: {location}
                            */}

              <div className='col-lg-12'>
                <div className='container-fluid'>
                  <div className='row'>
                    <div className='col-6 text-left'>
                      <div px-5 py-3>
                        <div>
                          <strong>Transaction no.:</strong>
                        </div>
                        <div>
                          <strong>Quickpin:</strong>
                        </div>
                        <div>
                          <strong>Service:</strong>
                        </div>
                        {serviceName === "Wash" ? (
                          <div>
                            <strong>Turnaround Time:</strong>
                          </div>
                        ) : (
                          <div>
                            <strong>Door Sizes:</strong>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className='col-6 text-right'>
                      <div px-5 py-3>
                        <div> {transNumber}</div>
                        <div> {qpin}</div>
                        <div> {serviceName}</div>
                        {serviceName === "Wash" ? (
                          <div> {tatTitle}</div>
                        ) : (
                          <div> {doorSize}</div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='row px-lg-0 px-sm-3 px-4'>
            <button className='mt-3 border border-dark text-dark rounded bg-light py-3'>
              {" "}
              Add new transaction
            </button>
          </div>
          <div className='row px-lg-0 px-sm-3 px-4 mb-lg-0 mb-3'>
            <button
              onClick={goHome}
              className='mt-3 border border-success rounded bg-gradients py-3'
            >
              {" "}
              Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenerateQR;
