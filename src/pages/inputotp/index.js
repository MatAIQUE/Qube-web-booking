import BannerLogo from "@/components/layout/banner/bannerLogo";
import BannerText from "@/components/layout/banner/bannerText";
import { useRouter } from "next/router";
import Button from "@/components/layout/buttons/verify";
import { useEffect, useState } from "react";
import SocialMedia from "@/components/layout/buttons/socialmedia";
import InputOtpNumber from "./inputOTP";
const InputOtp = () => {
  const [mobile, setMobile] = useState(0);
  const [active, setActive] = useState("");
  const router = useRouter();
  let service = router.query.service;
  let tat = router.query.tat;
  let moduleData = router.query.moduleData;
  let mobilenumber = router.query.mobilenumber;
  let lockerLocation = router.query.lockerLocation;
  let receiverNumber = router.query.receiverNumber;

  useEffect(() => {
    if (mobile.length > 5) {
      console.log("reached the maximum characters");
      setActive(true);
    } else {
      setActive(false);
    }
  });

  return (
    <div className='container-fluid pt-5'>
      <div className='row'>
        <div className='col-lg-6 left-panel mx-auto p-3'>
          {/* left */}
          <div className='row  p-lg-5 m-lg-auto'>
            <div className='mx-auto col-xl-12 col-lg-12 col-md-12 col-sm-6 col-6'>
              <div className='w-100'>
                <div className='text-danger pb-3'>
                  {global.config.globals.loggedOutText}
                </div>
                <BannerText
                  unboldChar='Please enter your'
                  boldChar='Contact number'
                />
              </div>
            </div>
            <div className='col-xl-8 col-lg-8 col-md-12 col-sm-6 col-6'>
              <BannerLogo />
            </div>
          </div>
        </div>

        <div className='col-lg-6 right-panel'>
          <div className='row'>
            <div className='col-lg-12'>
              <InputOtpNumber setNumber={setMobile} />
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='container-fluid'>
                <Button
                  otp={mobile}
                  receiverNumber={receiverNumber}
                  lockerLocation={lockerLocation}
                  verifyNumber={mobilenumber}
                  nextPage='inputotp'
                  service={service}
                  tat={tat}
                  moduleData={moduleData}
                  content={global.config.globals.verificationText}
                  css={
                    active
                      ? "mt-3 col-lg-6 col-12 border border-success rounded bg-gradients py-3 px-3"
                      : "opacity-50 pe-none mt-3 col-lg-6 col-12 border border-success rounded bg-gradients py-3 px-3"
                  }
                />
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-6 pt-5'>
              <div className='container-fluid'>
                <div>
                  <span> </span>
                </div>
                <SocialMedia />
              </div>
            </div>
          </div>
        </div>

        <div className='col-lg-6 right-panel'>
          {/* right */}

          {/* form */}
          <div className='row mt-3'>
            <div className='col-lg-12'>
              <InputOtpNumber setNumber={setMobile} />
            </div>
          </div>
          {/* end of form */}

          {/* button group */}
          <div className='row'>
            <div className='col-lg-12'>
              <div className='container-fluid'>
                <Button
                  otp={mobile}
                  receiverNumber={receiverNumber}
                  lockerLocation={lockerLocation}
                  verifyNumber={mobilenumber}
                  nextPage='inputotp'
                  service={service}
                  tat={tat}
                  moduleData={moduleData}
                  content={global.config.globals.verificationText}
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
          {/* end of button-group */}
        </div>
      </div>
    </div>
  );
};

export default InputOtp;
