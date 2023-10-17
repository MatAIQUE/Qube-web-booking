import Link from "next/link";
import svgs from "../../../utils/svg";
import Image from "next/image";
const Logo = () => {
  return (
    <div className=''>
      <Link href='/'>
        <Image src={svgs.qubeLogo} alt='' />
      </Link>
    </div>
  );
};

export default Logo;
