import {
  FaHome,
  FaSchool,
  FaUserGraduate,
  FaChalkboardTeacher,
  FaCalendarCheck,
  FaMoneyBillWave,
  FaChartBar,
  FaCog,
  FaSignOutAlt,
  FaBars,
} from "react-icons/fa";

const menuItems = [
  { name: "Dashboard", icon: FaHome },
  { name: "School Setup", icon: FaSchool },
  { name: "Students", icon: FaUserGraduate },
  { name: "Teachers", icon: FaChalkboardTeacher },
  { name: "Attendance", icon: FaCalendarCheck },
  { name: "Fees", icon: FaMoneyBillWave },
  { name: "Reports", icon: FaChartBar },
  { name: "Settings", icon: FaCog },
  { name: "Logout", icon: FaSignOutAlt },
];

function Sidebar({ open, setOpen, active, setActive, logout }) {
  return (
    <aside className={open ? "sidebar" : "sidebar collapsed"}>
      <button className="hamburger" onClick={() => setOpen(!open)}>
        <FaBars />
      </button>

      <div className="brand">
        <div className="brand-logo">M</div>

        {open && (
          <div>
            <h2>Mehza ERP</h2>
            <p>School Management</p>
          </div>
        )}
      </div>

      <div className="menu-list">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.name}
              className={active === item.name ? "menu active" : "menu"}
              onClick={() => {
                if (item.name === "Logout") {
                  logout();
                } else {
                  setActive(item.name);
                }
              }}
            >
              <Icon size={18} />
              {open && <span>{item.name}</span>}
            </button>
          );
        })}
      </div>
    </aside>
  );
}

export default Sidebar;