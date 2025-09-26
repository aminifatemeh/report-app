import Sidebar from '../../components/Sidebar/Sidebar';
import Header from '../../components/Header/Header';
import Logo from '../../components/Logo/Logo';
import { Outlet } from 'react-router-dom';
import './MainLayout.scss';

const MainLayout = () => {
    return (
        <div className="main-layout">
            <Logo />
            <Sidebar />
            <Header />
            <main className="content">
                <Outlet />
            </main>
        </div>
    );
};

export default MainLayout;