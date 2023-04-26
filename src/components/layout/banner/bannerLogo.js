import Lottie from "lottie-react";
import qubeeLogo from '../../../assets/lottie/qubeeFloat.json'
const BannerLogo = () => {
    return (
        <div className="col-8 mx-auto">
            <Lottie animationData={qubeeLogo} loop={true} />
        </div>
    )
}
export default BannerLogo