import { useState, useEffect } from "react";
import Link from "next/link";

import { useAuth } from "@/context/AuthContext";
import ProtectedRoute from "@/components/layout/protectedRoute/ProtectedRoute";
import Button from "@/components/layout/buttons/create";
import PHFlag from "../inputreceiver/flag";
import { useLocation } from "@/context/LocationContext";
import LeftPanel from "@/components/layout/leftPanel";

const LoginPage = () => {
  const { login, error, mobile, mpin, setMobile, setMpin, setError } =
    useAuth();
  const { setLocData } = useLocation();
  const [active, setActive] = useState("");

  useEffect((e) => {
    if (mpin.length > 5 && mobile.length > 10) {
      setActive(true);
    } else {
      setActive(false);
    }
  });

  useEffect(() => {
    if (error) {
      setError(false);
      setMobile("");
      setMpin("");
    }
  }, []);

  function onlyNumberInput() {
    var key = event.which || event.keyCode;
    if (key && (key <= 47 || key >= 58) && key != 8) {
      event.preventDefault();
    }
  }

  const handleSubmit = async () => {
    setLocData("");
    await login(mobile, mpin);
  };

  return (
    <ProtectedRoute>
      <div className='container-fluid pt-5'>
        <div className='row'>
          <LeftPanel
            description='Mobile number & MPIN'
            title='Please enter your'
          />
          <div className='col-12 col-md-6 right-panel'>
            {error && (
              <div className='row'>
                <div className='container-fluid'>
                  <div className='row'>
                    <div className='col-12 py-3 alert alert-warning font-semibold'>
                      <strong>Sorry, we couldn't sign you in.</strong>
                      <br />
                      <span>
                        Please make sure you have entered the correct
                        credentials
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div className='row mt-3'>
              <div className='col-lg-12'>
                <div className='row'>
                  <label>Please enter your mobile number</label>
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
                      value={mobile}
                      autoComplete='off'
                      type='text'
                      className='form-control fs-28 font-success height-66 text-center shadow-none'
                      maxLength={11}
                      onChange={(e) => setMobile(e.target.value)} // Update mobile state
                      onKeyDown={onlyNumberInput}
                      placeholder='0 9 • •  • • •  • • • •'
                      aria-describedby='inputGroupPrepend'
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='row mt-3'>
              <div className='col-lg-12'>
                <div className='row'>
                  <label>6-Digit MPIN</label>
                  <div className='input-group mt-3'>
                    <input
                      value={mpin}
                      autoComplete='off'
                      type='password'
                      className='form-control fs-28 font-success height-66 text-center shadow-none'
                      maxLength={6}
                      onChange={(e) => setMpin(e.target.value)} // Update mpin state
                      onKeyDown={onlyNumberInput}
                      placeholder='MPIN'
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='row mt-3'>
              <div className='col-lg-12'>
                <div className='row'>
                  <div className='input-group mt-3'>
                    <Button
                      content={global.config.globals.loginAccount}
                      css={
                        active
                          ? "mt-3 w-100 col-lg-6 col-12 border border-success rounded bg-gradients py-3 px-3"
                          : "opacity-50 w-100 pe-none mt-3 col-lg-6 col-12 border border-success rounded bg-gradients py-3 px-3"
                      }
                      onClick={handleSubmit}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-lg-12 pt-5'>
                <div className='container-fluid text-center w-100 align-self-center'>
                  <div>
                    <span>Don't have an account yet?</span>
                  </div>
                  <div>
                    <Link href='/register'>Register</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default LoginPage;
