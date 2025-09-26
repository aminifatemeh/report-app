import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout/MainLayout';
import Dashboard from './pages/Dashboard/Dashboard';
import Students from './pages/Students/Students';
import Reports from './pages/Reports/Reports';
import Uploads from './pages/Uploads/Uploads';
import Calendar from './pages/Calendar/Calendar';

function App() {
    return (
        <Router>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/students" element={<Students />} />
                    <Route path="/reports" element={<Reports />} />
                    <Route path="/uploads" element={<Uploads />} />
                    <Route path="/calendar" element={<Calendar />} />
                    <Route path="/" element={<Dashboard />} /> {/* صفحه پیش‌فرض */}
                </Route>
            </Routes>
        </Router>
    );
}

export default App;