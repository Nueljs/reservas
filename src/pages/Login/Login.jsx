import { useNavigate } from 'react-router-dom'
import fotoLogin from '../../assets/img/Foto_Login.png';
import { useEffect, useState } from 'react';

export const Login = () => {
  const nav = useNavigate()

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  
  useEffect(() => {
    console.log(email);
  }, [email]);
  useEffect(() => {
    console.log(password);
  }, [password]);


  return (
    <main className="container-fluid">
      <div className="d-flex justify-content-center">
        <div className="row gap-0 mt-140 mb-140">

          <div className="d-flex align-items-center justify-content-center col-6 b-3x-solid-manu">
            <div className="">
              <h1 className="">SIGN IN</h1>
              <form>
                <div className="">
                  <label htmlFor="email" className="">Email</label>
                  <div className="">
                    <span className=""><i className=""></i></span>
                    <input 
                      type="email" 
                      className="" 
                      id="email" 
                      name="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required 
                    />
                  </div> 
                </div>

                <div className="">
                  <label htmlFor="password" className="">Password</label>
                  <div className="">
                    <span className=""><i className=""></i></span>
                    <input 
                      type="password" 
                      className="" 
                      id="password" 
                      name="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required 
                    />
                  </div>
                </div>

                <div className="">
                  <input className="" type="checkbox" id="rememberMe" />
                  <label className="" htmlFor="rememberMe">
                    Remember Me
                  </label>
                </div>

                <button type="submit" className="">Sign in</button>
              </form>

              <div className="">
                <a href="#" className="">Forgot password?</a>
              </div>

              <div className="">
                <p>
                  ¿New in <strong>Random Events?</strong> <span className="" onClick={() => nav("/register")} role="button" style={{ cursor: 'pointer' }}>Sign up</span>
                </p>
              </div>
            </div>
          </div>

          <div className="col-6 p-0x">
            <img 
              src={fotoLogin} 
              alt="Imagen Login" 
              className="" 
            />
          </div>

        </div>
      </div>
    </main>
  )
}
