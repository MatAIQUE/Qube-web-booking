import { useEffect, useState } from "react"
import PHFlag from "./flag"
import Lottie from "lottie-react";
import bounceLoader from "../../assets/lottie/bounceLoader"
import svgs from '@/utils/svg'
import Image from 'next/image'



const InputMobileNumber = ({setNumber}) => {

    const [mobileNumber, setMobileNumber] = useState(0)
    const [getMobileNumber, setGetMobileNumber] = useState(0)
    const [activeBorder, setActiveBorder] = useState('')

    function onlyNumberInput()
    {
            var key = event.which || event.keyCode;
            if (key && (key <= 47 || key >= 58) && key != 8) {
                event.preventDefault();
            }
    }
    
    useEffect(() => {
        setNumber(getMobileNumber)
        setMobileNumber(getMobileNumber)

    })
    return (
        <>
        <div className='container-fluid'>


            {/* recipient - sender */}
            <div className="row mb-5 px-3 alert alert-success">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-8 my-auto font-semibold text-success mb-2">
                            <label>1. Enter your number</label>
                        </div>
                        <div className="col-4 mb-2 tawkr">
                            <Lottie animationData={bounceLoader} loop={true}  className="w-30"/>
                        </div>
                        {/* 
                        <div className="col-4 mb-2 tawkr">
                            <Image src={svgs.checkCircle} alt=""/>
                        </div>
                         */}
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-8 my-auto mb-2">
                            <label>2. Enter recipient's number</label>
                        </div>
                        {/* 
                        <div className="col-4 mb-2 tawkr">
                            <Lottie animationData={bounceLoader} loop={true}  className="w-30"/>
                        </div>
                         */}
                    </div>
                </div>
            </div>
            {/* end of recipient - sender */}



            <div className="row">
                <label>Please enter your mobile number</label>
                <div class="input-group mt-3">
                    <div class="input-group-prepend">
                    <span class="input-group-text px-3 height-66 text-center append-span" id="inputGroupPrepend"><PHFlag/></span>
                    </div>
                    <input autoComplete="off" type="text" class="form-control fs-28 font-success height-66 text-center shadow-none" maxLength={11}  onChange={(e)=>setGetMobileNumber(e.target.value)} 
                    onKeyDown={onlyNumberInput} id="validationCustomUsername" placeholder="0 9 • •  • • •  • • • •" aria-describedby="inputGroupPrepend" required/>
                </div>
            </div>
        </div>
        </>
    )
}

export default InputMobileNumber