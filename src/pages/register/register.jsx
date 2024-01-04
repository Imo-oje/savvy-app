import "./register.scss";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../../components/navbar/navbar.jsx";

function Register() {
  return (
    <>
      <Navbar />
      <div className="register">
        <div className="legend">
          <h2>Start for free</h2>
          <h1>Create new account</h1>

          <Outlet />

          <small>
            Already A Member? <Link to="/savvy-app/login">login</Link>
          </small>
        </div>

        <form>
          <div>
            <label htmlFor="fullName">Full Name:</label>
            <input type="text" name="fullname" id="fullName" />
          </div>
          <label htmlFor="email">Email/Phone:</label>
          <input type="email" name="email" id="email" />
          <div className="password">
            <div>
              <label htmlFor="password">Password:</label>
              <input type="password" name="password" id="password" />
            </div>
            <div>
              <label htmlFor="confirmPassword">Confirm Password:</label>
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
              />
            </div>
          </div>
          <div className="button">
            <button>Reset password</button>
            <button>Create Account</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Register;
