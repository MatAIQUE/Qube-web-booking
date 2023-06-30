import { useRouter } from "next/router"
import { useEffect, useState } from "react"
const VerifyOtp = ({content, css,verifyNumber, service, moduleData, tat, nextPage, setNumber}) => {
    const router = useRouter()
    const [mobileNumber, setMobileNumber] = useState(0)
    const [getMobileNumber, setGetMobileNumber] = useState(0)
    const [activeBorder, setActiveBorder] = useState('')
    let mobilenumber = router.query.mobilenumber

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
        <div className="container-fluid">
            <div className="row">
                <label>OTP sent to: <strong>{mobilenumber}</strong></label>
                <div className="input-group mt-3">
                    <input type="text" id="otp1" className="form-control fs-28 font-success my-3 height-66 text-center shadow-none" maxLength={6} onChange={(e)=>setGetMobileNumber(e.target.value)}
                    onKeyDown={onlyNumberInput}/>
                </div>
            </div>
        </div>
           
        </>
    )
}

export default VerifyOtp