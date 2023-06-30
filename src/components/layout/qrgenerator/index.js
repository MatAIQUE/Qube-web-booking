

import { useEffect, useState } from "react";
import { useQRCode } from 'next-qrcode';
const QRCodeGenerator = ({quickpin}) => {
    const [qr, setQr] = useState('')
    const { SVG } = useQRCode();

    useEffect(() => {
        if(quickpin != "") {
            setQr(
                <SVG
                text={quickpin}
                options={{
                  margin: 2,
                  width: 300,
                  color: {
                    dark: '#000',
                    light: '#fff',
                  },
                }}
                
              />)
        }
    },[])
    return (
        <>
        {qr}
       {/*   <QRCode value={quickpin}
                size={20}
                style={{ height: "auto", maxWidth: "100%", width: "30%", margin: "0 auto" }}
    viewBox={`0 0 100% 100%`}/> */} 

            
        </>
    )
}

export default QRCodeGenerator

