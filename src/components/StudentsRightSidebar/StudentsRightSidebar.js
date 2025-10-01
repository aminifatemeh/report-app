import { useEffect, useState } from "react";
import { getStudents } from "../../api/mockApi";
import UserCard from "../UserCard/UserCard";
import SearchIcon from "@mui/icons-material/Search";
import "./StudentsRightSidebar.scss";

const StudentsRightSidebar = ({ selectedStudent, setSelectedStudent }) => {
  const [students, setStudents] = useState([]);
  const [sortBy, setSortBy] = useState("name");

  useEffect(() => {
    let sortedStudents = getStudents();
    if (sortBy === "level") {
      sortedStudents = [...sortedStudents].sort((a, b) => a.level - b.level);
    } else if (sortBy === "term") {
      sortedStudents = [...sortedStudents].sort((a, b) => a.term - b.term);
    } else if (sortBy === "gender") {
      sortedStudents = [...sortedStudents].sort((a, b) =>
        a.gender.localeCompare(b.gender)
      );
    } else {
      sortedStudents = [...sortedStudents].sort((a, b) =>
        a.name.localeCompare(b.name)
      );
    }
    setStudents(sortedStudents);
  }, [sortBy]);

  return (
    <div className="students-right-sidebar">
      <div className="search-bar">
        <SearchIcon className="search-icon" />
        <select
          className="sort-select"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="name">Sort by Name</option>
          <option value="level">Sort by Level</option>
          <option value="term">Sort by Term</option>
          <option value="gender">Sort by Gender</option>
        </select>
      </div>
      <div className="students-list">
        {students.map((student) => (
          <UserCard
            key={student.id}
            name={student.name}
            details={`Term ${student.term} - Level ${student.level}`}
            gender={student.gender}
            isSelected={student.id === selectedStudent?.id}
            onViewProfile={() => setSelectedStudent(student)}
            onCloseProfile={() => setSelectedStudent(null)}
          />
        ))}
      </div>
    </div>
  );
};

export default StudentsRightSidebar;
