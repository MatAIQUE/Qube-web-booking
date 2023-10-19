import QRCodeGenerator from "@/components/layout/qrgenerator";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useLoading } from "@/context/LoadingContext.jsx";
import { useLocation } from "@/context/LocationContext";
import LeftPanel from "@/components/layout/leftPanel";

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
  let location = router.query.location;
  let serviceName = router.query.serviceName;
  let doorSize = router.query.doorSize;

  // let service = router.query.service;
  let tat = router.query.tat;
  let tatTitle = router.query.tatTitle;

  const goHome = () => {
    router.push({
      pathname: "/",
    });
  };

  return (
    <div className='container-fluid'>
      <div className='row'>
        <LeftPanel
          title='Your QR is ready!'
          description={`Scan this to ${location}'s QUBE Smart Locker`}
        />

        <div className='col-lg-6 right-panel mx-auto alert alert-success p-lg-5'>
          <div className='row mx-auto w-100'>
            <div className='col-lg-12 text-center col-xs-12 my-3'>
              <QRCodeGenerator quickpin={qpin} />
              <br />
              <div className='col-lg-12'>
                <div className='container-fluid'>
                  <div className='row'>
                    <div className='col-6 text-left'>
                      <div px-5 py-3>
                        <div>
                          <strong>Transaction no.:</strong>
                        </div>
                        <div>
                          <strong>QUICKPIN:</strong>
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
                      <div>
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

          <div className='row px-lg-0 px-sm-3 mt-5 px-4 mb-lg-0 mb-3'>
            <button
              onClick={goHome}
              className='mt-3 border border-success rounded bg-gradients py-3'
            >
              Go to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenerateQR;
