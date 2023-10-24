import { useRouter } from "next/router";
import Button from "@/components/layout/buttons/default";
import { useEffect, useState } from "react";
import SocialMedia from "@/components/layout/buttons/socialmedia";

import Lottie from "lottie-react";
import bounceLoader from "../../assets/lottie/bounceLoader";
import PHFlag from "./flag";
import { useLoading } from "@/context/LoadingContext";

import LeftPanel from "@/components/layout/leftPanel";

const InputNumber = () => {
  const { isLoading, setIsLoading } = useLoading();
  const router = useRouter();
  const [senderMobileNumber, setSenderMobileNumber] = useState(0);

  const [mobileSender, setMobileSender] = useState(0);
  const [active, setActive] = useState("");

  let locData = router.query.locData;
  let moduleData = router.query.moduleData;
  let serviceName = router.query.serviceName;
  let doorSize = router.query.doorSize;
  let serviceFileName = router.query.serviceFileName;

  useEffect(() => {
    if (!moduleData) {
      router.push("/");
    }
  }, [moduleData]);

  function onlyNumberInput() {
    var key = event.which || event.keyCode;
    if (key && (key <= 47 || key >= 58) && key != 8) {
      event.preventDefault();
    }
  }

  useEffect(() => {
    if (mobileSender.length > 10) {
      setActive(true);
    } else {
      setActive(false);
    }

    setMobileSender(senderMobileNumber);
    setSenderMobileNumber(senderMobileNumber);
  });

  const navPage = async () => {
    router.push(
      {
        pathname: "/inputreceiver",
        query: {
          locData: locData,
          service: moduleData,
          serviceName: serviceName,
          doorSize: doorSize,
          mobileSender,
          mobileSender,
          receiverNumber: senderMobileNumber,
          serviceFileName: serviceFileName,
        },
      },
      "/inputreceiver"
    );
  };

  return (
    <div className='container-fluid pt-5'>
      <div className='row'>
        <LeftPanel title='Please enter' description='Sender Mobile Number' />

        <div className='col-lg-6 right-panel'>
          <div className='row mt-3'>
            <div className='col-lg-12'>
              <div className='container-fluid'>
                {isLoading && (
                  <Lottie
                    animationData={bounceLoader}
                    loop={true}
                    className='w-30'
                  />
                )}
                <div className='row'>
                  <div className='row mb-5 px-3 alert alert-success'>
                    <div className='container-fluid'>
                      <div className='row'>
                        <div className='col-8 font-semibold text-success my-auto'>
                          <label>1. Sender Mobile number</label>
                        </div>

                        <div className='col-4 my-auto tawkr'>
                          <Lottie
                            animationData={bounceLoader}
                            loop={true}
                            className='w-30'
                          />
                        </div>
                      </div>
                    </div>
                    <div className='container-fluid'>
                      <div className='row'>
                        <div className='col-8 font-semibold text-success my-auto'>
                          <label>2. Receiver Mobile number</label>
                        </div>

                        <div className='col-4 my-auto tawkr'>
                          <Lottie
                            animationData={bounceLoader}
                            loop={true}
                            className='w-30'
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='input-group mt-3'>
                    <div className='input-group-prepend'>
                      <span
                        className='input-group-text px-3 height-66 text-center append-span'
                        id='inputGroupPrepend'
                      >
                        <PHFlag />
                      </span>
                    </div>
                    <input
                      autoComplete='off'
                      type='text'
                      className='form-control fs-28 font-success height-66 text-center shadow-none'
                      maxLength={11}
                      onChange={(e) => setSenderMobileNumber(e.target.value)}
                      onKeyDown={onlyNumberInput}
                      id='validationCustomUsername'
                      placeholder='0 9 • •  • • •  • • • •'
                      aria-describedby='inputGroupPrepend'
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='row'>
            <div className='col-lg-12'>
              <div className='container-fluid'>
                <Button
                  // verifyNumber={mobile}
                  // lockerLocation={loc}
                  // nextPage='inputotp'
                  // service={service}
                  // moduleData={moduleData}
                  onClick={() => navPage()}
                  content='Proceed'
                  css={
                    active
                      ? "mt-3 col-lg-6 col-12 border border-success rounded bg-gradients py-3 w-100"
                      : "opacity-50 pe-none mt-3 col-lg-6 col-12 border border-success rounded bg-gradients py-3 w-100"
                  }
                />
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-12 pt-5'>
              <div className='container-fluid text-center w-100 align-self-center'>
                <div>
                  <span> </span>
                </div>
                <SocialMedia />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputNumber;
