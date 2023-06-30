import { useRouter } from "next/router"
import axios from 'axios'
const Verify = ({content, css ,otp, service, verifyNumber, moduleData, tat, nextPage, lockerLocation, receiverNumber}) => {
    const router = useRouter()
    let moduledata = ""
    const verifyOTP = async () => {
    if(moduleData == '0001'){
        try {
            axios.post('https://pandorav2-0-vlak.onrender.com/api/verify/otp/'+verifyNumber, {
                "mobileNumber": verifyNumber,
                "otp": otp
            }).then(res => {
                axios.post('https://pandora-2-0-test.onrender.com/api/wash/post/trans',{
                    'booking_Origin': '2',
                    'mobileNumber': verifyNumber,
                    'locData':  lockerLocation,
                    "moduleData": moduleData,
                    'serviceType': service,
                    'turnAroundTime' : tat,
                    'milestone': [{
                        'mlocData': lockerLocation
                    }]
          
                  }).then(res=> {
                    console.log(res.data)
                    
                    router.push({
                        pathname: '/generate-qr',
                        query: {
                          qpin: res.data.qpin,
                          transNumber: res.data.transNumber,
                          location: res.data.location
                        }
                      },'/generate-qr')

                      
                  })
            })
            .catch(err => {
                console.log(err)
            })
           
        }
        catch (error) {
            console.log(error)
        }
    }
    else {
       
        try {
            axios.post('https://pandorav2-0-vlak.onrender.com/api/verify/otp/'+verifyNumber, {
                "mobileNumber": verifyNumber,
                "otp": otp
            }).then(res => {
                if(moduleData == '0002') {
                    moduledata = 'drop'
                }
                else if(moduleData == '0004') {
                    moduledata = 'food'
                }
                
                axios.post('https://pandora-2-0-test.onrender.com/api/'+moduledata+'/post/trans',{
                    'booking_Origin': '2',
                    'mobileNumber': verifyNumber,
                    "doorSize": service,
                    "moduleData": moduleData,
                    "receiverNumber": receiverNumber,
                    'locData': lockerLocation,
                    'milestone': [{
                        'mlocData': lockerLocation
                    }]
          
                  }).then(res=> {
                    console.log(res.data)
                    
                    router.push({
                        pathname: '/generate-qr',
                        query: {
                          qpin: res.data.qpin,
                          transNumber: res.data.transNumber,
                          location: res.data.location
                        }
                      },'/generate-qr')
                      
                  })
            })
            .catch(err => {
                console.log(err)
            })
           
        }
        catch (error) {
            console.log(error)
        }
    }
    /*
        

        */
    }


    return (
        <button className={css} onClick={() => verifyOTP()}>{content} </button>
    )
}

export default Verify