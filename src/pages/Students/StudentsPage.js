import { useState } from "react";
import StudentsRightSidebar from "../../components/StudentsRightSidebar/StudentsRightSidebar";
import StudentProfile from "../../components/StudentProfile/StudentProfile";
import "./StudentsPage.scss";

const StudentsPage = () => {
  const [selectedStudent, setSelectedStudent] = useState(null);

  return (
    <div className="students-page">
      <div className="left-section">
        <StudentProfile selectedStudent={selectedStudent} />
      </div>
      <div className="right-section">
        <StudentsRightSidebar
          selectedStudent={selectedStudent}
          setSelectedStudent={setSelectedStudent}
        />
      </div>
    </div>
  );
};

export default StudentsPage;
