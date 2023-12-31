import Link from "next/link";

const BannerText = ({ unboldChar, boldChar }) => {
  return (
    <div className='font-light p-0'>
      <h3 className='text-center'>
        {unboldChar}
        <p className='font-semibold'>{boldChar}</p>
      </h3>
    </div>
  );
};
export default BannerText;
