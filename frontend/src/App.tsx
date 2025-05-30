import { Routes, Route, Link } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './Components/PrivateRoute';

import Home from './pages/Home';
import Login from './pages/Login';
import Jobs from './pages/Jobs';
import Employees from './pages/Employees';
import Calendar from './pages/Calendar';
import CRM from './pages/CRM';
import QuickBooks from './pages/QuickBooks';
import TimeClock from './pages/TimeClock';
import Admin from './pages/Admin';

function App() {
  return (
    <AuthProvider>
      <nav style={{ padding: '1rem', borderBottom: '1px solid #ccc' }}>
        <Link to="/" style={{ marginRight: '1rem' }}>Home</Link>
        <Link to="/login" style={{ marginRight: '1rem' }}>Login</Link>
        <Link to="/jobs" style={{ marginRight: '1rem' }}>Jobs</Link>
        <Link to="/employees" style={{ marginRight: '1rem' }}>Employees</Link>
        <Link to="/calendar" style={{ marginRight: '1rem' }}>Calendar</Link>
        <Link to="/crm" style={{ marginRight: '1rem' }}>CRM</Link>
        <Link to="/quickbooks" style={{ marginRight: '1rem' }}>QuickBooks</Link>
        <Link to="/timeclock" style={{ marginRight: '1rem' }}>Time Clock</Link>
        <Link to="/admin">Admin</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/jobs" element={<PrivateRoute><Jobs /></PrivateRoute>} />
        <Route path="/employees" element={<PrivateRoute><Employees /></PrivateRoute>} />
        <Route path="/calendar" element={<PrivateRoute><Calendar /></PrivateRoute>} />
        <Route path="/crm" element={<PrivateRoute><CRM /></PrivateRoute>} />
        <Route path="/quickbooks" element={<PrivateRoute><QuickBooks /></PrivateRoute>} />
        <Route path="/timeclock" element={<PrivateRoute><TimeClock /></PrivateRoute>} />
        <Route path="/admin" element={<PrivateRoute><Admin /></PrivateRoute>} />
      </Routes>
    </AuthProvider>
  );
}

export default App;