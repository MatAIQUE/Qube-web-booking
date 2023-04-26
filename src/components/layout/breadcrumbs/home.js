import { useEffect, useState } from "react";
import { useRouter } from "next/router"
const Home = () => {
    const router = useRouter()
    const [result, setResult] = useState('')

    return (
        <div className="col-md-2">
           <span className="font-success">{global.config.breadcrumbs.home}</span>
        
            
        </div>
    )  

}

export default Home