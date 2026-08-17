import React from 'react'

const TopCards = () => {
    return (
        <div className="grid gap-5 grid-cols-4 my-4">
            <div className="flex items-center bg-white rounded-lg p-4 gap-2 shadow-sm">
                <span className="text-xl ">📊</span>
                <div className="flex flex-col text-sm/3">
                    <p className="text-slate-500">Avarage Grade</p>
                    <strong className="text-gray-900 text-xl">88%</strong>
                </div>
            </div>
            <div className="flex items-center bg-white rounded-lg p-4 gap-2 shadow-sm">
                <span className="text-xl ">📚</span>
                <div className="flex flex-col text-sm/3">
                    <p className="text-slate-500">Courses</p>
                    <strong className="text-gray-900 text-xl">3</strong>
                </div>
            </div>
            <div className="flex items-center bg-white rounded-lg p-4 gap-2 shadow-sm">
                <span className="text-xl ">⏱️</span>
                <div className="flex flex-col text-sm/3">
                    <p className="text-slate-500">Study Hours</p>
                    <strong className="text-gray-900 text-xl">45h</strong>
                </div>
            </div>
            <div className="flex items-center bg-white rounded-lg p-4 gap-2 shadow-sm">
                <span className="text-xl ">✍️</span>
                <div className="flex flex-col text-sm/3">
                    <p className="text-slate-500">Assignments</p>
                    <strong className="text-gray-900 text-xl">12</strong>
                </div>
            </div>
        </div>
    )
}

export default TopCards