function SchoolSetup() {
  return (
    <div className="module-page">
      <div className="module-header">
        <div>
          <h2>School Setup</h2>
          <p>Manage school profile, session, classes, subjects and settings.</p>
        </div>
        <button className="primary-btn">Update School Info</button>
      </div>

      <div className="stats-grid">
        <div className="stat-card blue">
          <h3>Excellent</h3>
          <span>School Profile</span>
        </div>

        <div className="stat-card green">
          <h3>2026-27</h3>
          <span>Academic Session</span>
        </div>

        <div className="stat-card orange">
          <h3>1 to 9</h3>
          <span>Total Classes</span>
        </div>

        <div className="stat-card purple">
          <h3>180</h3>
          <span>Total Students</span>
        </div>
      </div>

      <div className="module-grid">
        <div className="section-card">
          <h3>School Profile</h3>
          <p><b>School Name:</b> Excellent International School</p>
          <p><b>Affiliation:</b> State Board</p>
          <p><b>Principal:</b> Principal Name</p>
          <p><b>Phone:</b> 9211337013</p>
          <p><b>Email:</b> school@example.com</p>
          <p><b>Address:</b> Main Road, City</p>

          <button className="primary-btn">Edit Profile</button>
        </div>

        <div className="section-card">
          <h3>Academic Session</h3>
          <p><b>Current Session:</b> 2026 - 2027</p>
          <p><b>Total Classes:</b> 1 to 9</p>
          <p><b>Total Sections:</b> 9</p>
          <p><b>Status:</b> <span className="status active">Active</span></p>

          <button className="primary-btn">Change Session</button>
        </div>
      </div>

      <div className="module-grid">
        <div className="section-card">
          <h3>School Timing</h3>
          <p><b>Opening Time:</b> 08:00 AM</p>
          <p><b>Closing Time:</b> 02:00 PM</p>
          <p><b>Assembly:</b> 08:15 AM</p>
          <p><b>Lunch Break:</b> 11:30 AM</p>

          <button className="primary-btn">Edit Timing</button>
        </div>

        <div className="section-card">
          <h3>Documents</h3>
          <p><b>School Logo:</b> Uploaded</p>
          <p><b>Principal Signature:</b> Uploaded</p>
          <p><b>School Stamp:</b> Pending</p>
          <p><b>Letter Head:</b> Uploaded</p>

          <button className="primary-btn">Upload Documents</button>
        </div>
      </div>

      <div className="section-card">
        <div className="module-header">
          <div>
            <h3>Classes & Sections</h3>
            <p>Manage class strength and class teacher assignment.</p>
          </div>
          <button className="primary-btn">+ Add Class</button>
        </div>

        <table className="erp-table">
          <thead>
            <tr>
              <th>Class</th>
              <th>Section</th>
              <th>Class Teacher</th>
              <th>Total Students</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Class 1</td>
              <td>A</td>
              <td>Priya Sharma</td>
              <td>20</td>
              <td><span className="status active">Active</span></td>
              <td>
                <button className="mini-btn">View</button>
                <button className="mini-btn edit">Edit</button>
              </td>
            </tr>

            <tr>
              <td>Class 2</td>
              <td>A</td>
              <td>Amit Verma</td>
              <td>18</td>
              <td><span className="status active">Active</span></td>
              <td>
                <button className="mini-btn">View</button>
                <button className="mini-btn edit">Edit</button>
              </td>
            </tr>

            <tr>
              <td>Class 3</td>
              <td>A</td>
              <td>Neha Singh</td>
              <td>22</td>
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
        <div className="module-header">
          <div>
            <h3>Subject Management</h3>
            <p>Manage subjects and assign them to classes.</p>
          </div>
          <button className="primary-btn">+ Add Subject</button>
        </div>

        <table className="erp-table">
          <thead>
            <tr>
              <th>Subject</th>
              <th>Assigned Classes</th>
              <th>Teacher</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>English</td>
              <td>Class 1 to 9</td>
              <td>Priya Sharma</td>
              <td><span className="status active">Active</span></td>
              <td><button className="mini-btn edit">Edit</button></td>
            </tr>

            <tr>
              <td>Mathematics</td>
              <td>Class 1 to 9</td>
              <td>Amit Verma</td>
              <td><span className="status active">Active</span></td>
              <td><button className="mini-btn edit">Edit</button></td>
            </tr>

            <tr>
              <td>Science</td>
              <td>Class 3 to 9</td>
              <td>Neha Singh</td>
              <td><span className="status active">Active</span></td>
              <td><button className="mini-btn edit">Edit</button></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="section-card">
        <div className="module-header">
          <div>
            <h3>Holiday List</h3>
            <p>Manage school holidays and academic calendar.</p>
          </div>
          <button className="primary-btn">+ Add Holiday</button>
        </div>

        <table className="erp-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Holiday Name</th>
              <th>Type</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>15 Aug 2026</td>
              <td>Independence Day</td>
              <td>National Holiday</td>
              <td><span className="status active">Active</span></td>
            </tr>

            <tr>
              <td>02 Oct 2026</td>
              <td>Gandhi Jayanti</td>
              <td>National Holiday</td>
              <td><span className="status active">Active</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SchoolSetup;