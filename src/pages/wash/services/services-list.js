import { useState, useEffect } from 'react'
import WashServiceList from '../../../utils/wash_services'
import { useRouter } from 'next/router';
import { Player } from '@lottiefiles/react-lottie-player';

const Services = () => {
  const [active, setActive] = useState(null)

  const router = useRouter()
  let moduleData = router.query.moduleData;
  const navPage = (e, service) => {
    if(e == 1){
      router.push({
        pathname: '/wash/services/turnaroundtime',
        query: {
          service: e,
          moduleData: moduleData
        }
      },'/wash/services/turnaroundtime')
    }
    else {
      router.push({
        pathname: '/inputnumber',
        query: {
          service: e,
          moduleData: moduleData
        }
      },'/inputnumber')
    }
    
  }


    return (
        <>
         <div>
               <ul className='container-fluid'>
                
                      {
                          WashServiceList.map((val) =>
                              <li className={`row bg bg-white rounded align-items-center mb-2 border-shadow services ${active == val && 'active'}`} key={val.moduleData} onMouseLeave={()=> setActive(null)} onMouseEnter={()=> setActive(val)} onClick={() => navPage(val.serviceID, val.serviceType)}>
                                  <div className="col-lg-2 col-md-3 col-sm-3 col-3">
                                  
                                      <Player 
                                      src={val.serviceImage}
                                      loop
                                      autoplay
                                      className='border-shadow rounded-circle p-2'/>
                                    
                                  </div>
                                  <div className='text-left col-lg-8 col-md-9 col-sm-9 col-9'>
                                    <h2 className="fs-28 font-dark text-capitalize m-0">{val.serviceType}</h2>
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