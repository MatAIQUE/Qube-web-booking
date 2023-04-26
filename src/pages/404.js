import Link from "next/link"

const pageNotFound = () => {
    return (
        <div>
            <h1>Page Not Found</h1>
            <h5>Go back to <Link href={'/'}>home</Link></h5>
        </div>
    )
}

export default pageNotFound