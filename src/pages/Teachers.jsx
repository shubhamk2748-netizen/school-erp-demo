function Teachers() {
  return (
    <div className="module-page">
      <div className="module-header">
        <div>
          <h2>Teacher Management</h2>
          <p>Manage teacher records, subjects and class assignments.</p>
        </div>

        <button className="primary-btn">+ Add Teacher</button>
      </div>

      <div className="stats-grid">
        <div className="stat-card blue">
          <h3>12</h3>
          <span>Total Teachers</span>
        </div>

        <div className="stat-card green">
          <h3>9</h3>
          <span>Class Teachers</span>
        </div>

        <div className="stat-card orange">
          <h3>18</h3>
          <span>Subjects Assigned</span>
        </div>

        <div className="stat-card purple">
          <h3>100%</h3>
          <span>Active Staff</span>
        </div>
      </div>

      <div className="section-card">
        <div className="module-header">
          <div>
            <h3>Teacher List</h3>
            <p>Search, view and manage teacher information.</p>
          </div>

          <button className="mini-btn">Export</button>
        </div>

        <div className="filter-row">
          <input type="text" placeholder="Search by teacher name, ID or mobile" />

          <select>
            <option>All Subjects</option>
            <option>English</option>
            <option>Mathematics</option>
            <option>Science</option>
            <option>Hindi</option>
          </select>

          <select>
            <option>All Status</option>
            <option>Active</option>
            <option>Inactive</option>
          </select>
        </div>

        <table className="erp-table">
          <thead>
            <tr>
              <th>Teacher ID</th>
              <th>Name</th>
              <th>Subject</th>
              <th>Assigned Class</th>
              <th>Mobile</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>T001</td>
              <td>Priya Sharma</td>
              <td>English</td>
              <td>Class 1</td>
              <td>9876543210</td>
              <td><span className="status active">Active</span></td>
              <td>
                <button className="mini-btn">View</button>
                <button className="mini-btn edit">Edit</button>
              </td>
            </tr>

            <tr>
              <td>T002</td>
              <td>Amit Verma</td>
              <td>Mathematics</td>
              <td>Class 2</td>
              <td>9876501234</td>
              <td><span className="status active">Active</span></td>
              <td>
                <button className="mini-btn">View</button>
                <button className="mini-btn edit">Edit</button>
              </td>
            </tr>

            <tr>
              <td>T003</td>
              <td>Neha Singh</td>
              <td>Science</td>
              <td>Class 3</td>
              <td>9898989898</td>
              <td><span className="status active">Active</span></td>
              <td>
                <button className="mini-btn">View</button>
                <button className="mini-btn edit">Edit</button>
              </td>
            </tr>

            <tr>
              <td>T004</td>
              <td>Rohit Kumar</td>
              <td>Hindi</td>
              <td>Class 4</td>
              <td>9123456789</td>
              <td><span className="status active">Active</span></td>
              <td>
                <button className="mini-btn">View</button>
                <button className="mini-btn edit">Edit</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="section-card">
        <h3>Premium Upgrade</h3>
        <p>
          Teacher Login, Homework Upload, Marks Entry and Teacher Attendance
          are available in upgraded plans.
        </p>
      </div>
    </div>
  );
}

export default Teachers;