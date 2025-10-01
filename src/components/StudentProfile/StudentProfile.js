import "./StudentProfile.scss";

const StudentProfile = ({ selectedStudent }) => {
  return (
    <div className="profile-container">
      <h3 className="section-title">
        {selectedStudent
          ? `${selectedStudent.name}'s Profile`
          : "Select a Student"}
      </h3>
      {/* محتوای پروفایل بعداً اضافه می‌شه */}
    </div>
  );
};

export default StudentProfile;
