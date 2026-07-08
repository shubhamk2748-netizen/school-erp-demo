import { FaSearch, FaBell, FaEnvelope, FaUserCircle } from "react-icons/fa";

function Navbar({ active }) {
  return (
    <nav className="navbar">
      <div>
        <h1>{active}</h1>
        <p>Smart School ERP Control Center</p>
      </div>

      <div className="navbar-actions">
        <div className="search-box">
          <FaSearch />
          <input placeholder="Search modules, students..." />
        </div>

        <button className="nav-icon">
          <FaBell />
        </button>

        <button className="nav-icon">
          <FaEnvelope />
        </button>

        <div className="admin-profile">
          <FaUserCircle />
          <span>Super Admin</span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;