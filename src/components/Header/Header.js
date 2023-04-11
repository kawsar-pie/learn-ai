import React from 'react';
import "./Header.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faGraduationCap} from '@fortawesome/free-solid-svg-icons'
const Header = () => {
    return (
        <div className='header'>
            <a style={{display:"flex", alignItems:"center"}} href="/home"><h1><FontAwesomeIcon icon={faGraduationCap} /> </h1><h2>LearnAI</h2></a>
            <div className='other-pages'>
                <h4><a href="/home">Home</a></h4>
                <h4><a href="/courses">Courses</a></h4>
                <h4><a href="/explore">Explore</a></h4>
                <h4><a href="/about">About</a></h4>
            </div>
        </div>
    );
};

export default Header;