import React from 'react'

export const Loader = () => {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="flex items-center gap-2">
                {/* First dot */}
                <div className="w-4 h-4 bg-black rounded-full animate-[bounce_1s_infinite_0ms]" />

                {/* Second dot */}
                <div className="w-4 h-4 bg-black rounded-full animate-[bounce_1s_infinite_200ms]" />

                {/* Third dot */}
                <div className="w-4 h-4 bg-black rounded-full animate-[bounce_1s_infinite_400ms]" />
            </div>
        </div>
    )
}

export default Loader;