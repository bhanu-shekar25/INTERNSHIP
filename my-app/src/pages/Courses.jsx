import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourses } from "../features/userAPI";

export default function Courses(){
    const dispatch = useDispatch()
    const {Courses, loading} = useSelector({state}=>state.auth)

    useEffect(()=>{
        dispatch(fetchCourses())
    }, [dispatch])
    
    return(
        <div>
            <h1>Courses</h1>
            {loading ? <p>loading...</p>: <ul>{courses.map((course, idx)=><li key={idx}>{course}</li>)}</ul>}
        </div>
    )
}