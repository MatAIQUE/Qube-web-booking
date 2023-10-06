import svgs from '../../../utils/svg'
import Image from 'next/image'
const Logo = () => {
    return (
        
        <div className="">
            <Image
            src={svgs.qubeLogo}
            alt=""
            />
        </div>
    )
}

export default Logo