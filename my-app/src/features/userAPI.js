import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const fetchCourses = createAsyncThunk('Courses', async()=> {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5');
    return response.data.map((item)=> item.title);
})