import { useNavigate } from "react-router-dom";
import fotoLogin from "../../assets/img/Foto_Login.png";
import { useEffect, useState } from "react";
import "./Login.css"; // Asegúrate de importar el CSS

export const Login = () => {
  const nav = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    console.log(email);
  }, [email]);
  useEffect(() => {
    console.log(password);
  }, [password]);

  return (
    <main className="d-flex align-items-center justify-content-center font-family_login min-vh-100">
      <div className="container d-flex justify-content-center align-items-center mt-5 mb-5">
        <div className="row g-0 m-0 p-0 align-items-stretch rounded-3 shadow w-100 border-custom_login">
          {/* Formulario */}
          <div className="col-md-6 d-flex p-5">
            <div className="w-100 d-flex flex-column justify-content-center">
              <h1 className="text-center mb-5">SIGN IN</h1>
              <form className="font-size_login">
                {/* Email */}
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <i className="fa-solid fa-envelope"></i>
                    </span>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>

                {/* Password */}
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <i className="fa-solid fa-lock"></i>
                    </span>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      name="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                </div>

                {/* Checkbox */}
                <div className="form-check mb-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="rememberMe"
                  />
                  <label className="form-check-label" htmlFor="rememberMe">
                    Remember Me
                  </label>
                </div>

                {/* Botón de Inicio de Sesión */}
                <button type="submit" className="button_login btn w-100 mt-3">
                  Sign in
                </button>
              </form>

              {/* Enlace "Forgot Password" */}
              <div className="text-center mt-3">
                <a href="#" className="forgot-password">
                  Forgot password?
                </a>
              </div>

              {/* Enlace para Registrarse */}
              <div className="text-center mt-3">
                <p className="font-size_login mb-0">
                  ¿New in <strong>Random Events?</strong>{" "}
                  <span
                    className="register-link"
                    onClick={() => nav("/register")}
                    role="button"
                    tabIndex={0}
                  >
                    Sign up
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Imagen */}
          <div className="col-md-6 d-none d-md-block">
            <img
              src={fotoLogin}
              alt="Imagen Login"
              className="img-fluid w-100 h-100 rounded-end img_login"
            />
          </div>
        </div>
      </div>
    </main>
  );
};
