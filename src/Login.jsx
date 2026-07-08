import { FaUser, FaLock, FaEye, FaSyncAlt } from "react-icons/fa";

function Login({ onLogin }) {
  return (
    <div className="mst-login-page">
      <div className="mst-top-brand">
        <div className="mst-brand-logo">M</div>
        <div>
          <h1>Mehza SmartTech Solutions</h1>
          <p>Smart Solutions, Better Future</p>
        </div>
      </div>

      <div className="mst-login-card">
        <h2>Mehza SmartTech ERP</h2>
        <p className="mst-subtitle">School Management System</p>

        <label>User ID</label>
        <div className="mst-input">
          <FaUser />
          <input type="text" placeholder="Enter User ID" />
        </div>

        <label>Password</label>
        <div className="mst-input">
          <FaLock />
          <input type="password" placeholder="Enter Password" />
          <FaEye />
        </div>

        <label>Captcha</label>
        <div className="captcha-row">
          <div className="captcha-box">
            <span className="cap cap-0">M</span>
            <span className="cap cap-1">7</span>
            <span className="cap cap-2">K</span>
            <span className="cap cap-3">2</span>
            <span className="cap cap-4">P</span>
          </div>

          <button className="refresh-btn" type="button">
            <FaSyncAlt />
          </button>
        </div>

        <div className="mst-input">
          <input type="text" placeholder="Enter Captcha" />
        </div>

        <button className="mst-login-btn" onClick={onLogin}>
          LOGIN
        </button>

        <div className="mst-links">
          <a href="#">Forgot Password?</a>
          <a href="#">Forgot User ID?</a>
        </div>

        <p className="mst-powered">Powered by Mehza SmartTech Solutions</p>
      </div>
    </div>
  );
}

export default Login;