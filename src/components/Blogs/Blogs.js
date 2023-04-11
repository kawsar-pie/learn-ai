import React, { useEffect, useState } from 'react';
import "./Blogs.css";
import Blog from '../Blog/Blog';
import DashBoard from '../DashBoard/DashBoard';
import { addtoDb, getStoredData } from '../DashBoard/localDb';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [reads, setReads] = useState(0);

    const addReadingTime = (duration) =>{
        addtoDb(duration,"reading-time");
        setReads(getStoredData("reading-time"));
        // console.log(duration);
    }
    useEffect(()=>{
        fetch("/blogs.json")
        .then(res=>res.json())
        .then(data=>setBlogs(data));
    },[]);

    useEffect(()=>{
        const storedReadTime = getStoredData("reading-time");
        setReads(storedReadTime);
        // addtoDb(reads,"reading-time");
        },[blogs]);

    

    return (
        <div className='blogs-dashboard-field'>
            <div className='blogs-container'>
            {
                blogs.map(blog=> <Blog blog={blog} key={blog.id} addReadingTime={addReadingTime}></Blog>)
            }
            </div>
            <div>
                <DashBoard duration={reads}></DashBoard>
            </div>
            
        </div>
    );
};

export default Blogs;