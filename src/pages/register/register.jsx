import "./register.scss";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../../components/navbar/navbar.jsx";
import Button from "../../components/button/button.jsx";

function Register() {
  return (
    <>
      <Navbar />

      <div className="register">
        <legend className="legend">
          <h2>Start for free</h2>
          <h1>Create new account</h1>

          <small>
            Already A Member? <Link to="/savvy-app/login">login</Link>
          </small>
        </legend>

        <form>
          <label htmlFor="fullName">Full Name:</label>
          <input type="text" name="fullname" id="fullName" />
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" id="email" />

          <div className="button">
            <Button name="Create Account" className="create-account-btn" />
          </div>
        </form>
      </div>
    </>
  );
}

export default Register;
