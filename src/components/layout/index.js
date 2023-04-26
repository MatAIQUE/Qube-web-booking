import Head from './head'
import Header from '../layout/header/'
import Breadcrumb from '../layout/breadcrumbs'
const Layout = ({children}) => {
    return (
        <div className="container">
            <Head />
            <Header />   
            <Breadcrumb /> 
            
            <div>{children}</div>
        </div>
    )  

}

export default Layout