import { useEffect, useState } from "react";
import UserCard from "../UserCard/UserCard";
import { getRecentReports } from "../../api/mockApi";
import "./RecentReports.scss";

const RecentReports = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    setReports(getRecentReports());
  }, []);

  return (
    <div className="reports-section">
      <h3 className="section-title">Recent Reports</h3>
      <div className="reports-list">
        {reports.map((report) => (
          <UserCard
            key={report.id}
            name={report.name}
            details={report.date}
            gender={report.gender}
            session={report.session}
            isReport={true}
          />
        ))}
      </div>
    </div>
  );
};

export default RecentReports;
