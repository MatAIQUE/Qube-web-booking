import { useTransaction } from "@/context/TransactionContext";
import Logo from "./logo";
import Menu from "./menu";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/router";

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
                        <i
                          className='bi bi-bell'
                          style={{ fontSize: "30px" }}
                        ></i>
                      </a>
                      <ul className='dropdown-menu py-3'>
                        {isLoadingTrans && "Loading Transaction ..."}
                        {transaction.length < 1 && (
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

                        {transaction.map((trans) => (
                          <li key={trans._id}>
                            <a
                              onClick={(e) => handleQuickPin(trans)}
                              className='dropdown-item mb-2'
                              // href='/generate-view-qr'
                            >
                              <span className='fw-bold small text-success'>
                                {/* Your Quickpin is {trans.qpin} */}
                                {/* get service name and replace module data */}
                                Your quickpin for your {trans.moduleData} is
                                ready
                              </span>
                              <br />
                              <span className='text-muted small'>
                                Transaction {trans.transNumber}
                              </span>
                              <br />
                              <span className='text-muted  small'>
                                Location: {trans.locName}
                              </span>
                              <br />
                              <span className='text-muted small'>
                                Tap here to view QR
                              </span>
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
                        className='text-decoration-none text-success'
                      >
                        <i
                          className='bi bi-person-circle'
                          style={{ fontSize: "30px" }}
                        ></i>
                      </a>
                      <ul className='dropdown-menu'>
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
