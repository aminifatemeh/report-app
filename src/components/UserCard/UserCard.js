import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import WomanAvatar from "../../assets/icons/woman-avatar.svg";
import ManAvatar from "../../assets/icons/man-avatar.svg";
import "./UserCard.scss";

const UserCard = ({ name, details, gender, session, isReport = false }) => {
  return (
    <div className="user-card">
      <div
        className="avatar-container"
        style={{
          backgroundColor: gender === "female" ? "#FED09E" : "#C4BDFF",
        }}
      >
        <img
          src={gender === "female" ? WomanAvatar : ManAvatar}
          alt="avatar"
          className="avatar-icon"
        />
      </div>
      <div className="user-info">
        <span className="user-name">{name}</span>
        <span className="user-details">{details}</span>
      </div>
      {isReport && session && (
        <span className="session-badge">session {session}</span>
      )}
      <ArrowRightIcon className="arrow-icon" />
    </div>
  );
};

export default UserCard;
