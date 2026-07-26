import React, { useState, useEffect } from 'react'

function Clock() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000); // Update every second

        return () => {
            clearInterval(intervalId); // Clear the interval on component unmount
        }
    }, []);

    function FormatTime() {
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const meridiem = hours >= 12 ? 'PM' : 'AM';

        hours = hours % 12 || 12; // Convert to 12-hour format
        return `${padStart(hours)} : ${padStart(minutes)} : ${padStart(seconds)} ${meridiem}`;
    };

    function padStart(num) {
        return (num < 10 ? "0" : "") + num; // Add leading zero if needed    
    }

    return (
        <>
            <h1 className="head">Digital Clock Using useEffect Hooks</h1>
            <div className='container  bg-amber-600 p-5 rounded-2xl w-1/2 mx-auto shadow-lg'>
                <div className='text-4xl font-bold text-center text-white'>
                    <span>{FormatTime()}</span>
                </div>
            </div>
        </>
    )
}

export default Clock