import React from 'react';
import "./Header.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faGraduationCap} from '@fortawesome/free-solid-svg-icons'
const Header = () => {
    return (
        <div className='header'>
            <h2><FontAwesomeIcon icon={faGraduationCap} /> LearnML</h2>
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