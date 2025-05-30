import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import type { ReactElement } from 'react'; // ✅ Explicit type-only import

export default function PrivateRoute({ children }: { children: ReactElement }) {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" />;
}