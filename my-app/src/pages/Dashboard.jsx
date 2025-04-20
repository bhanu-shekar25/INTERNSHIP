import {useDispatch} from 'react-redux';
import {login} from '../store/authSlice';

export default function Dashboard(){
    const dispatch = useDispatch()

    return(
        <div>
            <h1>DASHBOARD</h1>
            <button onClick={()=> dispatch(login({user:"test"}))}>LOGIN</button>
        </div>
    )
}