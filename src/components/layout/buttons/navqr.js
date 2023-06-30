import { useRouter } from "next/router"
import axios from 'axios'
const NavtoQR = ({content, css ,otp, service, verifyNumber, moduleData, tat, nextPage, lockerLocation,receiverNumber}) => {
    const router = useRouter()
    const verifyOTP = async () => {
        
        try {
            const response = await fetch (
                'https://pandorav2-0-vlak.onrender.com/api/get/'+ verifyNumber, 
                {
                    method: 'GET'
                }
            )
            router.push({
                pathname: '/inputotp',
                query: {
                  moduleData: moduleData,
                  mobilenumber: verifyNumber,
                  receiverNumber: receiverNumber,
                  lockerLocation: lockerLocation,
                  service: service,
                  tat: tat
                }
              },'/inputotp')
        }
        catch (error) {
            console.log(error)
        }
    }


    return (
        <button className={css} onClick={() => verifyOTP()}>{content}</button>
    )
}

export default NavtoQR