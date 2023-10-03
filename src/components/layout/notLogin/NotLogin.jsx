import { useAuth } from "@/context/AuthContext";
import React from "react";

const NotLogin = () => {
  const { user } = useAuth();
  return (
    <>
      {!user && (
        <div className='text-danger pb-3'>
          {global.config.globals.loggedOutText}
        </div>
      )}
    </>
  );
};

export default NotLogin;
