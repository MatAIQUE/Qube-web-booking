import QRCodeGenerator from "@/components/layout/qrgenerator";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useLoading } from "@/context/LoadingContext.jsx";
import { useLocation } from "@/context/LocationContext";
import LeftPanel from "@/components/layout/leftPanel";
import { useAuth } from "@/context/AuthContext";
import { useTransaction } from "@/context/TransactionContext";

const GenerateQR = () => {
  const { setIsLoading } = useLoading();
  const { setLocData } = useLocation();
  useEffect(() => {
    setLocData("");
    setIsLoading(false);
  }, []);

  const { user } = useAuth();
  const { transaction } = useTransaction();

  const router = useRouter();
  let transNumber = router.query.transNumber;
  let qpin = router.query.qpin;
  let location = router.query.location;
  let serviceName = router.query.serviceName;
  let doorSize = router.query.doorSize;
  let service = router.query.service;
  let mobileNumber = router.query.mobileNumber;
  let receiverNumber = router.query.receiverNumber;
  let transStatus = router.query.transStatus;
  let moduleData = router.query.moduleData;

  // let service = router.query.service;
  let tat = router.query.tat;
  let tatTitle = router.query.tatTitle;

  useEffect(() => {
    // Check for transaction existence
    if (!transNumber || !qpin || !location) {
      router.push("/"); // Redirect if there's no transaction
    } else {
      // Set location data and loading state
      setLocData("");
      setIsLoading(false);
    }
  }, [transNumber, qpin, location, router]);

  if (!transNumber || !qpin || !location) {
    // If there's no transaction, don't render the JSX
    return null;
  }

  function getServiceTypeName(service) {
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

  function getDoorName(doorSize) {
    switch (doorSize) {
      case "XS":
        return "Extra Small";
      case "S":
        return "Small";
      case "M":
        return "Medium";
      case "L":
        return "Large";
      case "XL":
        return "Extra Large";
      default:
        return null; // Handle other cases if needed
    }
  }

  const goHome = () => {
    router.push({
      pathname: "/",
    });
  };

  // console.log(service);

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
              <span className='fw-bold fs-28'>{serviceName}</span>
              {/* (trans.moduleData === "0002" && user.mobileNumber ===
              trans.mobileNumber && user.mobileNumber === trans.receiverNumber
              && trans.transStatus === "0") || */}
              {moduleData === "0002" &&
              user.mobileNumber === mobileNumber &&
              user.mobileNumber === receiverNumber &&
              transStatus === "0" ? (
                <QRCodeGenerator quickpin={qpin} />
              ) : (
                "Your transaction is processing"
              )}

              <br />
              <div className='col-lg-12'>
                <div className='container-fluid'>
                  <div className='row'>
                    <div className='col-6 text-left'>
                      <div px-5 py-3>
                        <div>
                          <strong>Transaction no.:</strong>
                        </div>
                        {/* <div>
                          <strong>QUICKPIN:</strong>
                        </div> */}

                        {serviceName === "Wash" ? (
                          <>
                            {" "}
                            <div>
                              <strong>Turnaround Time:</strong>
                            </div>
                            <div>
                              <strong>Service Option:</strong>
                            </div>
                          </>
                        ) : (
                          <div>
                            <strong>Door Size:</strong>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className='col-6 text-right'>
                      <div>
                        <div> {transNumber}</div>
                        {/* <div> {qpin}</div> */}
                        <div> {getServiceTypeName(service)}</div>
                        {serviceName === "Wash" ? (
                          <div> {tatTitle}</div>
                        ) : (
                          <div> {getDoorName(doorSize)}</div>
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
