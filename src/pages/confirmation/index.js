import Link from "next/link";
import Button from "@/components/layout/buttons/create";
import LeftPanel from "@/components/layout/leftPanel";
import Menu from "@/components/layout/header/menu";
import Image from "next/image";
import qubeeAvatar from "@/assets/img/qubeeAvatar.svg";

const ConfirmationPage = () => {
  return (
    <div className='container-fluid pt-5'>
      <div className='row'>
        <LeftPanel description='SMARTLOCKERS' title='Discover the power of' />
        <div className='col-12 col-md-6 right-panel'>
          <div className='row'>
            <div className='col-lg-12 pt-5'>
              <div className='container-fluid text-center w-100 align-self-center'>
                <div>
                  <Image src={qubeeAvatar} className='w-100 avatar' />
                  <span className='font-semibold'>
                    Congratulations, your account
                  </span>
                  <br />
                  <span>has been registered successfully </span>

                  <Link href=''>click to redirect</Link>
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
