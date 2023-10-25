import Link from "next/link"
import Lottie from "lottie-react"
import pagenotfound from "@/assets/lottie/404.json"

const pageNotFound = () => {
    return (
        // <div>
        //     <h1>Page Not Found</h1>
        //     <h5>Go back to <Link href={'/'}>home</Link></h5>
        // </div>
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 vh-75 d-flex text- center justify-content-center">
                    <Lottie
                    animationData={pagenotfound}
                    loop={true}
                    className=''
                    />
                </div>
                <h3 className="text-center">Go back to <Link className="text-transform-none" href={'/'}>home</Link></h3>
            </div>
        </div>
    )
}

export default pageNotFound