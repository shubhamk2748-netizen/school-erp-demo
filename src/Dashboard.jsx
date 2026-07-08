import { useState } from "react";
import Sidebar from "./sidebar";
import Navbar from "./Navbar";

import SchoolSetup from "./pages/SchoolSetup";
import Students from "./pages/Students";
import Teachers from "./pages/Teachers";
import Attendance from "./pages/Attendance";
import Fees from "./pages/Fees";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";

function Dashboard({ logout }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [active, setActive] = useState("Dashboard");

  return (
    <div className="layout">
      <Sidebar
        open={sidebarOpen}
        setOpen={setSidebarOpen}
        active={active}
        setActive={setActive}
        logout={logout}
      />

      <div className={sidebarOpen ? "content" : "content full"}>
        <Navbar active={active} />

        <div className="dashboard-body">

          {active === "Dashboard" && (
            <>
              <div className="welcome-card">
                <div>
                  <h2>Welcome Back, Super Admin 👋</h2>
                  <p>
                    Manage students, teachers, attendance, fees and reports
                    from one dashboard.
                  </p>
                </div>

                <button className="primary-btn">
                  + New Admission
                </button>
              </div>

              <div className="stats-grid">

                <div className="stat-card blue">
                  <h3>180</h3>
                  <span>Total Students</span>
                </div>

                <div className="stat-card green">
                  <h3>12</h3>
                  <span>Teachers</span>
                </div>

                <div className="stat-card orange">
                  <h3>96%</h3>
                  <span>Attendance</span>
                </div>

                <div className="stat-card purple">
                  <h3>₹4.8 Lakh</h3>
                  <span>Fee Collection</span>
                </div>

              </div>

              <div className="section-card">
                <h2>Dashboard</h2>

                <p>
                  This is the <b>Dashboard</b> module.
                </p>

                <table className="erp-table">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Class</th>
                      <th>Status</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>1001</td>
                      <td>Rahul Kumar</td>
                      <td>X-A</td>
                      <td><span className="status active">Present</span></td>
                    </tr>

                    <tr>
                      <td>1002</td>
                      <td>Anjali Singh</td>
                      <td>IX-B</td>
                      <td><span className="status leave">Leave</span></td>
                    </tr>

                    <tr>
                      <td>1003</td>
                      <td>Aman Verma</td>
                      <td>VIII-C</td>
                      <td><span className="status active">Present</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </>
          )}

          {active === "School Setup" && <SchoolSetup />}
          {active === "Students" && <Students />}
          {active === "Teachers" && <Teachers />}
          {active === "Attendance" && <Attendance />}
          {active === "Fees" && <Fees />}
          {active === "Reports" && <Reports />}
          {active === "Settings" && <Settings />}

        </div>
      </div>
    </div>
  );
}

export default Dashboard;