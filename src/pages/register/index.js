"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import BannerLogo from "@/components/layout/banner/bannerLogo";
import BannerText from "@/components/layout/banner/bannerText";
import Button from "@/components/layout/buttons/create";
import Textbox from "@/components/layout/textbox";
import ProtectedRoute from "@/components/layout/protectedRoute/ProtectedRoute";
import PHFlag from "../inputnumber/flag";
const RegistrationPage = () => {
  const router = useRouter();

  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [mpin, setMpin] = useState("");
  const [confirmMpin, setConfirmMpin] = useState("");
  const [mpinMatch, setMpinMatch] = useState("");
  const [otp, setOtp] = useState("");
  const [active, setActive] = useState(false);
  const [error, setError] = useState(false);

  useEffect(
    (e) => {
      if (step === 1) {
        if (mobileNumber && mobileNumber.length > 10) {
          setActive(!active);
        } else {
          setActive(false);
        }
      }

      if (step === 2) {
        if (mpin.length > 5 && confirmMpin > 5 && mpinMatch) {
          setActive(true);
        } else {
          setActive(false);
        }
      }
    },
    [mobileNumber, mpin, confirmMpin, mpinMatch]
  );

  function onlyNumberInput() {
    var key = event.which || event.keyCode;
    if (key && (key <= 47 || key >= 58) && key != 8) {
      event.preventDefault();
    }
  }

  const handleNextStep = async () => {
    if (step === 1) {
      if (!mobileNumber) {
        alert("Please enter valid mobile number");
      }

      try {
        await axios
          .post("https://pandora-2-0-live.onrender.com/api/signup/web", {
            mobileNumber,
          })
          .then((response) => {
            setStep(2);
          });
      } catch (error) {
        console.error("Error sending otp", error);
        setError(error);
      }

      setActive(false);
    } else if (step === 2) {
      setStep(3);
    } else if (step === 3) {
      if (name && email) {
        // You can also add additional validation if needed
        setStep(4); // Move to the final step
      } else {
        alert("Please enter your name and email.");
      }
    } else if (step === 4) {
      try {
        await axios
          .post("https://pandora-2-0-live.onrender.com/api/verify/web", {
            mobileNumber,
            mpin,
            firstName: name,
            email,
            otp,
          })
          .then((response) => {
            // Handle success, navigate to the next page, or display a success message
            router.push("/login");
            setMobileNumber("");
            setMpin("");
            setEmail("");
            setName("");
            setStep(1);

            console.log(response);
          });
      } catch (error) {
        console.error("Error verify otp:", error);
      }
    }
  };

  const handleConfirmMpinChange = (e) => {
    const newConfirmMpin = e.target.value;
    setConfirmMpin(newConfirmMpin);
    setMpinMatch(mpin === newConfirmMpin);
  };

  return (
    <ProtectedRoute>
      <div className='container-fluid pt-5'>
        <div className='row'>
          <div className='col-lg-6 left-panel align-self-center'>
            <div className='row'>
              <div className='col-xl-12 col-lg-12 col-md-12 col-sm-6 col-6'>
                <div className='text-danger pb-3'>
                  {global.config.globals.loggedOutText}
                </div>
                <BannerText
                  unboldChar='Please enter your'
                  boldChar='Mobile number & MPIN'
                />
              </div>
              <div className='col-xl-12 col-lg-12 col-md-12 col-sm-6 col-6'>
                <BannerLogo />
              </div>
            </div>
          </div>

          <div className='col-lg-6 right-panel'>
            {step === 1 && (
              <div className='row'>
                {error && (
                  <div className="col-12 py-3 alert alert-danger font-semibold">
                    {global.config.globals.alreadyRegistered}
                  </div>
                )}

                <div className='col-lg-12'>
                  <div className='mt-3'>Enter Mobile number</div>
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
                      value={mobileNumber}
                      autoComplete='off'
                      type='text'
                      className='form-control fs-28 font-success height-66 text-center shadow-none'
                      maxLength={11}
                      onChange={(e) => setMobileNumber(e.target.value)}
                      onKeyDown={onlyNumberInput}
                      id='validationCustomUsername'
                      placeholder='0 9 • •  • • •  • • • •'
                      aria-describedby='inputGroupPrepend'
                      required
                    />
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className='row'>
                <label className="mt-3">Create 6-digit PIN</label>
                <div className="input-group mt-3">
                  <Textbox
                    className='form-control fs-28 font-success height-66 text-center shadow-none'
                    onKeyDown={onlyNumberInput}
                    type='password'
                    value={mpin}
                    onChange={(e) => setMpin(e.target.value)}
                    maxLength='6'
                    placeholder='Please enter your 6-digit MPIN'
                    css=''
                  />
                </div>

                <label className="mt-3">Confirm 6-digit PIN</label>
                <div className="input-group mt-3">
                  <Textbox
                    className='form-control fs-28 font-success height-66 text-center shadow-none'
                    onKeyDown={onlyNumberInput}
                    type='password'
                    value={confirmMpin}
                    onChange={handleConfirmMpinChange}
                    maxLength='6'
                    placeholder='Please enter confirm 6-digit MPIN'
                    css=''
                  />
                </div>
              </div>
            )}

            {step === 3 && (
              <div className='row'>
                <div className='mt-3'>Email</div>
                <div className="input-group mt-3">
                  <Textbox
                    type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    maxLength='50'
                    placeholder='Please enter your email'
                    className='form-control fs-28 font-success height-66 text-center shadow-none'
                    />
                </div>
                <div className='mt-3'>Name</div>
                <div className="input-group mt-3">
                  <Textbox
                    type='text'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    maxLength='30'
                    placeholder='Please enter your name'
                    className='form-control fs-28 font-success height-66 text-center shadow-none'
                    />
                </div>
              </div>
            )}

            {step === 4 && (
              <div className='row'>
                <div className='mt-3'>Enter the OTP that you received</div>
                <div className="input-group mt-3">
                  <Textbox
                    type='text'
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    maxLength='6'
                    placeholder='Please enter your otp'
                    className='form-control fs-28 font-success height-66 text-center shadow-none'
                    />
                </div>
              </div>
            )}

            <div className='row'>
              <div className='col-lg-12'>
                <Button
                  onClick={handleNextStep}
                  content={
                    step === 1
                      ? "Proceed with verification"
                      : step === 2
                      ? "Next"
                      : step === 3
                      ? "Create Account"
                      : "Verify OTP..."
                  }
                  css={
                    active
                      ? "mt-3 col-lg-6 col-12 w-100 border border-success rounded bg-gradients py-3 px-3"
                      : "opacity-50 pe-none mt-3 w-100 col-lg-6 col-12 border border-success rounded bg-gradients py-3 px-3"
                  }
                  disabled={step === 4}
                ></Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default RegistrationPage;
