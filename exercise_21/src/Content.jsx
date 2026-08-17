import React from 'react'

const Content = () => {
    return (
        <div className="flex items-start">
            <div className="flex-1 bg-white p-4 rounded-lg shadow-sm ">

                <h4 className="text-gray-700 font-bold mb-2">Course Progress</h4>
                <div className="flex flex-col bg-slate-50 py-2 px-2 rounded-lg mb-2">
                    <div className="flex justify-between w-full mb-1 text-sm">
                        <p className="text-gray-700 font-semibold">React Fundamentals</p>
                        <span className="text-slate-500">75%</span>
                    </div>
                    {/* progress */}
                    <div className="rounded-[30px] border border-1 bg-slate-200 border-slate-200 w-full h-2 mb-1">
                        <div className="rounded-[30px] bg-gradient-to-r from-violet-400 to-violet-600 h-[0.4rem] w-[75%] text-white text-[.45rem]"></div>
                    </div>
                    <div className="flex justify-between w-full mb-1 text-sm">
                        <p className="text-gray-500">Next: Components & Props</p>
                        <span className="text-gray-500">Mc Hamuda</span>
                    </div>
                </div>

                <div className="flex flex-col bg-slate-50 py-2 px-2 rounded-lg mb-2">
                    <div className="flex justify-between w-full mb-1 text-sm">
                        <p className="text-gray-700 font-semibold">Javascript Advanced</p>
                        <span className="text-slate-500">48%</span>
                    </div>
                    {/* progress */}
                    <div className="rounded-[30px] border border-1 bg-slate-200 border-slate-200 w-full h-2 mb-1">
                        <div className="rounded-[30px] bg-gradient-to-r from-blue-400 to-blue-600 h-[0.4rem] w-[48%] text-white text-[.45rem]"></div>
                    </div>
                    <div className="flex justify-between w-full mb-1 text-sm">
                        <p className="text-gray-500">Next: Async/Await</p>
                        <span className="text-gray-500">Mc Hamuda</span>
                    </div>
                </div>

                <div className="flex flex-col bg-slate-50 py-2 px-2 rounded-lg mb-2">
                    <div className="flex justify-between w-full mb-1 text-sm">
                        <p className="text-gray-700 font-semibold">UI/UX Design</p>
                        <span className="text-slate-500">90%</span>
                    </div>
                    {/* progress */}
                    <div className="rounded-[30px] border border-1 bg-slate-200 border-slate-200 w-full h-2 mb-1">
                        <div className="rounded-[30px] bg-gradient-to-r from-fuchsia-400 to-fuchsia-600 h-[0.4rem] w-[90%] text-white text-[.45rem]"></div>
                    </div>
                    <div className="flex justify-between w-full mb-1 text-sm">
                        <p className="text-gray-500">Next: Color Theory</p>
                        <span className="text-gray-500">Mc Hamuda</span>
                    </div>
                </div>
            </div>
            <div className=" w-82 ml-5 ">
                <div className="bg-white w-full p-4 min-h-32 mb-4 shadow-sm rounded-lg">
                    <h4 className="text-sm font-bold mb-2">Upcomming Assignments</h4>
                    <div className="flex flex-col mb-7">
                        <div className="flex justify-between mb-2 ">
                            <h4 className="text-sm font-semibold">Build a Todo App</h4>
                            <span className="px-2 py-0 bg-rose-100 rounded-full text-xs text-rose-700 font-semibold">pending</span>
                        </div>
                        <div className="flex justify-between text-xs leading-1">
                            <h5 className="text-gray-500 ">React Fandamentals</h5>
                            <span className="text-gray-500">Due 2026-08-20</span>
                        </div>
                    </div>
                    <div className="flex flex-col mb-7">
                        <div className="flex justify-between mb-2 ">
                            <h4 className="text-sm font-semibold">Api Integration</h4>
                            <span className="px-2 py-0 bg-green-100 rounded-full text-xs text-green-700 font-semibold">complete</span>
                        </div>
                        <div className="flex justify-between text-xs leading-1">
                            <h5 className="text-gray-500 ">Javascript Advanced</h5>
                            <span className="text-gray-500">Due 2026-08-16</span>
                        </div>
                    </div>

                    <div className="flex flex-col mb-7">
                        <div className="flex justify-between mb-2 ">
                            <h4 className="text-sm font-semibold">Design System</h4>
                            <span className="px-2 py-0 bg-yellow-100 rounded-full text-xs text-yellow-700 font-semibold">in-progress</span>
                        </div>
                        <div className="flex justify-between text-xs leading-1">
                            <h5 className="text-gray-500 ">UI/UX Design</h5>
                            <span className="text-gray-500">Due 2026-08-22</span>
                        </div>
                    </div>

                </div>
                <div className="bg-white w-full p-4 min-h-32 mb-5 shadow-sm rounded-lg">
                    <div className="flex py-3 gap-3 mb-2">
                        <div className="w-[3px] bg-blue-500 rounded-lg"></div>
                        <div className="leading-7">
                            <h4 className="text-sm font-semibold">New Course Available</h4>
                            <p className="text-gray-500">Checkout our new typescript course!</p>
                            <span className="text-slate-400 text-xs">2 hours ago</span>
                        </div>
                    </div>
                    <div className="flex py-3 gap-3 mb-3">
                        <div className="w-[3px] bg-blue-500 rounded-lg"></div>
                        <div className="leading-7">
                            <h4 className="text-sm font-semibold">Maintainance Notice</h4>
                            <p className="text-gray-500">Platform upates scheduled for tonight</p>
                            <span className="text-slate-400 text-xs">5 hours ago</span>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Content