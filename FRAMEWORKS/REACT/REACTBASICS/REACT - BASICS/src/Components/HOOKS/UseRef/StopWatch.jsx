import React, { useState, useEffect, useRef } from 'react'

function StopWatch() {

    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const intervalIdRef = useRef(null)
    const startTimeRef = useRef(0);

    useEffect(() => {
        if (isRunning) {
            intervalIdRef.current = setInterval(() => {
                setElapsedTime(Date.now() - startTimeRef.current)
            }, 10);
        }

        return () => {
            clearInterval(intervalIdRef.current)
        }
    }, [isRunning]);

    function start() {
        setIsRunning(true);
        startTimeRef.current = Date.now() - elapsedTime;
        // console.log(startTimeRef)
    }
    function stop() {
        setIsRunning(false);
    }
    function reset() {
        setElapsedTime(0)
        setIsRunning(false);
    }
    function formatTime() {
        let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
        let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
        let seconds = Math.floor(elapsedTime / (1000) % 60);
        let milliseconds = Math.floor((elapsedTime % 1000) / 10);

        hours = String(hours).padStart(2, "0")
        minutes = String(minutes).padStart(2, "0")
        seconds = String(seconds).padStart(2, "0")
        milliseconds = String(milliseconds).padStart(2, "0")

        return `${minutes}:${seconds}:${milliseconds}`
    }
    return (
        <div className='stopwatch'>
            <h1 className="head">STOP WATCH</h1>
            <div className='container  bg-amber-600 p-5 rounded-2xl w-1/2 mx-auto shadow-lg '>
                <div className='text-4xl font-bold text-center text-white'>
                    {formatTime()}
                </div>
            </div>
            <div className="cotrols">
                <button className="button" onClick={start}>Start</button>
                <button className="button" onClick={reset}>Reset</button>
                <button className="button" onClick={stop}>Stop</button>
            </div>
        </div>
    )
}

export default StopWatch