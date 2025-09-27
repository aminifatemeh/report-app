import Overview from '../../components/Overview/Overview';
import Notifications from '../../components/Notifications/Notifications';
import Students from '../../components/Students/Students';
import './Dashboard.scss';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <div className="left-section">
                <Overview />
                <div className="bottom-section">
                    <Notifications />
                    <Students />
                </div>
            </div>
            <div className="right-section">
                {/* سایدبار راست بعداً اضافه می‌شه */}
            </div>
        </div>
    );
};

export default Dashboard;