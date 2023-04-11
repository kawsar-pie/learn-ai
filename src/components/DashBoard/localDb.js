const addtoDb = (duration,type) =>{
    const previous_time = getStoredData("reading-time");
    if(type==="break-time"){
        localStorage.setItem("break-time",JSON.stringify(duration));
    }
    else{
        localStorage.setItem("reading-time",JSON.stringify(previous_time+duration));
    }
}

const getStoredData =(type)=>{
    if(type==="reading-time"){
        const prev_reading_time = localStorage.getItem("reading-time");
        if(prev_reading_time){
            return JSON.parse(prev_reading_time);
        }
        else{
            return 0
        }
    }
    else{
        const prev_break_time = localStorage.getItem("break-time");
        if(prev_break_time){
            return JSON.parse(prev_break_time);
        }
        else{
            return 0;
        }
    }
}

export {addtoDb, getStoredData}