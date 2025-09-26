import { useNavigate } from 'react-router-dom';
import './MetricCard.scss';

const MetricCard = ({ icon, iconBg, title, subtitle, link }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        if (link) {
            navigate(link);
        }
    };

    return (
        <div className="metric-card" onClick={handleClick}>
            <div className="icon-container" style={{ backgroundColor: iconBg }}>
                {icon}
            </div>
            <div className="text-container">
                <span className="metric-title">{title}</span>
                <span className="metric-subtitle">{subtitle}</span>
            </div>
        </div>
    );
};

export default MetricCard;