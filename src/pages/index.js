import HomePage from "./home";
import { useAuth } from "@/context/AuthContext";
import { useEffect } from "react";
import { useRouter } from "next/router";
const Home = () => {
  const { user } = useAuth();
  const router = useRouter();

  const isAuthenticated = user;

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login");
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated) {
    return null;
  }

  return (
    <>
      <HomePage />
    </>
  );
};

export default Home;
