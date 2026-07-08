function Settings() {
  return (
    <div className="module-page">
      <div className="module-header">
        <div>
          <h2>Settings</h2>
          <p>Manage your school ERP configuration and account settings.</p>
        </div>

        <button className="primary-btn">
          Save Changes
        </button>
      </div>

      <div className="stats-grid">
        <div className="stat-card blue">
          <h3>School</h3>
          <span>Profile</span>
        </div>

        <div className="stat-card green">
          <h3>Admin</h3>
          <span>Account</span>
        </div>

        <div className="stat-card orange">
          <h3>Backup</h3>
          <span>Database</span>
        </div>

        <div className="stat-card purple">
          <h3>Basic</h3>
          <span>Plan</span>
        </div>
      </div>

      <div className="module-grid">

        <div className="section-card">
          <h3>School Information</h3>

          <p><b>School Name :</b> Excellent International School</p>
          <p><b>Session :</b> 2026-2027</p>
          <p><b>Phone :</b> 9211337013</p>
          <p><b>Email :</b> school@example.com</p>

          <button className="primary-btn">
            Update School Info
          </button>
        </div>

        <div className="section-card">
          <h3>Admin Account</h3>

          <p><b>Username :</b> admin</p>
          <p><b>Role :</b> Super Admin</p>
          <p><b>Password :</b> ****</p>

          <button className="primary-btn">
            Change Password
          </button>
        </div>

      </div>

      <div className="section-card">

        <div className="module-header">

          <div>
            <h3>System Settings</h3>
            <p>Basic configuration available in Starter ERP.</p>
          </div>

        </div>

        <table className="erp-table">

          <thead>
            <tr>
              <th>Setting</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td>Database Backup</td>
              <td>
                <span className="status active">Enabled</span>
              </td>
              <td>
                <button className="mini-btn">
                  Backup
                </button>
              </td>
            </tr>

            <tr>
              <td>Restore Backup</td>
              <td>
                <span className="status leave">Manual</span>
              </td>
              <td>
                <button className="mini-btn">
                  Restore
                </button>
              </td>
            </tr>

            <tr>
              <td>Software Version</td>
              <td>
                <span className="status active">
                  v1.0
                </span>
              </td>
              <td>
                <button className="mini-btn">
                  Check
                </button>
              </td>
            </tr>

          </tbody>

        </table>

      </div>

      <div className="section-card">

        <h3>Premium Features 🔒</h3>

        <table className="erp-table">

          <thead>
            <tr>
              <th>Feature</th>
              <th>Availability</th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td>SMS Notification</td>
              <td>🔒 Premium</td>
            </tr>

            <tr>
              <td>WhatsApp Notification</td>
              <td>🔒 Premium</td>
            </tr>

            <tr>
              <td>Parent Login</td>
              <td>🔒 Premium</td>
            </tr>

            <tr>
              <td>Teacher Login</td>
              <td>🔒 Premium</td>
            </tr>

            <tr>
              <td>Online Fee Payment</td>
              <td>🔒 Premium</td>
            </tr>

            <tr>
              <td>Bus Tracking</td>
              <td>🔒 Premium</td>
            </tr>

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Settings;