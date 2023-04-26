import { useEffect, useState } from "react"

const InputMobileNumber = ({setNumber}) => {

    const [mobileNumber, setMobileNumber] = useState(0)
    const [getMobileNumber, setGetMobileNumber] = useState(0)
    const [activeBorder, setActiveBorder] = useState('')
    useEffect(() => {
        setNumber(getMobileNumber)
        setMobileNumber(getMobileNumber)

    })
    return (
        <>
        <div className='container-fluid'>
     
            <div className="row">
                <div>Please enter your mobile number</div>
                <div>
                    <input type="text" className="fs-28 rounded border-dark font-success col-md-6 height-66 text-center" maxLength={11} onChange={(e)=>setGetMobileNumber(e.target.value)}/>
                </div>
            </div>
            
        </div>
        </>
    )
}

export default InputMobileNumber