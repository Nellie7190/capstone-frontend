import GoogleLogin from "react-google-login";

const Login = () => {
    const URL = 'https://fierce-woodland-66018.herokuapp.com/'

    const Success = async (response) => {
        //users google info
        // console.log(response)
        const user = response.profileObj
            await fetch(`${URL}users`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'Application/json',
                },
                body: JSON.stringify(user),
            })
        
    }

    return (
        <>
        <GoogleLogin
            clientId='846496405823-lmb7nr0d0727v8d231gpvks7j7i4la19.apps.googleusercontent.com'
            buttonText='Login with Google'
            onSuccess={Success}
            // onFailure={}
            responseType='token'
        />
        </>
    )
}

export default Login