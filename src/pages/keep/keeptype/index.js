import { useRouter } from 'next/router';
import { useState } from 'react';
import KeepTypes from '../../../utils/keep_types'
import BannerLogo from '@/components/layout/banner/bannerLogo';
import BannerText from '@/components/layout/banner/bannerText';
const KeepType = () => {
    const router = useRouter()
    const [active, setActive] = useState(null)
    let moduleData = router.query.moduleData;
    let keepDuration = router.query.keepDuration;

    const navPage = (e) => {
        router.push({
            pathname: '/inputnumber',
            query: {
              moduleData: moduleData,
              tat: e,
              service: keepDuration
    
    
            }
          },'/inputnumber')
    }
    return (
        <>
            <div className='container-fluid pt-5'>
            <div className='row'>
            <div className='col-lg-5 left-panel align-self-center'>
                    {/* left */}
                    <div className='row'>
                        <div className='col-xl-12 col-lg-12 col-md-12 col-sm-6 col-6 my-auto'><BannerText unboldChar="Please select" boldChar="Keep Duration" /></div>
                        <div className='col-xl-12 col-lg-12 col-md-12 col-sm-6 col-6'><BannerLogo/></div>
                    </div>
                </div>
                    <div className='col-lg-7 right-panel'>
                        {/* right */}
                        <div className='row'>
                            <div className='col-lg-12'>
                                {
                                    KeepTypes.map((val) =>
                                        <li className={`row bg bg-white rounded align-items-center mb-2 border-shadow services mx-auto text-center ${active == val && 'active'}`} key={val.typeCode} onMouseLeave={()=> setActive(null)} onMouseEnter={()=> setActive(val)} onClick={() => navPage(val.typeCode)}>
                                            <div className="col-12 fs-28 font-capitalize">
                                               <div>{val.typeName}</div>
                                            </div>
                                            
                                        </li>
                                        
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default KeepType