import "./register.scss";

function Register() {
  return (
    <>
      <h2>Start for free</h2>
      <h1>Create new account</h1>
      <small>
        Already A Member? <span>Login</span>
      </small>

      <form>
        <div>
          <input type="text" name="firstname" id="firstName" />
          <input type="text" name="lastname" id="lastName" />
        </div>
        <input type="email" name="email" id="email" />
        <div>
          <input type="password" name="password" id="password" />
          <input type="password" name="confirmpassword" id="confirmPassword" />
        </div>
        <button>Reset password</button>
        <button>Create Account</button>
      </form>
    </>
  );
}

export default Register;
