import { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthContextProvider({ children }) {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [isLogin, setIsLogin] = useState(false);
  const [mobile, setMobile] = useState("");
  const [mpin, setMpin] = useState("");

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
      setMobile("");
      setMpin("");
      setError(null);
    } catch (error) {
      setError(error);
      setMobile("");
      setMpin("");
    }
  };

  const logout = () => {
    localStorage.removeItem("user");

    setUser(null);

    router.push("/login");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        logout,
        login,
        error,
        setError,
        isLogin,
        mobile,
        mpin,
        setMobile,
        setMpin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
