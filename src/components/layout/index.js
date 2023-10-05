import Head from "./head";
import Header from "../layout/header/";
import Breadcrumb from "../layout/breadcrumbs";
import { AuthContextProvider } from "@/context/AuthContext";
import { LocationContextProvider } from "@/context/LocationContext";
import { LoadingContextProvider } from "@/context/LoadingContext";
import { TransactionContextProvider } from "@/context/TransactionContext";
const Layout = ({ children }) => {
  return (
    <AuthContextProvider>
      <div className='container'>
        <LoadingContextProvider>
          <TransactionContextProvider>
            <Head />
            <Header />
            <Breadcrumb />
            <div>
              <LocationContextProvider>{children}</LocationContextProvider>
            </div>
          </TransactionContextProvider>
        </LoadingContextProvider>
      </div>
    </AuthContextProvider>
  );
};

export default Layout;
