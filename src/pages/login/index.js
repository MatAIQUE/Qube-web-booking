import { useState, useEffect } from 'react';
import BannerLogo from '@/components/layout/banner/bannerLogo';
import BannerText from '@/components/layout/banner/bannerText';
import Button from '@/components/layout/buttons/create'
import Textbox from '@/components/layout/textbox';
import MPIN from '@/components/layout/textbox/mpin';
const ProfileDefault = () => {
    const [mpin, setMpin] = useState('')
    const [username, setUser] = useState('')
    const [active, setActive] = useState('')
    const [pointer, setPointer] = useState('')
    useEffect((e) => {
        if(mpin.length > 5 && username.length > 10) {
            setActive(true)
        }
        else {
            setActive(false)
        }

        if(username.length > 10) {
            setPointer(false)            
        }
        else {
            setPointer(true)
        }
    })
    return (
        <div className='container-fluid pt-5'>
        <div className='row'>
            <div className='col-lg-6 left-panel align-self-center'>
                {/* left */}
                <div className='row'>
                    
                    <div className='col-xl-12 col-lg-12 col-md-12 col-sm-6 col-6'><div className='text-danger pb-3'>{global.config.globals.loggedOutText}</div><BannerText unboldChar="Please enter your" boldChar="Mobile number & MPIN" /></div>
                    <div className='col-xl-12 col-lg-12 col-md-12 col-sm-6 col-6'><BannerLogo/></div>
                </div>
            </div>

            <div className='col-lg-6 right-panel'>
                {/* right */}
                
                <div className='row'>
                    <div className='col-lg-12'>
                        <div>Username</div>
                        <Textbox setUser={setUser} css='fs-15 rounded border-dark font-dark col-md-6 height-66 text-left px-3'/>
                        <br /><br />
                        <div>6-Digit MPIN</div>
                        <MPIN setMpin={setMpin} css="fs-15 rounded border-dark font-dark col-md-6 height-66 text-left px-3"/>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-12'>
                            <Button content ={global.config.globals.loginAccount} css={active? 'mt-3 col-lg-6 col-12 border border-success rounded bg-gradients py-3 px-3' : 'opacity-50 pe-none mt-3 col-lg-6 col-12 border border-success rounded bg-gradients py-3 px-3'} />
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default ProfileDefault