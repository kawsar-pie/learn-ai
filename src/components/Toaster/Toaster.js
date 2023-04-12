import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Toaster = () => {
    
    const notify = () => toast("Congratulations! You leaned a lot about AI!");
    return (
        <div>
            <button onClick={notify} className='btn' style={{background:"cadetblue",color:"azure",width:"100%"}}>
                    <h6>Activity Completed</h6>
                </button>
                <ToastContainer />
        </div>
    );
};

export default Toaster;