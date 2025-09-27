import { useEffect, useState } from "react";
import { getStudents } from "../../api/mockApi";
import SearchIcon from "@mui/icons-material/Search";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import WomanAvatar from "../../assets/icons/woman-avatar.svg";
import ManAvatar from "../../assets/icons/man-avatar.svg";
import "./Students.scss";

const Students = () => {
  const [students, setStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [clickedStudentId, setClickedStudentId] = useState(null);

  useEffect(() => {
    setStudents(getStudents());
  }, []);

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCardClick = (id) => {
    setClickedStudentId(id);
    setTimeout(() => setClickedStudentId(null), 200); // ریست بعد از 200ms
  };

  return (
    <div className="students">
      <h3 className="section-title">Students</h3>
      <div className="search-bar">
        <SearchIcon className="search-icon" />
        <input
          type="text"
          placeholder="Search students..."
          className="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="student-list">
        {filteredStudents.map((student) => (
          <div
            key={student.id}
            className={`student-card ${
              clickedStudentId === student.id ? "clicked" : ""
            }`}
            onClick={() => handleCardClick(student.id)}
          >
            <div
              className="avatar-container"
              style={{
                backgroundColor:
                  student.gender === "female" ? "#FED09E" : "#C4BDFF",
              }}
            >
              <img
                src={student.gender === "female" ? WomanAvatar : ManAvatar}
                alt="avatar"
                className="avatar-icon"
              />
            </div>
            <div className="student-info">
              <span className="student-name">{student.name}</span>
              <span className="student-details">
                Term {student.term} - Level {student.level}
              </span>
            </div>
            <ArrowRightIcon className="arrow-icon" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Students;
