import styles from '@/styles/Home.module.css'
const ProfileDefault = () => {
    return (
        <div className={styles.main}>
            <div className='container-fluid text-center'>
                <div className='row'>
                    <div className='col-lg-4 col-md-6'>
                        <div className='row'>
                            <div className='col-lg-12 col-md-6 col-sm-6'>
                                tagline
                            </div>
                            <div className='col-lg-12 col-md-6 col-sm-6'>
                                qubee
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-8'>
                        <div className='col-lg-12'>
                            <div className='col-md-6 col-sm-6'>
                                services
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileDefault