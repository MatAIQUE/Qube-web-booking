import Logo from "./logo";
import Menu from "./menu";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/router";

const Layout = () => {
  const { user, logout } = useAuth();
  const router = useRouter();

  // Get the current URL
  const currentUrl = router.asPath;

  return (
    <>
      <div className='d-flex justify-content-between pt-3 align-items-center'>
        <Logo />

        {user ? (
          <>
            <nav class='navbar navbar-expand-lg'>
              <div class='container-fluid'>
                <button
                  class='navbar-toggler'
                  type='button'
                  data-bs-toggle='collapse'
                  data-bs-target='#navbarNavDarkDropdown'
                  aria-controls='navbarNavDarkDropdown'
                  aria-expanded='false'
                  aria-label='Toggle navigation'
                >
                  <span class='navbar-toggler-icon'></span>
                </button>
                <div
                  class='collapse navbar-collapse'
                  id='navbarNavDarkDropdown'
                >
                  <ul class='navbar-nav'>
                    <li class='nav-item dropdown'>
                      <a
                        class='nav-link dropdown-toggle'
                        href='#'
                        role='button'
                        data-bs-toggle='dropdown'
                        aria-expanded='false'
                      >
                        Notification
                      </a>
                      <ul class='dropdown-menu dropdown-menu'>
                        <li>
                          <a className='dropdown-item' href='#'>
                            <span className='fw-bold small '>
                              Your Quickpin for transaction 1000-1000-1000
                            </span>
                            <br />
                            <span className='text-muted small'>
                              your service has been placed in Main office
                              locker.
                            </span>
                            <br />
                            <span className='text-muted small'>
                              Use this quickpin to claim your item.
                            </span>
                          </a>
                        </li>
                        <li>
                          <a className='dropdown-item' href='#'>
                            <span className='fw-bold small '>
                              Your Quickpin for transaction 1000-1000-1000
                            </span>
                            <br />
                            <span className='text-muted small'>
                              your service has been placed in Main office
                              locker.
                            </span>
                            <br />
                            <span className='text-muted small'>
                              Use this quickpin to claim your item.
                            </span>
                          </a>
                        </li>
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
