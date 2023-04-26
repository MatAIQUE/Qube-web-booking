import { useState } from 'react'
import ServicesList from '../../../utils/services'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
const Services = () => {
  const [active, setActive] = useState(null)
  const router = useRouter();
  const navPage = (e,module) => {
    
    router.push({
      pathname: e,
      query: {
        moduleData: module
      }
    },e)
  }
    return (
        <>
         <div>
               <ul className='container-fluid'>
                  {
                      ServicesList.map((val) =>
                          <li className={`row bg bg-white rounded align-items-center mb-2 border-shadow services ${active == val && 'active'}`} key={val.moduleData} onMouseLeave={()=> setActive(null)} onMouseEnter={()=> setActive(val)} onClick={()=> navPage(val.serviceType, val.serviceID)}>
                              <div className="col-lg-2 col-md-3 col-sm-3 col-3">
                                <Image src={val.serviceImage} alt="" className='border-shadow rounded-circle'/>
                              </div>
                              <div className='text-left col-lg-8 col-md-9 col-sm-9 col-9'>
                                <h2 className="fs-28 font-dark text-capitalize">{val.serviceType}</h2>
                                <h2 className="fs-12 font-dark opacity-25">{val.serviceDescription}</h2>
                              </div>
                              
                          </li>
                        
                    )
                  }
            </ul>
        </div>
        </>
    )
}

export default Services