import { useState, useEffect } from 'react'
import Image from 'next/image'
import DoorSizes from '../../../utils/keep_door_sizes'
import { useRouter } from 'next/router';
const SizesList = () => {
    const [active, setActive] = useState(null)
    const router = useRouter()
    let moduleData = router.query.moduleData;
    const navPage = () => {
      
      router.push({
        pathname: '/keep/doorrate',
        query: {
          moduleData: moduleData,
          tat: '',


        }
      },'/keep/doorrate')

    }
    return (
        <>
         <div>
               <ul className='container-fluid'>
                      {
                          DoorSizes.map((val) =>
                              <li className={`row bg bg-white rounded align-items-center mb-2 border-shadow services px-3 ${active == val && 'active'}`} key={val.doorSizeCode} onMouseLeave={()=> setActive(null)} onMouseEnter={()=> setActive(val)} onClick={() => navPage(val.doorSizeCode, val.doorsizesName)}>
                                  {/*                                   
                                  <div className="col-lg-2 col-md-3 col-sm-3 col-3">
                                    <Image src={val.serviceImage} alt=""/>
                                      
                                    
                                  </div>
                                  <div className='text-left col-lg-8 col-md-9 col-sm-9 col-9'>
                                    <h2 className="fs-28 font-dark text-capitalize m-0">{val.doorsizesName}</h2>
                                  </div> */}

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
                                            <div className='col-12 fs-28 font-capitalize'>
                                              {val.doorsizesName}
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

export default SizesList