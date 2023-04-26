import QRCode from "react-qr-code";
const QRCodeGenerator = ({quickpin}) => {

    return (
        <>
           <QRCode value={quickpin}
                size={20}
                style={{ height: "auto", maxWidth: "100%", width: "30%", margin: "0 auto" }}
            viewBox={`0 0 100% 100%`}/>

            
        </>
    )
}

export default QRCodeGenerator

