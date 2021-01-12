import "./LoginForm.css";
import awan1 from "../../assets/decorationBawahKiri.svg";
import awan2 from "../../assets/decorationAtasKanan.svg";
import bulet1 from "../../assets/bulet1.svg";

const LoginForm = () => {
  return (
    <main className="form_wrapper">
      <div className="form_container">
        <div className="left_side">
          <img className="decorationAwan1" src={awan1} alt="awan satu" />

          <img src={awan2} alt="awan dua" className="decorationAwan2" />

          <img src={bulet1} alt="lingkaran 1" className="bulet1" />
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
            <div className="gradient_border"></div>

            <input
              type="password"
              id="password"
              name="password"
              placeholder="password"
            />
            <div className="gradient_border"></div>

            <button className="login_button">
              continue
              <i className="fa fa-chevron-right"></i>
            </button>
          </form>

          <div className="socmed_login">
            <h3>Or Login With</h3>

            <button className="g_login">
              <i className="fa fa-google-plus"></i>
              Sign In With Google
            </button>

            <button className="f_login">
              <i className="fa fa-facebook"></i>
              Sign in With Facebook
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LoginForm;
