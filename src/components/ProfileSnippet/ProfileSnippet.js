import { ArrowForward } from '@mui/icons-material';
import womanAvatar from '../../assets/icons/woman-avatar.svg';
import './ProfileSnippet.scss';

const ProfileSnippet = () => {
    return (
        <div className="profile-snippet">
            <div className="profile-left">
                <img src={womanAvatar} alt="Woman Avatar" className="avatar" />
                <div className="profile-text">
                    <span className="name">Ms. Amini</span>
                    <span className="role">Teacher</span>
                </div>
            </div>
            <ArrowForward className="arrow" />
        </div>
    );
};

export default ProfileSnippet;