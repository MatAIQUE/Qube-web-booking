import { useRouter } from "next/router";
import axios from "axios";
const NavToLoc = ({
  content,
  css,
  otp,
  service,
  verifyNumber,
  moduleData,
  tat,
  nextPage,
  lockerLocation,
  receiverNumber,
}) => {
  const router = useRouter();

  const verifyOTP = async () => {
    router.push(
      {
        pathname: "/location",
        query: {
          moduleData: moduleData,
          mobilenumber: verifyNumber,
          receiverNumber: receiverNumber,
          service: service,
          tat: "",
        },
      },
      "/location"
    );
  };

  return (
    <button className={css} onClick={() => verifyOTP()}>
      {content}{" "}
    </button>
  );
};

export default NavToLoc;
