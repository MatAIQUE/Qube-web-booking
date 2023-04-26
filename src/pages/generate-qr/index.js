import QRCodeGenerator from '@/components/layout/qrgenerator';
import { useRouter } from 'next/router';
const GenerateQR = () => {

    const router = useRouter()

    let transNumber = router.query.transNumber;
    let qpin = router.query.qpin;
    let location = router.query.location;

    return (

        <div className='container-fluid pt-5 '>
            <QRCodeGenerator quickpin={qpin}/><br/>
            Transaction #: {transNumber}<br/>
            Quickpin : {qpin}<br/>
            Location : {location}
        </div>        
    )
}

export default GenerateQR