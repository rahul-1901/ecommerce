import React from 'react';
import "./NotFound.css";
import notFound from "../assets/notFound.png";

const NotFound = () => {
    return (
        <>
            <div className='backGround min-h-screen'>
                <div className='centeredAll flex flex-col'>
                    <div className='textNotFound'>
                        <h1 className='text-white text-9xl'>SORRY</h1>
                        <h2 className='text-3xl mr-6'>PAGE NOT FOUND</h2>
                    </div>
                    <img src={notFound}></img>
                </div>
            </div>
        </>
    )
}

export default NotFound;