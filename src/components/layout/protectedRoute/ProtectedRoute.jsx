import { useRouter } from "next/router";
import { useAuth } from "@/context/AuthContext";
import { useEffect } from "react";

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      // If the user is logged in, redirect to another route, e.g., /dashboard
      router.push("/");
    }
  }, [user, router]);

  return children;
};

export default ProtectedRoute;
