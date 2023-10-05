// authContext.js
import { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { getPreviousRoute } from "../utils/navigation";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthContextProvider({ children }) {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    // Check if user data exists in local storage on component mount
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = async (mobile, mpin) => {
    setIsLogin(true);
    try {
      const response = await axios.post(
        "https://pandora-2-0-live.onrender.com/api/mpin/web",
        {
          mobileNumber: mobile,
          mpin,
        }
      );

      // Save the user in local storage
      localStorage.setItem("user", JSON.stringify(response.data));

      setUser(response.data);
      // console.log(previousRoute);
      // router.push(previousRoute);
      setIsLogin(false);
      router.push({
        pathname: "/", // Redirect to the root route
      });
    } catch (error) {
      setError(error);
    }
  };

  const logout = () => {
    localStorage.removeItem("user");

    setUser(null);

    router.push("/");
  };

  return (
    <AuthContext.Provider
      value={{ user, setUser, logout, login, error, isLogin }}
    >
      {children}
    </AuthContext.Provider>
  );
}
