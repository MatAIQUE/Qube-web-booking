import Logo from "./logo"
import Menu from "./menu"

const Layout = () => {
    return (
        <>
        <div className="d-flex justify-content-between pt-3 align-items-center">
            <Logo />
            <Menu />
        </div>
        
        </>
    )  

}

export default Layout