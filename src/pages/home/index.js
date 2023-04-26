import BannerLogo from '../../components/layout/banner/bannerLogo'
import BannerText from '../../components/layout/banner/bannerText'
import ServicesPanel from './services/'
const HomePageWrap = () => {
    return (
        <>
        
        <div className='container-fluid pt-5'>
            <div className='row'>
                <div className='col-lg-5 left-panel align-self-center'>
                    {/* left */}
                    <div className='row'>
                        <div className='col-xl-12 col-lg-12 col-md-12 col-sm-6 col-6'><BannerText unboldChar="Discover the power of" boldChar="SMARTLOCKERS" /></div>
                        <div className='col-xl-12 col-lg-12 col-md-12 col-sm-6 col-6'><BannerLogo/></div>
                    </div>
                </div>
                <div className='col-lg-7 right-panel'>
                    {/* right */}
                    <div className='row'>
                        <div className='col-lg-12'>
                            < ServicesPanel/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default HomePageWrap