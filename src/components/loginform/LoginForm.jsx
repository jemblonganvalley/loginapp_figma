import "./LoginForm.css";

const LoginForm = () => {
  return (
    <main className="form_wrapper">
      <div className="form_container">
        <div className="left_side">
          <h1>left side</h1>
        </div>

        <div className="right_side">
          <h1>Sign In</h1>

          <form className="login_form">
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Email Address"
            />
            <input
              type="password"
              id="password"
              name="password"
              placeholder="password"
            />
            <button className="login_button">continue</button>
          </form>

          <div className="socmed_login">
            <h3>Or Login With</h3>
            <button className="g_login">Sign In With Google</button>
            <button className="f_login">Sign in Wit Facebook</button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LoginForm;
