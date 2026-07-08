const roles = [
  {
    role: "Super Admin",
    work: "Complete ERP control, school setup, users, permissions, reports, backup.",
    access: ["All Modules", "User Management", "Settings", "Reports"],
  },
  {
    role: "Principal",
    work: "Attendance monitoring, teacher performance, leave approvals, notices, reports.",
    access: ["Students View", "Teachers View", "Attendance Reports", "Approvals"],
  },
  {
    role: "Teacher",
    work: "Daily attendance, homework, marks entry, timetable, class student list.",
    access: ["Own Class", "Attendance", "Homework", "Marks"],
  },
  {
    role: "Accountant",
    work: "Fee collection, receipts, pending fees, income-expense, financial reports.",
    access: ["Fees", "Receipts", "Pending Fees", "Accounts"],
  },
  {
    role: "Reception",
    work: "Admission enquiry, new admission, visitor register, parent contact, documents.",
    access: ["Admissions", "Enquiries", "Visitors", "Documents"],
  },
  {
    role: "Parent",
    work: "Child attendance, homework, fee status, results, notices.",
    access: ["Child Profile", "Attendance", "Fees", "Homework", "Results"],
  },
];

function UserPortals() {
  return (
    <div className="section-card">
      <h2>User Portals & Role Access</h2>
      <p>Every user gets access according to their responsibility.</p>

      <div className="role-grid">
        {roles.map((item) => (
          <div className="role-card" key={item.role}>
            <h3>{item.role}</h3>
            <p>{item.work}</p>

            <div className="role-tags">
              {item.access.map((a) => (
                <span key={a}>{a}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserPortals;