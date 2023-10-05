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
      <div className='d-flex justify-content-between pt-3 align-items-center'>
        <Logo />

        {user ? (
          <>
            <nav className='navbar navbar-expand-lg'>
              <div className='container-fluid'>
                <button
                  className='navbar-toggler'
                  type='button'
                  data-bs-toggle='collapse'
                  data-bs-target='#navbarNavDarkDropdown'
                  aria-controls='navbarNavDarkDropdown'
                  aria-expanded='false'
                  aria-label='Toggle navigation'
                >
                  <span className='navbar-toggler-icon'></span>
                </button>
                <div
                  className='collapse navbar-collapse'
                  id='navbarNavDarkDropdown'
                >
                  <ul className='navbar-nav'>
                    <li className='nav-item dropdown'>
                      <a
                        href='#'
                        role='button'
                        data-bs-toggle='dropdown'
                        aria-expanded='false'
                      >
                        Notification
                      </a>

                      <ul className='dropdown-menu dropdown-menu'>
                        {isLoadingTrans && "Loading Transaction ..."}
                        {transaction.map((trans) => (
                          <li key={trans._id}>
                            <a
                              onClick={(e) => handleQuickPin(trans)}
                              className='dropdown-item'
                              // href='/generate-view-qr'
                            >
                              <span className='fw-bold small '>
                                Your Quickpin for transaction {trans.qpin}
                              </span>
                              <br />
                              <span className='text-muted small'>
                                your service has been placed in {trans.locName}
                                <span> locker.</span>
                              </span>
                              <br />
                              <span className='text-muted small'>
                                Use this quickpin to claim your item.
                              </span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>

            <span className='px-3'>{user?.firstName}</span>

            <span
              onClick={logout}
              className='border border-success rounded font-success bg-light py-1 px-3'
              style={{ cursor: "pointer" }}
            >
              Logout
            </span>
          </>
        ) : currentUrl == "/login" ? (
          ""
        ) : (
          <Menu />
        )}
      </div>
    </>
  );
};

export default Layout;
