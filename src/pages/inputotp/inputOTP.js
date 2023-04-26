import { useRouter } from "next/router"
import { useEffect, useState } from "react"
const VerifyOtp = ({content, css,verifyNumber, service, moduleData, tat, nextPage, setNumber}) => {
    const router = useRouter()
    const [mobileNumber, setMobileNumber] = useState(0)
    const [getMobileNumber, setGetMobileNumber] = useState(0)
    const [activeBorder, setActiveBorder] = useState('')

    /*const setMobile = () => {
        if(document.getElementById('otp1').value.length == 1) {
            document.getElementById('otp2').focus()
            console.log('1')
        }
        else if(document.getElementById('otp2').value.length == 1) {
            document.getElementById('otp3').focus()
            console.log('2')
        }
        else if(document.getElementById('otp3').value.length == 1) {
            document.getElementById('otp4').focus()
            console.log('3')
        }
        else if(document.getElementById('otp4').value.length == 1) {
            document.getElementById('otp5').focus()
            console.log('4')
        }
        else if(document.getElementById('otp5').value.length == 1) {
            document.getElementById('otp6').focus()
            console.log('5')
        }
    }*/
    useEffect(() => {
        setNumber(getMobileNumber)
        setMobileNumber(getMobileNumber)
        
        
    })



    return (
        <>
            <div className='container-fluid'>
                
                <div>Enter the OTP that you received</div>
                <div className="row">
                    <input type="text" id="otp1" className="fs-28 rounded border-dark font-success col-md-6 height-66 text-center" maxLength={6} onChange={(e)=>setGetMobileNumber(e.target.value)}/>
                </div>
            </div>
        </>
    )
}

export default VerifyOtp