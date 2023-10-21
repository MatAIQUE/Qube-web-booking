import { useTransaction } from "@/context/TransactionContext";
import Logo from "./logo";
import Menu from "./menu";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/router";
import Image from "next/image";
import qubeeAvatar from "@/assets/img/qubeeAvatar.svg";
import qrIcon from "@/assets/img/QR.svg";

const Layout = () => {
  const { user, logout } = useAuth();
  const { transaction, isLoadingTrans } = useTransaction();
  const router = useRouter();
  const currentUrl = router.asPath;
  const { setSelectedTrans } = useTransaction();

  const handleQuickPin = (trans) => {
    setSelectedTrans(JSON.stringify(trans));
    router.push({
      pathname: "/generate-view-qr",
    });
  };

  const filteredTrans = transaction?.filter(
    (trans) => trans.transStatus === "0" || trans.transStatus === "4"
  );

  const sortedData = filteredTrans.sort(
    (a, b) => new Date(b.DateCreated) - new Date(a.DateCreated)
  );

  const limitedData = sortedData.slice(0, 5);

  // console.log(transaction[0].transStatus)

  // transStatus & Label
  // 0 - QR Ready
  // 1 - Picked up by Rider
  // 2 - Washing
  // 3 - Returning to Locker
  // 4 - Ready for Pickup
  // 5 - Completed
  // 6 - Cancelled

  function getServiceName(transaction) {
    switch (transaction) {
      case "0001":
        return "WASH";
      case "0002":
        return "DROP";
      case "0003":
        return "KEEP";
      case "0004":
        return "FOOD";
      case "0005":
        return "PAY";
      case "0006":
        return "MOVE";
      default:
        return null;
    }
  }
  function getStatusName(transaction) {
    switch (transaction) {
      case "0":
        return "For Dropping";
      case "4":
        return "For Claiming";
      default:
        return null;
    }
  }

  function getStatusBadge(transaction) {
    switch (transaction) {
      case "0":
        return "bg-warning";
      case "4":
        return "bg-success";
      default:
        return null;
    }
  }

  // console.log(transaction);

  return (
    <>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-12 py-2 py-md-5'>
            <div className='row my-auto'>
              <div className='col-6 my-auto'>
                <Logo />
              </div>

              {user ? (
                <div className='col-6 my-auto d-flex justify-content-end'>
                  <ul className='my-auto ps-4'>
                    {" "}
                    <li className='nav-item dropdown'>
                      <a
                        href='#'
                        role='button'
                        data-bs-toggle='dropdown'
                        aria-expanded='false'
                        className=' text-decoration-none text-black'
                      >
                        {/* <i
                          className='bi bi-bell'
                          style={{ fontSize: "28px", color: "green" }}
                        ></i> */}
                        <Image src={qrIcon} className='qr-icon' />
                      </a>
                      <ul className='dropdown-menu py-3 mt-2'>
                        {isLoadingTrans && "Loading Transaction ..."}
                        {sortedData.length < 1 && (
                          <>
                            <li>
                              <span className='fw-bold small text-muted dropdown-item text-center'>
                                No Notification
                              </span>
                            </li>
                            <li>
                              <span className='small text-muted dropdown-item text-center'>
                                Can't see your QR? Try reloading your browser
                              </span>
                            </li>
                          </>
                        )}

                        {limitedData.map((trans) => (
                          // transStatus 0 && 4
                          // transStatus 0 = drop
                          // transStatus 4 = claim
                          <li key={trans._id}>
                            <a
                              onClick={(e) => handleQuickPin(trans)}
                              className='dropdown-item mb-2'
                              // href='/generate-view-qr'
                            >
                              <div className=''>
                                <span className='fw-bold small text-success'>
                                  {/* Your Quickpin is {trans.qpin} */}
                                  {/* get service name and replace module data */}
                                  Your quickpin for your {""}
                                  {getServiceName(trans.moduleData)} is ready
                                </span>
                              </div>
                              <span className='text-muted small'>
                                Transaction {trans.transNumber}
                              </span>
                              <br />
                              <span className='text-muted small'>
                                Date{" "}
                                {new Date(trans.DateCreated).toLocaleDateString(
                                  "en-US",
                                  {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                  }
                                )}
                              </span>
                              <br />
                              <span className='text-muted  small'>
                                Location: {trans.locName}
                              </span>
                              <br />
                              {/* <span className='text-muted small'>
                                Tap here to view QR
                              </span>
                              <br /> */}
                              {/* transStatus=4 */}
                              <div
                                className={`badge badge-pill ${getStatusBadge(
                                  trans.transStatus
                                )} `}
                              >
                                {getStatusName(trans.transStatus)}
                              </div>
                              {/* transStatus=5 */}
                              {/* <div className='badge badge-pill bg-success mb-2'>
                                {getStatusName(trans.transStatus)}
                              </div> */}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </li>
                  </ul>
                  <ul className='my-auto ps-4'>
                    {" "}
                    <li className='nav-item dropdown'>
                      <a
                        href='#'
                        role='button'
                        data-bs-toggle='dropdown'
                        aria-expanded='false'
                        className='text-decoration-none text-qube'
                      >
                        <Image src={qubeeAvatar} className='w-100 avatar' />
                      </a>
                      <ul className='dropdown-menu mt-3'>
                        <li className='pe-none'>
                          <a className='dropdown-item py-3'>
                            <strong className='text-capitalize'>
                              {user.firstName}
                            </strong>
                          </a>
                        </li>
                        <div className='dropdown-divider'></div>
                        <li>
                          <a
                            className='dropdown-item text-center py-3'
                            role='button'
                            onClick={logout}
                          >
                            <span className='fw-bold small pe-pointer text-danger'>
                              Logout
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              ) : currentUrl == "/login" ? (
                ""
              ) : (
                <Menu />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
