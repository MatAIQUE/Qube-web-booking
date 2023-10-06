"use client";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";

import BannerLogo from "@/components/layout/banner/bannerLogo";
import BannerText from "@/components/layout/banner/bannerText";
import Button from "@/components/layout/buttons/create";
import Textbox from "@/components/layout/textbox";
import { useAuth } from "@/context/AuthContext";
import ProtectedRoute from "@/components/layout/protectedRoute/ProtectedRoute";
const ProfileDefault = () => {
  const { user, setUser } = useAuth;

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [mpin, setMpin] = useState("");
  const [username, setUsername] = useState("");
  const [active, setActive] = useState("");
  const [pointer, setPointer] = useState("");
  useEffect(
    (e) => {
      if (mpin.length > 5) {
        setActive(true);
      } else {
        setActive(false);
      }

      if (username.length > 10) {
        setPointer(false);
      } else {
        setPointer(true);
      }
    },
    [mpin]
  );

  const router = useRouter(); // Get the router instance

  const navPage = () => {
    router.push({
      pathname: "/inputnumber",
    });
  };

  const handleCreateUser = async () => {
    try {
      const response = await axios.post(
        "https://pandora-2-0-live.onrender.com/api/signup/web",
        {
          mobileNumber: mobile, // Use the mobile state variable
          // email,
          // firstName: name, // Use the name state variable
          // mpin,
        }
      );

      setUser(response);
      //   const user = response.config.data;
      //   const jsonData = JSON.stringify(user);
      //   setUser(jsonData);

      setEmail("");
      setName("");
      setMobile("");
      setMpin("");
      setActive(false);

      navPage();
    } catch (error) {
      // Handle errors here (e.g., display an error message)
      console.error("Error creating user:", error);
    }
  };
  return (
    <>
      <ProtectedRoute>
        <div className='container-fluid pt-5'>
          <div className='row'>
            <div className='col-lg-6 left-panel align-self-center'>
              {/* left */}
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
              {/* right */}

              <div className='row'>
                <div className='col-lg-12'>
                  <div className="mt-3">Email</div>
                  <Textbox
                    type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    maxLength='50'
                    placeholder='Please enter your email'
                    css='fs-15 w-100 rounded border-dark font-dark col-md-6 height-66 text-left px-3'
                  />
                  <div className="mt-3">Name</div>
                  <Textbox
                    type='text'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    maxLength='30'
                    placeholder='Please enter your name'
                    css='fs-15 w-100 rounded border-dark font-dark col-md-6 height-66 text-left px-3'
                  />
                  <div className="mt-3">Mobile number</div>
                  <Textbox
                    type='text'
                    value={mobile}
                    maxLength='11'
                    onChange={(e) => setMobile(e.target.value)}
                    placeholder='Please enter your mobile number'
                    css='fs-15 w-100 rounded border-dark font-dark col-md-6 height-66 text-left px-3'
                  />

                  <div className="mt-3">6-Digit MPIN</div>

                  <Textbox
                    type='text'
                    value={mpin}
                    onChange={(e) => setMpin(e.target.value)}
                    maxLength='6'
                    placeholder='Please enter your 6-digit MPIN'
                    css='fs-15 w-100 rounded border-dark font-dark col-md-6 height-66 text-left px-3'
                  />
                </div>
              </div>
              <div className='row'>
                <div className='col-lg-12'>
                  <Button
                    type='submit'
                    content={global.config.globals.loginAccount}
                    css={
                      active
                        ? "mt-3 col-lg-6 col-12 w-100 border border-success rounded bg-gradients py-3 px-3"
                        : "opacity-50 pe-none mt-3 w-100 col-lg-6 col-12 border border-success rounded bg-gradients py-3 px-3"
                    }
                    onClick={handleCreateUser}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </ProtectedRoute>
    </>
  );
};

export default ProfileDefault;
