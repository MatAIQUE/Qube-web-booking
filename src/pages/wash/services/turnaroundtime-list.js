import { useState } from 'react'
import turnaroundtime from '../../../utils/turnaroundtime.js'
import Image from 'next/image'
import { useRouter } from 'next/router';

const TurnAroundTimeList = () => {
  const [active, setActive] = useState(null)
  const router = useRouter()
  let service = router.query.service;
  let moduleData = router.query.moduleData
  const navPage = (e) => {
    
      router.push({
        pathname: '/inputnumber',
        query: {
          service: service,
          turnaroundtimeSelect: e,
          moduleData: moduleData
        }
      },'/inputnumber')
    
    
  }
    return (
        <>
        <div>
               <ul className='container-fluid'>
                
                      {
                          turnaroundtime.map((val) =>
                              <li className={`row bg bg-white rounded align-items-center mb-2 border-shadow services ${active == val && 'active'}`} key={val.tatID} onMouseLeave={()=> setActive(null)} onMouseEnter={()=> setActive(val)} onClick={()=> navPage(val.tatID)} >
                                  
                                  
                                  {/*                                   
                                  <div className="col-lg-2 col-md-3 col-sm-3 col-3">
                                    <Image src={val.serviceImage} alt="" className='border-shadow rounded-circle'/>
                              
                                  </div>
                                  <div className='text-left col-lg-8 col-md-9 col-sm-9 col-9'>
                                    <h2 className="fs-28 font-dark text-capitalize m-0">{val.tatTitle}</h2>
                                    <h2 className="fs-12 font-dark opacity-25">{val.tatDescription}</h2>
                                  </div>
                                  */}





                                  {/* module image */}
                                  <div className='col-3 text-center'>
                                    <Image src={val.serviceImage} alt=""/>
                                  </div>

                                  {/* module content */}
                                  <div className='col-9'>
                                    {/* module title */}
                                    <div className='row'>
                                      {/* title */}
                                      <div className='container'>
                                        <div className='row font-semibold mb-1'>
                                          <div className='col-12 fs-28 font-capitalize font-dark'>
                                            {val.tatTitle}
                                          </div>
                                        </div>
                                      </div>
                                      
                                      {/* description */}
                                      <div className='container'>
                                        <div className='row'>
                                          <div className='col-12 fs-12'>
                                            {val.tatDescription}
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>




                                  
                              </li>
                            
                        )
                      }
                  
            </ul>
        </div>
        </>
    )
}

export default TurnAroundTimeList