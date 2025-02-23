import React, { useState, useEffect } from 'react';
import "./CommingSoon.css";
import rocket from "../assets/rocket.png";
import { getClothes } from '../backendApi/api';
import Loader from "../components/Loader";

const ComingSoon = () => {
    const [countTime, setCountTime] = useState([
        { days: 0, label: "Days" },
        { minutes: 0, label: "Minutes" },
        { seconds: 0, label: "Seconds" },
        { hours: 0, label: "Hours" }
    ])
    const [showLoader, setShowLoader] = useState(true);

    const itemsFetched = async () => {
        try {
            setTimeout(() => {
                setShowLoader(false);
            }, 1500);
        } catch (error) {
            console.error("Can't show on home...");
        }
    }

    useEffect(() => {
        const countDownDate = new Date("Dec 1, 2025 00:00:00").getTime();

        const updateCount = () => {
            const now = new Date().getTime();
            const distance = countDownDate - now;

            if (distance < 0) {
                clearInterval(interval);
                return;
            }

            setCountTime({
                days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((distance % (1000 * 60)) / 1000),
            })
        }

        updateCount();
        const interval = setInterval(updateCount, 1000);
        itemsFetched();
    }, [])
    return (
        <>
            {showLoader ? (
                <Loader/>
            ) : (
                <div className='commingSoon bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 min-h-screen flex flex-col gap-2'>
                    <h1 className='md:text-7xl text-5xl'>Comming Soon</h1>
                    <p className='md:text-xl text-sm'>We're crafting something special just for you.</p>
                    <div className="mt-4 grid grid-cols-4 gap-4 max-w-2xl mx-auto">
                        <div className="bg-white/5 backdrop-blur-lg p-4 rounded-lg">
                            <div className="text-4xl font-bold text-white mb-1">{countTime.days}</div>
                            <div className="text-gray-400 text-sm">Days</div>
                        </div>
                        <div className="bg-white/5 backdrop-blur-lg p-4 rounded-lg">
                            <div className="text-4xl font-bold text-white mb-1">{countTime.hours}</div>
                            <div className="text-gray-400 text-sm">Hours</div>
                        </div>
                        <div className="bg-white/5 backdrop-blur-lg p-4 rounded-lg">
                            <div className="text-4xl font-bold text-white mb-1">{countTime.minutes}</div>
                            <div className="text-gray-400 text-sm">Minutes</div>
                        </div>
                        <div className="bg-white/5 backdrop-blur-lg p-4 rounded-lg">
                            <div className="text-4xl font-bold text-white mb-1">{countTime.seconds}</div>
                            <div className="text-gray-400 text-sm">Seconds</div>
                        </div>
                    </div>
                    <img src={rocket}></img>
                </div >
            )}
        </>
    )
};

export default ComingSoon;