import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

export default function Navbar(){
    const dispatch = useDispatch();
    const inAuthenticated = useSelector((state) => state.auth.isAuthenticated)

    return(
        <nav>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/courses">Courses</Link>
            <Link to="/profile">Profile</Link>
            {isAuthenticated && <button onClick={()=>dispatch(logout())}>Logout</button>}
        </nav>
    )
}