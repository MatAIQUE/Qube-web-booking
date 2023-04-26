import svgs from '../../../utils/svg'
import Image from 'next/image'
const Logo = () => {
    return (
        
        <div className="col-md-6 col-sm-6 me-lg-auto">
            <Image
            src={svgs.qubeLogo}
            alt=""
            />
        </div>
    )
}

export default Logo