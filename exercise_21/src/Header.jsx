import React from 'react'

function Header() {
    return (
        <div className="p-4 rounded-lg bg-white shadow-sm">
            <div className="flex justify-between items-center ">

                <div>
                    <h1 className="text-2xl text-gray-700 font-bold m-0 ">Welcome Back, Student!.</h1>
                    <span className="text-sm text-slate-500">Here what's happening with your courses today.</span>
                </div>

                <div className="">
                    <div className="relative flex items-center gap-2">
                        <div className="absolute rounded-full w-2 h-2 left-4 -top-1 bg-rose-500"></div>
                        <span>🔔</span>
                        <div className="">
                            <div className="flex items-center justify-center rounded-full w-8 h-8 bg-gradient-to-r from-violet-400 to-rose-600 bg-rose-400 text-white">S</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header