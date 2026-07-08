function Fees() {
  return (
    <div className="module-page">
      <div className="module-header">
        <div>
          <h2>Fee Management</h2>
          <p>Collect fees, manage pending dues and generate receipts.</p>
        </div>

        <button className="primary-btn">+ Collect Fee</button>
      </div>

      <div className="stats-grid">
        <div className="stat-card blue">
          <h3>₹4,80,000</h3>
          <span>Total Collection</span>
        </div>

        <div className="stat-card green">
          <h3>₹12,500</h3>
          <span>Today's Collection</span>
        </div>

        <div className="stat-card orange">
          <h3>₹35,000</h3>
          <span>Pending Fees</span>
        </div>

        <div className="stat-card purple">
          <h3>145</h3>
          <span>Paid Students</span>
        </div>
      </div>

      <div className="section-card">
        <div className="module-header">
          <div>
            <h3>Fee Collection Records</h3>
            <p>View paid and pending fee records.</p>
          </div>

          <div>
            <button className="mini-btn">Print</button>
            <button className="mini-btn edit">Export</button>
          </div>
        </div>

        <div className="filter-row">
          <input type="text" placeholder="Search student name or receipt no." />

          <select>
            <option>All Classes</option>
            <option>Class 1 - A</option>
            <option>Class 2 - A</option>
            <option>Class 3 - B</option>
            <option>Class 8 - A</option>
          </select>

          <select>
            <option>All Status</option>
            <option>Paid</option>
            <option>Pending</option>
          </select>
        </div>

        <table className="erp-table">
          <thead>
            <tr>
              <th>Receipt No.</th>
              <th>Student Name</th>
              <th>Class</th>
              <th>Amount</th>
              <th>Payment Mode</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>R001</td>
              <td>Rahul Kumar</td>
              <td>Class 8 - A</td>
              <td>₹5,000</td>
              <td>Cash</td>
              <td><span className="status active">Paid</span></td>
              <td>
                <button className="mini-btn">Receipt</button>
                <button className="mini-btn edit">View</button>
              </td>
            </tr>

            <tr>
              <td>R002</td>
              <td>Anjali Singh</td>
              <td>Class 6 - A</td>
              <td>₹4,500</td>
              <td>UPI</td>
              <td><span className="status active">Paid</span></td>
              <td>
                <button className="mini-btn">Receipt</button>
                <button className="mini-btn edit">View</button>
              </td>
            </tr>

            <tr>
              <td>R003</td>
              <td>Aman Verma</td>
              <td>Class 4 - B</td>
              <td>₹6,000</td>
              <td>Bank</td>
              <td><span className="status leave">Pending</span></td>
              <td>
                <button className="mini-btn">Collect</button>
                <button className="mini-btn locked">Reminder 🔒</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="section-card">
        <h3>Premium Upgrade</h3>
        <p>
          Online Fee Payment, Auto Fee Reminder and WhatsApp Receipt are available in upgraded plans.
        </p>
      </div>
    </div>
  );
}

export default Fees;