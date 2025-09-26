import { useLocation } from 'react-router-dom';
import ProfileSnippet from '../ProfileSnippet/ProfileSnippet';
import './Header.scss';

const Header = () => {
    const location = useLocation();
    const pageTitles = {
        '/dashboard': 'Dashboard',
        '/students': 'Students',
        '/reports': 'Reports',
        '/uploads': 'Uploads',
        '/calendar': 'Calendar',
    };

    const pageTitle = pageTitles[location.pathname] || 'Home';

    return (
        <header className="header">
            <h1 className="page-title">{pageTitle}</h1>
            <ProfileSnippet />
        </header>
    );
};

export default Header;