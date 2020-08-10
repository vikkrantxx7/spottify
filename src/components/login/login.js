import './login.scss'
import { loginUrl } from './loginConstants.js'

const Login = () => {
    return (
        <div className="login">
            <img src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="Spotify Login" />
            <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
        </div>
    )
}

Login.displayName = 'Login'

export default Login
