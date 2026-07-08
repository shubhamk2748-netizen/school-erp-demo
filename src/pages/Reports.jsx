function Reports() {
  return (
    <div className="module-page">
      <div className="module-header">
        <div>
          <h2>Reports</h2>
          <p>Generate student, attendance and fee reports.</p>
        </div>

        <button className="primary-btn">Generate Report</button>
      </div>

      <div className="stats-grid">
        <div className="stat-card blue">
          <h3>180</h3>
          <span>Student Records</span>
        </div>

        <div className="stat-card green">
          <h3>96%</h3>
          <span>Attendance Report</span>
        </div>

        <div className="stat-card orange">
          <h3>₹4.8L</h3>
          <span>Fee Report</span>
        </div>

        <div className="stat-card purple">
          <h3>3</h3>
          <span>Report Types</span>
        </div>
      </div>

      <div className="section-card">
        <div className="module-header">
          <div>
            <h3>Available Reports</h3>
            <p>Download basic school reports in PDF or Excel format.</p>
          </div>

          <button className="mini-btn">Export All</button>
        </div>

        <table className="erp-table">
          <thead>
            <tr>
              <th>Report Name</th>
              <th>Description</th>
              <th>Format</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Student Report</td>
              <td>Complete student list with class details</td>
              <td>PDF / Excel</td>
              <td><span className="status active">Ready</span></td>
              <td>
                <button className="mini-btn">Download</button>
              </td>
            </tr>

            <tr>
              <td>Attendance Report</td>
              <td>Daily and monthly attendance summary</td>
              <td>PDF</td>
              <td><span className="status active">Ready</span></td>
              <td>
                <button className="mini-btn">Download</button>
              </td>
            </tr>

            <tr>
              <td>Fee Report</td>
              <td>Fee collection and pending fee summary</td>
              <td>PDF / Excel</td>
              <td><span className="status active">Ready</span></td>
              <td>
                <button className="mini-btn">Download</button>
              </td>
            </tr>

            <tr>
              <td>Advanced Analytics</td>
              <td>Charts, yearly comparison and custom filters</td>
              <td>Dashboard</td>
              <td><span className="status leave">Premium</span></td>
              <td>
                <button className="mini-btn locked">Locked 🔒</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="section-card">
        <h3>Premium Upgrade</h3>
        <p>
          Advanced analytics, custom date range reports, automatic email reports
          and detailed charts are available in upgraded plans.
        </p>
      </div>
    </div>
  );
}

export default Reports;