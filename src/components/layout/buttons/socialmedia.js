

const SocialMedia = () => {
    
    const responseFacebook = (response) => {
        console.log(response);
      }

    const responseGoogle = (response) => {
        console.log(response);
      }

    const componentClicked = (res) => {
        console.log(res)
    }
    return (
        <>
          {/*}   <div>
               <FacebookLogin
                appId="263179379473101"
                autoLoad={false}
                fields="name,email,picture"
                onClick={componentClicked}
                callback={responseFacebook}
                cssClass="my-facebook-button-class border rounded text-light bg-fb col-lg-12 col-12 py-3"
                icon="fa-facebook" />
            </div>
            <div>
                <GoogleLogin
                clientId="850392982575-h7mth2jqvccoieppbdgbuuga1a963k0e.apps.googleusercontent.com"
                buttonText="Login using google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
                className=' border rounded text-dark bg-fb col-lg-12 col-12 py-2'/>
    </div>*/ }
        </>
    )
}

export default SocialMedia