import axios from "axios";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import Button from "@/components/layout/buttons/create";
import Textbox from "@/components/layout/textbox";
import ProtectedRoute from "@/components/layout/protectedRoute/ProtectedRoute";
import PHFlag from "../inputnumber/flag";
import LeftPanel from "@/components/layout/leftPanel";

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
  const [errMpin, setErrMpin] = useState(false);
  const [errOTP, setErrOTP] = useState(null);

  useEffect(
    (e) => {
      if (step === 1) {
        if (
          name &&
          isEmailValid(email) &&
          mobileNumber.length > 10 &&
          mpin.length > 5 &&
          confirmMpin > 5
        ) {
          setActive(true);
        } else {
          setActive(false);
        }
      }

      if (step === 2) {
        if (otp.length > 5) {
          setActive(true);
        } else {
          setActive(false);
        }
      }
    },
    [name, email, otp, mobileNumber, mpin, confirmMpin, mpinMatch]
  );

  function onlyNumberInput() {
    var key = event.which || event.keyCode;
    if (key && (key <= 47 || key >= 58) && key != 8) {
      event.preventDefault();
    }
  }

  const isEmailValid = (email) => {
    // Define a regular expression for email validation
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    // Test the email against the regex and return the result
    return emailRegex.test(email);
  };

  const handleNextStep = async () => {
    if (step === 1) {
      if (mpinMatch) {
        try {
          await axios
            .post("https://pandora-2-0-live.onrender.com/api/signup/web", {
              mobileNumber,
            })
            .then((response) => {
              setStep(2);
              setError(false);
            });
        } catch (error) {
          // console.error("Error sending otp", error);
          setError(true);
          setMpin("");
          setConfirmMpin("");
        }

        setErrMpin(false);
      } else {
        setErrMpin(true);
        setMpin("");
        setConfirmMpin("");
        setError(false);
      }

      setActive(false);
    } else if (step === 2) {
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
            router.push("/confirmation");
            setMobileNumber("");
            setMpin("");
            setEmail("");
            setName("");
            setStep(1);
          });
      } catch (error) {
        console.error("Error verify otp:", error);

        setErrOTP(error);
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
          <LeftPanel
            title='Register your account and Verify OTP'
          />
          <div className='col-12 col-md-6 right-panel'>
            {step === 1 && (
              <div className='row'>
                {error && (
                  <div class='alert alert-warning' role='alert'>
                    <strong>{global.config.globals.alreadyRegistered}</strong>
                  </div>
                )}

                {errMpin && (
                  <div class='alert alert-warning' role='alert'>
                    <strong>MPIN does not match</strong>
                  </div>
                )}

                <div className='col-lg-12'>
                  <div className=''>Full Name</div>
                  <div className='input-group mt-3'>
                    <Textbox
                      type='text'
                      value={name}
                      onChange={(e) => {
                        const inputValue = e.target.value;

                        const filteredValue = inputValue.replace(
                          /[^a-zA-Z ]/g,
                          ""
                        );

                        setName(filteredValue);
                      }}
                      maxLength='30'
                      placeholder='Please enter your name'
                      className='form-control fs-28 font-success height-66 text-center shadow-none'
                    />
                  </div>
                  <div className='mt-3'>Email</div>
                  <div className='input-group mt-3'>
                    <Textbox
                      type='email'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      maxLength='50'
                      placeholder='Please enter your email'
                      className='form-control fs-28 font-success height-66 text-center shadow-none'
                    />
                  </div>

                  <div className='mt-3'>Mobile number</div>
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

                  <label className='mt-3'>Create 6-digit MPIN</label>
                  <div className='input-group mt-3'>
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

                  <label className='mt-3'>Confirm 6-digit MPIN</label>
                  <div className='input-group mt-3'>
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
              </div>
            )}

            {step === 2 && (
              <div className='row'>
                {errOTP && (
                  <div class='alert alert-warning' role='alert'>
                    <strong>OTP is incorrect</strong>
                  </div>
                )}

                <div className='mt-3'>Enter the OTP that you received</div>
                <div className='input-group'>
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
                  content={step === 1 ? "Register Account" : "Verify OTP "}
                  css={
                    active
                      ? "mt-3 col-lg-6 col-12 w-100 border border-success rounded bg-gradients py-3 px-3"
                      : "opacity-50 pe-none mt-3 w-100 col-lg-6 col-12 border border-success rounded bg-gradients py-3 px-3"
                  }
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
