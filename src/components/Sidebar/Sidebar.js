import { NavLink } from 'react-router-dom';
import { Dashboard, People, Description, Upload, CalendarToday } from '@mui/icons-material';
import './Sidebar.scss';

const Sidebar = () => {
    const menuItems = [
        { text: 'Dashboard', icon: <Dashboard sx={{ fontSize: '35px', color: '#E54200' }} />, path: '/dashboard' },
        { text: 'Students', icon: <People sx={{ fontSize: '35px', color: '#E54200' }} />, path: '/students' },
        { text: 'Reports', icon: <Description sx={{ fontSize: '35px', color: '#E54200' }} />, path: '/reports' },
        { text: 'Uploads', icon: <Upload sx={{ fontSize: '35px', color: '#E54200' }} />, path: '/uploads' },
        { text: 'Calendar', icon: <CalendarToday sx={{ fontSize: '35px', color: '#E54200' }} />, path: '/calendar' },
    ];

    return (
        <div className="sidebar">
            <ul className="sidebar-menu">
                {menuItems.map((item) => (
                    <li key={item.text}>
                        <NavLink to={item.path} className="sidebar-link" activeClassName="active">
                            <div className="sidebar-item">
                                {item.icon}
                                <span>{item.text}</span>
                            </div>
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;