import {Routes, Route, Navigate} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Courses from './pages/Courses';
import Profile from './pages/Profile';
import Navbar from './components/Navbar';
import { useSelector } from 'react-redux';
import './styles.css';


function App(){
  const isAuthenticated = useSelector((state)=> state.auth.isAuthenticated);

  return(
    <>
      <Navbar />
      <main>
        <Routes>
            <Route path='/' element={<Navigate to= "/dashboard" />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/courses' element={isAuthenticated ? <Courses /> : <Navigate to="/dashboard" />} />
            <Route path='/profile' element={isAuthenticated ? <Profile /> : <Navigate to="/dashboard" />} />
        </Routes>
      </main>
    </>
  );
}


export default App;
