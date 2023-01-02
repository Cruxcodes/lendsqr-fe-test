import React,{useState} from 'react'
import image from '../../assets/img/sign-in-img.png'
const Login: React.FC = () => {
  // const [showPassword, setShowPassword] = useState<Boolean>(false);
  // const [password, setPassword] = useState<String>('');
  return (
    <div className='login-page'>
        <div className="login-page__left">
            <img src={image} alt="" />
        </div>

        <div className="login-page__right">
          <div className="info">
            <h2>Welcome!</h2>
            <p>Enter details to login.</p>
          </div>

          <form action="#!">
            <input type="email" placeholder='Email'/>
            <div className="password">
              <input type="password" placeholder='Password'/>
              <p className="show">SHOW</p>
            </div>
            <a href="#!" className="forgot">
              Forgot PASSWORD?
            </a>
            <input type="submit" value="LOG IN " />
          </form>
        </div>
    </div>
  )
}

export default Login