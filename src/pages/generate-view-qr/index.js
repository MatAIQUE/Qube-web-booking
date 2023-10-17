import QRCodeGenerator from "@/components/layout/qrgenerator";
import { useRouter } from "next/router";
import BannerLogo from "@/components/layout/banner/bannerLogo";
import BannerText from "@/components/layout/banner/bannerText";
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

  const goHome = () => {
    // Use router here within the client-side check
    if (typeof window !== "undefined") {
      router.push({
        pathname: "/",
      });
    }
  };

  return (
    <div className='container-fluid pt-5'>
      <div className='row'>
        <LeftPanel
          title='Your QR is ready!'
          description={`Scan this to ${transaction?.locName}'s QUBE Smart Locker`}
        />

        <div className='col-lg-6 right-panel mx-auto alert alert-success p-lg-5'>
          <div className='row mx-auto w-100'>
            <div className='col-lg-12 text-center col-xs-12 my-3'>
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
                      <div className="px-5 py-3">
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
