
import QRCodeGenerator from '@/components/layout/qrgenerator';
import { useRouter } from 'next/router';


const generateQRPage = () => {

    const router = useRouter()
    let transNumber = router.query.transNumber;
    let qpin = router.query.qpin;
    let location = router.query.location;

    return (

        <div className='container-fluid pt-5 '>
            <div className="row">
                <QRCodeGenerator  quickpin={qpin}/><br/>
                <strong>Transaction #: {transNumber}</strong><br />
                Quickpin : {qpin}<br/>
                Location : {location}
            </div>
        </div>        
    )
}

export default generateQRPage