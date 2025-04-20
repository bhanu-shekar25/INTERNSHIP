import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../store/authSlice'; // ✅ Import logout
import '../styles.css'; // ✅ Import CSS if not already

export default function Navbar() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <nav>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/courses">Courses</Link>
      <Link to="/profile">Profile</Link>
      {isAuthenticated && (
        <button className="logout-button" onClick={() => dispatch(logout())}>
          Logout
        </button>
      )}
    </nav>
  );
}
