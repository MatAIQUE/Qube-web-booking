import Link from "next/link";

const BannerText = ({ unboldChar, boldChar, locker }) => {
  return (
    <div className='font-light p-0'>
      <h3 className='text-center'>
        {unboldChar}
        <p className='font-semibold'>
          <Link style={{ textDecoration: "none", color: "#16b716" }} href='/'>
            {locker}{" "}
          </Link>
          {boldChar}
        </p>
      </h3>
    </div>
  );
};
export default BannerText;
