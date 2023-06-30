import svgs from '@/utils/svg'
import Image from 'next/image'
const PHFlag = () => {
    return (
        
        <div className="col-md-6 col-sm-6 me-lg-auto">
            <Image
            src={svgs.phFlag} className='wh-20'
            alt=""
            />
        </div>
    )
}

export default PHFlag