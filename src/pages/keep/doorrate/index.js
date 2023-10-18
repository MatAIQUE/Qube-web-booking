import { useState } from 'react';
import { useRouter } from 'next/router';
import BannerLogo from '@/components/layout/banner/bannerLogo';
import BannerText from '@/components/layout/banner/bannerText';
import KeepDuration from '../../../utils/keep_duration'
import Image from 'next/image';
const DoorRate = () => {
    const [active, setActive] = useState(null)
    const router = useRouter()
    let moduleData = router.query.moduleData;
    const navPage = (e) => {
 
        router.push({
            pathname: '/keep/keeptype',
            query: {
              moduleData: moduleData,
              keepDuration: e,
    
    
            }
          },'/keep/keeptype')
    }
    return (
        <>
          <div className='container-fluid pt-5'>
            
                <div className='row'>
                    {/* left panel */}
                    <div className='col-lg-6 left-panel mx-auto p-3'>
                        <div className='row  p-lg-5 m-lg-auto'>
                            <div className='mx-auto my-auto col-xl-12 col-lg-12 col-md-12 col-sm-6 col-6'>
                                <div className='w-100'>
                                    <BannerText unboldChar="Please select" boldChar="Keep Duration"/>
                                </div>
                            </div>
                            <div className='col-xl-8 col-lg-8 col-md-12 col-sm-6 col-6'><BannerLogo/></div>
                        </div>
                    </div>



                    {/* old */}
                    <div className='col-lg-6 right-panel'>
                        {/* right */}
                        <div className='row'>
                            <div className='col-lg-12'>
                                <div className='container-fluid'>
                                    {
                                        KeepDuration.map((val) =>
                                            <li className={`row bg bg-white rounded align-items-center mb-2 border-shadow services ${active == val && 'active'}`} key={val.durationCode} onMouseLeave={()=> setActive(null)} onMouseEnter={()=> setActive(val)} onClick={() => navPage(val.durationCode)}>
                                                
                                                <div className="col-3 font-semibold text-center">
                                                    <div>
                                                        <Image src={val.image}/>
                                                    </div>
                                                </div>




                                                {/*
                                                    <div className='text-left col-lg-4 col-md-3 col-sm-6 col-6'>
                                                    <h2 className="fs-12 font-dark m-0 opacity-50">{val.durationDescription}</h2>
                                                    <h2 className="fs-12 font-dark m-0 opacity-50">{val.durationDescription1}</h2>
                                                    <h2 className="fs-12 font-dark m-0 opacity-50">{val.durationDescription2}</h2>
                                                </div>
                                                */}


                                                <div className='col-9'>
                                                    <div className='row'>
                                                        <div className='container'>
                                                            <div className='row text-capitalize mb-1'>
                                                                <div className='col-12'>
                                                                    <small className='fs-14 low-opacity'>{val.durationDescription}</small>
                                                                </div>
                                                                <div className='col-12'>
                                                                    <small className='fs-14 low-opacity'>{val.durationDescription1}</small>
                                                                </div>
                                                                <div className='col-12'>
                                                                    <small className='fs-14 low-opacity'>{val.durationDescription2}</small>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>



                                                
                                            </li>
                                            
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* old */}
                    



                </div>
            </div>
        </>
    )
}

export default DoorRate