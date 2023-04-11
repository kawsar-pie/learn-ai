import React, { useEffect, useState } from 'react';
import Me from "../../images/Me.jpg";
import "./DashBoard.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faLocationDot} from '@fortawesome/free-solid-svg-icons'
import { addtoDb, getStoredData } from './localDb';
import Toaster from '../Toaster/Toaster';
const DashBoard = (props) => {
    const [breaks, setBreaks] = useState(0);
    const [prevClickedId, setPrevClickedId] = useState("10");
    useEffect(()=>{
        const storedBreakTime = getStoredData("break-time");
        setBreaks(storedBreakTime);
        setPrevClickedId((storedBreakTime).toString());
        document.getElementById("break-field").addEventListener("click", function(event) {
            var clickedElement = event.target;
            var clickedElementId = clickedElement.getAttribute("id");
            if(clickedElementId==="break-field") return;
            const prevClickedIdField = document.getElementById(prevClickedId);
            prevClickedIdField.style.backgroundColor = "azure";
            prevClickedIdField.style.color = "black";
            const markClicked = document.getElementById(clickedElementId);
            markClicked.style.backgroundColor = "cadetblue" ;
            markClicked.style.color = "azure" ;
            setPrevClickedId(clickedElementId);
        });
        },[prevClickedId,breaks]);

    const addBreak = (duration)=>{
        setBreaks(duration);
        addtoDb(duration,"break-time");
    }
    return (
        <div className='dashboard'>
            <div className='personal-info'>
                <img src={Me} alt="" />
                <div>
                    <h4>Kawsar Ahmed</h4>
                    <FontAwesomeIcon style={{"color":"cadetblue"}}icon={faLocationDot} /><small> Chittagong, Bangladesh</small>
                </div>
            </div>
            <div className='physical-info' >
                <div>
                    <div style={{display:"flex",alignItems:"center"}}>
                        <h4>64</h4>
                        <small>kg</small>
                    </div>
                    <h6>Weight</h6>
                </div>
                <div>
                    <div style={{display:"flex",alignItems:"center"}}>
                            <h4>6.5</h4>

                    </div>
                    <h6>Height</h6>
                </div>
                <div>
                    <div style={{display:"flex",alignItems:"center"}}>
                            <h4>25</h4>
                            <small>yrs</small>
                    </div>
                    <h6>Age</h6>
                </div>
            </div>
            <h5 style={{marginTop:"30px",marginBottom:"20px"}}>Add a Break</h5>
            <div className='add-break' id="break-field">
                <button id="10" onClick={()=>addBreak(10)}>10s</button>
                <button id="20" onClick={()=>addBreak(20)}>20s</button>
                <button id="30" onClick={()=>addBreak(30)}>30s</button>
                <button id="40" onClick={()=>addBreak(40)}>40s</button>
            </div>
            <div className='reading-details-field'>
                <h5>Reading Details</h5>
                <div className='reading-details-info'>
                    <div style={{display:"flex",justifyContent:"space-between"}}>
                        <h6>Reading Time </h6>
                        <h6 style={{color:"gray"}}>{props.duration} mins</h6>
                    </div>
                </div>
                <div className='reading-details-info'>
                    <div style={{display:"flex",justifyContent:"space-between"}}>
                        <h6>Break Time </h6>
                        <h6 style={{color:"gray"}}>{breaks} seconds</h6>
                    </div>
                </div>
            </div>
            <Toaster></Toaster>
        </div>
    );
};

export default DashBoard;