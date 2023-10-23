import QRCodeGenerator from "@/components/layout/qrgenerator";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useLoading } from "@/context/LoadingContext.jsx";
import { useLocation } from "@/context/LocationContext";
import { useTransaction } from "@/context/TransactionContext";
import LeftPanel from "@/components/layout/leftPanel";

const GenerateViewQR = () => {
  const { setIsLoading } = useLoading();
  const { setLocData } = useLocation();
  useEffect(() => {
    setLocData("");
    setIsLoading(false);
  }, []);

  const router = useRouter();
  const { selectedTrans } = useTransaction();

  const transaction = JSON.parse(selectedTrans);

  useEffect(() => {
    // Check for transaction existence
    if (!transaction) {
      router.push("/"); // Redirect if there's no transaction
    } else {
      // Set location data and loading state
      setLocData("");
      setIsLoading(false);
    }
  }, [transaction, router]);

  if (!transaction) {
    // If there's no transaction, don't render the JSX
    return null;
  }

  function getServiceName(moduleData) {
    switch (moduleData) {
      case "0001":
        return "Wash";
      case "0002":
        return "DROP";
      case "0003":
        return "KEEP";
      case "0004":
        return "FOOD";
      case "0005":
        return "MOVE";
      case "0006":
        return "PAY";
      default:
        return null; // Handle other cases if needed
    }
  }

  const goHome = () => {
    // Use router here within the client-side check
    if (typeof window !== "undefined") {
      router.push({
        pathname: "/",
      });
    }
  };

  return (
    <div className='container-fluid'>
      <div className='row'>
        <LeftPanel
          title='Your QR is ready!'
          description={`Scan this to ${transaction?.locName}'s QUBE Smart Locker`}
        />

        <div className='col-lg-6 right-panel mx-auto alert alert-success p-lg-5'>
          <div className='row mx-auto w-100'>
            <div className='col-lg-12 text-center col-xs-12 my-3'>
              <span className='fw-bold fs-28'>
                {getServiceName(transaction.moduleData)}
              </span>
              <QRCodeGenerator quickpin={transaction?.qpin} />
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
                          <strong>Quickpin:</strong>
                        </div>
                        <div>
                          <strong>Service:</strong>
                        </div>
                      </div>
                    </div>
                    <div className='col-6 text-right'>
                      <div className='px-5 py-3'>
                        <div> {transaction?.transNumber}</div>
                        <div> {transaction?.qpin}</div>
                        <div> {transaction?.serviceName}</div>
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

export default GenerateViewQR;
