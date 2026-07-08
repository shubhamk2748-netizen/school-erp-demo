function Students() {
  return (
    <div className="module-page">
      <div className="module-header">
        <div>
          <h2>Student Management</h2>
          <p>Manage student admissions, records, search and profile actions.</p>
        </div>

        <button className="primary-btn">+ New Admission</button>
      </div>

      <div className="stats-grid">
        <div className="stat-card blue">
          <h3>180</h3>
          <span>Total Students</span>
        </div>

        <div className="stat-card green">
          <h3>12</h3>
          <span>New Admissions</span>
        </div>

        <div className="stat-card orange">
          <h3>102</h3>
          <span>Boys</span>
        </div>

        <div className="stat-card purple">
          <h3>78</h3>
          <span>Girls</span>
        </div>
      </div>

      <div className="section-card">
        <div className="module-header">
          <div>
            <h3>Student List</h3>
            <p>Search, filter, view and manage student records.</p>
          </div>

          <div>
            <button className="mini-btn">Export</button>
            <button className="mini-btn edit">Import</button>
          </div>
        </div>

        <div className="filter-row">
          <input type="text" placeholder="Search by name, admission no. or mobile" />
          <select>
            <option>All Classes</option>
            <option>Class 1</option>
            <option>Class 2</option>
            <option>Class 3</option>
            <option>Class 4</option>
            <option>Class 5</option>
            <option>Class 6</option>
            <option>Class 7</option>
            <option>Class 8</option>
            <option>Class 9</option>
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
              <th>Adm No.</th>
              <th>Student Name</th>
              <th>Class</th>
              <th>Father Name</th>
              <th>Mobile</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>1001</td>
              <td>Rahul Kumar</td>
              <td>Class 8</td>
              <td>Rajesh Kumar</td>
              <td>9876543210</td>
              <td><span className="status active">Active</span></td>
              <td>
                <button className="mini-btn">View</button>
                <button className="mini-btn edit">Edit</button>
                <button className="mini-btn locked">ID Card 🔒</button>
              </td>
            </tr>

            <tr>
              <td>1002</td>
              <td>Anjali Singh</td>
              <td>Class 6</td>
              <td>Suresh Singh</td>
              <td>9876501234</td>
              <td><span className="status active">Active</span></td>
              <td>
                <button className="mini-btn">View</button>
                <button className="mini-btn edit">Edit</button>
                <button className="mini-btn locked">ID Card 🔒</button>
              </td>
            </tr>

            <tr>
              <td>1003</td>
              <td>Aman Verma</td>
              <td>Class 4</td>
              <td>Rakesh Verma</td>
              <td>9898989898</td>
              <td><span className="status active">Active</span></td>
              <td>
                <button className="mini-btn">View</button>
                <button className="mini-btn edit">Edit</button>
                <button className="mini-btn locked">ID Card 🔒</button>
              </td>
            </tr>

            <tr>
              <td>1004</td>
              <td>Priya Sharma</td>
              <td>Class 9</td>
              <td>Mahesh Sharma</td>
              <td>9123456789</td>
              <td><span className="status leave">Inactive</span></td>
              <td>
                <button className="mini-btn">View</button>
                <button className="mini-btn edit">Edit</button>
                <button className="mini-btn locked">ID Card 🔒</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="section-card">
        <h3>Premium Upgrade</h3>
        <p>
          ID Card Generator, Certificate Generator, Parent Login and Document Upload
          are available in upgraded plans.
        </p>
      </div>
    </div>
  );
}

export default Students;