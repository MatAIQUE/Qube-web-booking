import { useEffect, useState } from 'react';
import BannerLogo from '@/components/layout/banner/bannerLogo';
import BannerText from '@/components/layout/banner/bannerText';
import SocialMedia from '@/components/layout/buttons/socialmedia';
import Locations from '@/components/layout/option/location'
import Button from '@/components/layout/buttons/navqr'
import { useRouter } from 'next/router';

import svgs from '@/utils/svg'
import Image from 'next/image'

const Location = () => {
    const [loc, setLockerLoc] = useState('0000')
    const [active, setActive] = useState('')
    const router = useRouter()
    let service = router.query.service;
    let tat = router.query.tat;
    let moduleData = router.query.moduleData;
    let mobilenumber = router.query.mobilenumber;
    let receiverNumber = router.query.receiverNumber
   
    useEffect(() => {
        if(loc == '0000') {
            setActive(false)
        }
        else {
            setActive(true)
        }
    })
    return (
        <>
        <div className='container-fluid pt-5'>


        <div className='row'>
            <div className='col-lg-6 left-panel mx-auto p-3'>
                {/* left */}
                {/* <div className='row'>
                 
                    <div className='col-xl-12 col-lg-12 col-md-12 col-sm-6 col-6'><div className='text-danger pb-3'>{global.config.globals.loggedOutText}</div><BannerText unboldChar="Please select " boldChar="Locker Location" /></div>
                    <div className='col-xl-12 col-lg-12 col-md-12 col-sm-6 col-6'><BannerLogo/></div>
                </div> */}



                <div className='row  p-lg-5 m-lg-auto'>
                    <div className='mx-auto col-xl-12 col-lg-12 col-md-12 col-sm-6 col-6'>
                        <div className='w-100'>
                            <div className='text-danger pb-3'>
                                {global.config.globals.loggedOutText}
                            </div>
                            <BannerText unboldChar="Please enter your" boldChar="Contact number" />
                        </div>
                    </div>
                    <div className='col-xl-8 col-lg-8 col-md-12 col-sm-6 col-6'><BannerLogo/></div>
                </div>



            </div>
            <div className='col-lg-6 right-panel'>
                {/* right */}
                {/* <div className='row mt-3'>
                    <div className='col-lg-12'>
                        Module Data: {moduleData} <br />
                        Location : {loc} <br />
                        {service} <br />
                        {mobilenumber}<br/>
                        {receiverNumber}<br/>
                        {tat}
                        
                        <div>
                            Select Locker Location:
                            <Locations setLocation={setLockerLoc}/>
                        </div>
                        

                    </div>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <div className='container-fluid'>
                                <Button verifyNumber={mobilenumber} receiverNumber = {receiverNumber} lockerLocation={loc} service={service} tat={tat} moduleData={moduleData} content ={global.config.globals.verificationText} css={active? 'mt-3 col-lg-6 col-12 border border-success rounded bg-gradients py-3 w-100' : 'opacity-50 pe-none mt-3 col-lg-6 col-12 border border-success rounded bg-gradients py-3 w-100'} />
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-12 pt-5'>
                            <div className="container-fluid text-center w-100 align-self-center">
                                <div><span>OR LOGIN USING</span></div>
                            <SocialMedia />
                            </div>
                        </div>
                    </div>
                </div> */}
                

                {/* recipient - sender */}
                <div className="row mb-5 px-3 alert alert-success">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-8 my-auto text-success mb-2">
                                    <label><strong>Sender:</strong> {mobilenumber}</label>
                                </div>
                                {/*                         
                                <div className="col-4 mb-2 tawkr">
                                    <Lottie animationData={bounceLoader} loop={true}  className="w-30"/>
                                </div>
                                */}
                                <div className="col-4 mb-2 tawkr">
                                    <Image src={svgs.checkCircle} alt=""/>
                                </div>
                                
                            </div>
                        </div>
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-8 text-success my-auto mb-2">
                                    <label><strong>Receiver:</strong> {receiverNumber}</label>
                                </div>
                                
                                <div className="col-4 mb-2 tawkr">
                                    <Image src={svgs.checkCircle} alt=""/>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    {/* end of recipient - sender */}




                {/* form */}
                <div className='row mt-3'>

                    {/* data summary alert */}
                        {/*
                        <div className='col-lg-12'>
                            <div className='container-fluid'>
                                <div className='row alert alert-success'>
                                    <div className='col-6 text-left'>
                                        <div px-5 py-3>
                                            <div><strong>Module Data:</strong></div>
                                            <div><strong>Location:</strong></div>
                                            <div><strong>Service:</strong></div>
                                            <div><strong>Sender No.:</strong></div>
                                            <div><strong>Receiver No.:</strong></div>
                                            <div><strong>Turnaround Time:</strong></div>
                                        </div>
                                    </div>
                                    <div className='col-6 text-right'>
                                        <div px-5 py-3>
                                            <div> {moduleData}</div>
                                            <div> {loc}</div>
                                            <div> {service}</div>
                                            <div> {mobilenumber}</div>
                                            <div> {receiverNumber}</div>
                                            <div> {tat}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        */}
                    {/* end of data summary alert */}

                    <div className='col-lg-12'>
                        <Locations setLocation={setLockerLoc}/>
                    </div>
                    
                </div>
                {/* end of form */}

                {/* button group */}
                <div className='row'>
                    <div className='col-lg-12'>
                        <div className="container-fluid">
                            <Button verifyNumber={mobilenumber} receiverNumber = {receiverNumber} lockerLocation={loc} service={service} tat={tat} moduleData={moduleData} content ={global.config.globals.verificationText} css={active? 'mt-3 col-lg-6 col-12 border border-success rounded bg-gradients py-3 w-100' : 'opacity-50 pe-none mt-3 col-lg-6 col-12 border border-success rounded bg-gradients py-3 w-100'} />
                        </div>
                    </div>
                </div>
                <div className='row'>
                <div className='col-lg-12 pt-5'>
                        <div className="container-fluid text-center w-100 align-self-center">
                            <div><span>OR LOGIN USING</span></div>
                           <SocialMedia />
                        </div>
                    </div>
                </div>
                {/* end of button-group */}

                


            </div>






        </div>
    </div>
        </>
    )
}

export default Location