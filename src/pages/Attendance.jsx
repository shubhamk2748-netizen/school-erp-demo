function Attendance() {
  return (
    <div className="module-page">
      <div className="module-header">
        <div>
          <h2>Attendance Management</h2>
          <p>Mark daily attendance and view attendance records.</p>
        </div>

        <button className="primary-btn">Save Attendance</button>
      </div>

      <div className="stats-grid">
        <div className="stat-card blue">
          <h3>180</h3>
          <span>Total Students</span>
        </div>

        <div className="stat-card green">
          <h3>172</h3>
          <span>Present Today</span>
        </div>

        <div className="stat-card orange">
          <h3>8</h3>
          <span>Absent Today</span>
        </div>

        <div className="stat-card purple">
          <h3>96%</h3>
          <span>Attendance Rate</span>
        </div>
      </div>

      <div className="section-card">
        <div className="module-header">
          <div>
            <h3>Mark Attendance</h3>
            <p>Select class, date and mark present or absent.</p>
          </div>

          <button className="mini-btn">Export</button>
        </div>

        <div className="filter-row">
  <input type="date" />

  <select>
    <option>Select Class</option>
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
    <option>Select Section</option>
    <option>Section A</option>
    <option>Section B</option>
    <option>Section C</option>
  </select>
</div>
        <table className="erp-table">
          <thead>
            <tr>
              <th>Roll No.</th>
              <th>Student Name</th>
              <th>Class</th>
              <th>Attendance</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>101</td>
              <td>Rahul Kumar</td>
              <td>Class 8</td>
              <td><span className="status active">Present</span></td>
              <td>
                <button className="mini-btn">Present</button>
                <button className="mini-btn edit">Absent</button>
              </td>
            </tr>

            <tr>
              <td>102</td>
              <td>Anjali Singh</td>
              <td>Class 6</td>
              <td><span className="status leave">Absent</span></td>
              <td>
                <button className="mini-btn">Present</button>
                <button className="mini-btn edit">Absent</button>
              </td>
            </tr>

            <tr>
              <td>103</td>
              <td>Aman Verma</td>
              <td>Class 4</td>
              <td><span className="status active">Present</span></td>
              <td>
                <button className="mini-btn">Present</button>
                <button className="mini-btn edit">Absent</button>
              </td>
            </tr>

            <tr>
              <td>104</td>
              <td>Priya Sharma</td>
              <td>Class 9</td>
              <td><span className="status active">Present</span></td>
              <td>
                <button className="mini-btn">Present</button>
                <button className="mini-btn edit">Absent</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="section-card">
        <h3>Basic Plan Note</h3>
        <p>
          Monthly Attendance Report and Biometric Attendance are available in upgraded plans.
        </p>
      </div>
    </div>
  );
}

export default Attendance;