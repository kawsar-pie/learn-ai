import React, { useEffect, useState } from 'react';
import "./Blog.css"
const Blog = (props) => {
    const {image, title, article_details, reading_duration} = props.blog;
    return (
        <div className='blog'>
            <div className='blog-content'>
                <img src={image} alt="" />
                <h2>{title}</h2>
                <p>{article_details.slice(0,200)+"..."}</p>
            </div>
            <div className='time-button'>
                <p>Time Required: {reading_duration} mins</p>
                <button className='btn' id="add-tolist-field" onClick={()=>props.addReadingTime(reading_duration)} style={{background:"cadetblue",color:"azure"}}>
                    <h6>Add to list</h6>
                </button>
            </div>
        </div>
    );
};

export default Blog;