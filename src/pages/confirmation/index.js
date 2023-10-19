import Link from "next/link";
import Button from "@/components/layout/buttons/create";
import LeftPanel from "@/components/layout/leftPanel";
import Menu from "@/components/layout/header/menu";
import Image from "next/image";
import qubeeAvatar from "@/assets/img/qubeeAvatar.svg";
import qubeeStanding from "@/assets/img/qubeeStanding.png"
import qubeLogoBadge from "@/assets/img/qubeLogoBadge.svg"

const ConfirmationPage = () => {
  return (
    <div className='container-fluid pt-5'>
      <div className='row'>
        <LeftPanel description='SMARTLOCKERS' title='Discover the power of' />
        <div className='col-12 col-md-6 right-panel'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='container-fluid text-center w-100'>
                <div>
                  <Image src={qubeeStanding} className="qubee-standing h-100"/>
                </div>
                
                <div className="h">
                  <Image src={qubeLogoBadge} className="qubeLogoBadge"/>
                </div>

                <div className="">
                  <span className='font-semibold'>
                    <h5 className="font-success">Registration successful!</h5>
                  </span>
                  <span className="text-muted text-loader">Redirecting you to login... </span>
                </div>

                <div className="mt-5">
                  <p className="text-muted w-100 mb-0">Taking too long?</p>
                  <Link href='/login'>
                    <small>Login</small>
                  </Link>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPage;
