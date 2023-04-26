import { useRouter } from "next/router"
import axios from 'axios'
const Verify = ({content, css ,otp, service, verifyNumber, moduleData, tat, nextPage, lockerLocation}) => {
    const router = useRouter()
    const verifyOTP = async () => {
        
        try {
            axios.post('https://pandorav2-0-vlak.onrender.com/api/verify/otp/'+verifyNumber, {
                "mobileNumber": verifyNumber,
                "otp": otp
            }).then(res => {
                axios.post('https://pandora-dashboard.onrender.com/api/wash/post/trans',{
                    'booking_origin': '2',
                    'mobileNumber': verifyNumber,
                    'moduleData': moduleData,
                    'locData':  lockerLocation,
                    'serviceType': service,
                    'turnAroundTime' : tat,
                    'milestone': [{
                        'mlocData': lockerLocation
                    }]
          
                  }).then(res=> {
                    console.log(res.data.Data.qpin)

                    router.push({
                        pathname: '/generate-qr',
                        query: {
                          qpin: res.data.Data.qpin,
                          transNumber: res.data.Data.transNumber,
                          location: res.data.Data.locName
                        }
                      },'/generate-qr')
                  })
            })
            .catch(err => {
                console.log(err)
            })
       // router.push('/'+nextPage)
        /*
            const postResponse = await fetch(
                'https://pandorav2-0-vlak.onrender.com/api/trans/post',{
                    method: 'POST',
                    body: {
                        'mobileNumber': verifyNumber,
                        'refNumber': "",
                        'moduleData': moduleData,
                        'locData': "1000",
                        'serviceType': service,
                        'turnAroundTime' : tat,
                        'milestone': [{
                            'mlocData': "1000"
                        }]
                    }
                }
            )
            */    
        }
        catch (error) {
            console.log(error)
        }
    }


    return (
        <button className={css} onClick={() => verifyOTP()}>{content} {lockerLocation}</button>
    )
}

export default Verify