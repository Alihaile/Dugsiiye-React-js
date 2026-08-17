import { useState } from 'react';

const ControlledForm = () => {

    const handleChange = (e) => {
        const { name, value, type } = e.target;

        setContact((prev) => ({ ...prev, [name]: type == 'checkbox' && value ? true : value }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('Submitted Form successfully: ', contact);
    }


    const [contact, setContact] = useState({
        name: "",
        email: "",
        password: "",
        hoppy: "",
        agree: false
    });

    return (
        <div className="flex items-start">
            <div className="flex-1 bg-white p-4 rounded-lg shadow-sm ">

                <h2 className="text-gray-700 font-bold mb-3 text-center text-xl">Contact Person - Controlled Form</h2>

                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className="grid grid-cols-2 gap-4">
                        <label className="text-slate-700">
                            Name
                            <input className="border border-1 border-slate-300 h-10 rounded-md px-3 py-2 w-full"
                                type="text" name="name" value={contact.name} onChange={(e) => handleChange(e)} placeholder="Name" />
                        </label>
                        <label className="text-slate-700">
                            Email
                            <input className="border border-1 border-slate-300 h-10 rounded-md px-3 py-2 w-full" type="text"
                                name="email" value={contact.email} onChange={(e) => handleChange(e)} placeholder="Name" />
                        </label>
                        <label className="text-slate-700">
                            Password
                            <input className="border border-1 border-slate-300 h-10 rounded-md px-3 py-2 w-full"
                                type="password" name="password" value={contact.password} onChange={(e) => handleChange(e)} placeholder="Name" />
                        </label>
                        <label className="text-slate-700">
                            select hoppy
                            <select className="border border-1 border-slate-300 h-10 rounded-md px-3 py-2 w-full" name="hoppy" value={contact.hoppy} onChange={(e) => handleChange(e)}>
                                <option value="">Select Hoppy</option>
                                <option value="Reading">Reading</option>
                                <option value="Writing">Writing</option>
                                <option value="Swimming">Swimming</option>
                                <option value="Hiking">Hiking</option>
                            </select>
                        </label>
                        <label className="flex items-center gap-2 mb-2text-slate-700">
                            <input className="border border-1 border-slate-300 h-5 w-5 rounded-md" type="checkbox" name="agree" checked={contact.agree} onChange={(e) => handleChange(e)} />
                            Agree Terms
                        </label>

                    </div>
                    <div className="flex justify-center items-center">

                        <button type="submit" className="px-3 py-2 text-gray-700 bg-blue-600 text-white rounded-lg cursor-pointer">Submit Data</button>
                    </div>
                </form >
            </div>

        </div >

    )
}

export default ControlledForm