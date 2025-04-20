import {Routes, Route, Navigate} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Courses from './pages/Courses';
import Profile from './pages/Profile';
import Navbar from './components/Navbar';
import { useSelector } from 'react-redux';

function App(){
  const isAuthenticated = useSelector((state)=> state.auth.isAuthenticated);

  return{
    <>
    <Navbar />
    <Routes>
        <Route path='/' element={<Navigate to= "/dashboard" />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
        <Route path='/courses' element={isAuthenticated ? <Courses /> : <Navigate to="/dashboard" />}></Route>
        <Route path='/profile' element={isAuthenticated ? <Profile /> : <Navigate to="/dashboard" />}></Route>
    </Routes>
    </>
  }
}

export default App;
