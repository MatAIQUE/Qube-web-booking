import LocationLocker from "../location";
import LeftPanel from "@/components/layout/leftPanel";
import { useAuth } from "@/context/AuthContext";
import { useEffect } from "react";
import { useRouter } from "next/router";

const HomePageWrap = () => {
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
      <div className='container-fluid pt-5'>
        <div className='row'>
          <LeftPanel description='SMARTLOCKERS' title='Discover the power of' />
          <div className='col-12 col-md-6 right-panel'>
            <div className='row'>
              <div className='col-lg-12'>
                <LocationLocker />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePageWrap;
