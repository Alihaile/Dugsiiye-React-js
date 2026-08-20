import { useState } from 'react';

const ApplicationForm = () => {
    const skills = ['React', 'Javascript', 'Typescript', 'NodeJs', 'Python', 'Java', 'UI Design', 'API Development',];
    const [errors, setErrors] = useState({});

    const [contact, setContact] = useState({
        name: "",
        email: "",
        experience: "",
        role: "",
        skills: ['React'],
        agree: false,
        notification: false

    });

    const validateForm = () => {
        let errors = {};

        console.log("contact.name == ''", contact.name.trim() == '');
        // validate name
        if (contact.name.trim() == '') {
            errors.name = 'Full Name is required.';
            // } if (/^[^\sz-zA-Z]+$/.test(contact.name.trim()) == false) {
            //     errors.name = 'Please enter valid name(2-30 characters, letters only).';
        } else {
            errors.name = '';
        }

        // validate email
        if (contact.email.trim() == '') {
            errors.email = 'Email is required.';
        } else if (/^[^\s@]+@[^\s@]+\.[^\s@]$/.test(contact.email)) {
            errors.email = 'Invalid Email Address';
        } else {
            errors.email = '';
        }

        // validate experience:
        if (contact.experience.trim() == '' || contact.experience.trim() == 0) {
            errors.experience = 'Experience is required';
        } else if (contact.experience.trim() < 0 && contact.experience.trim() > 50) {
            errors.experience = 'Please enter valid years of experience(0-50)';
        } else {
            errors.experience = '';
        }

        // validate role
        if (contact.role.length === 0) {
            errors.role = 'Please select a role';
        } else {
            errors.role = '';
        }

        // validate skills
        if (contact.skills.length === 0) {
            errors.skills = 'Please select at least one skill';
        } else {
            errors.skills = '';
        }

        // validate terms
        if (contact.agree === false) {
            errors.agree = 'Please agree to terms of use';
        } else {
            errors.agree = '';
        }

        return errors
    }

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (type == 'checkbox') {
            if (checked) {
                setContact((prev) => ({ ...prev, skills: [...prev.skills, name], [name]: true }));
            } else {
                setContact((prev) => ({ ...prev, skills: prev.skills.filter((s) => s != name), [name]: false }));

            }

        } else {
            setContact((prev) => ({ ...prev, [name]: value }));
        }


        let validations = validateForm();

        if (Object.keys(validations).length > 0) {
            setErrors(validations);
        }
        console.log(errors);

    }

    const handleSubmit = (e) => {
        e.preventDefault();

        let validations = validateForm();

        if (Object.keys(validations).length > 0) {
            setErrors(validations);
            return;
        }

        console.log('Submitted Form successfully: ', contact);
    }


    return (
        <div className="flex items-start">
            <div className="flex-1 bg-white px-6 py-4 rounded-lg shadow-sm ">

                <h2 className="text-gray-700 font-bold mb-3 text-center text-xl">Developer Application Form</h2>

                <form onSubmit={(e) => handleSubmit(e)} className="text-[14px]">
                    <div className="">
                        <label className="text-slate-700 mb-2 block">
                            Full Name
                            <input className="border border-1 border-slate-300 h-9 rounded-md px-3 py-1 w-full"
                                type="text" name="name" value={contact.name} onChange={(e) => handleChange(e)} placeholder="Name" />
                            {errors.name && (<span className="text-rose-500">{errors.name}</span>)}
                        </label>
                        <label className="text-slate-700 mb-2 block">
                            Email
                            <input className="border border-1 border-slate-300 h-9 rounded-md px-3 py-1 w-full" type="text"
                                name="email" value={contact.email} onChange={(e) => handleChange(e)} placeholder="Email" />
                            {errors.email && (<span className="text-rose-500">{errors.email}</span>)}
                        </label>
                        <label className="text-slate-700 mb-2 block">
                            select role
                            <select className="border border-1 border-slate-300 h-9 rounded-md px-3 py-1 w-full" name="role" value={contact.role} onChange={(e) => handleChange(e)}>
                                <option value="">Select Role</option>
                                <option value="Developer">Developer</option>
                                <option value="Desinger">Desinger</option>
                                <option value="Debugger">Debugger</option>
                                <option value="Networker">Networker</option>
                            </select>
                            {errors.role && (<span className="text-rose-500">{errors.role}</span>)}
                        </label>
                        <label className="text-slate-700 mb-2 block">
                            Years of Experience
                            <input className="border border-1 border-slate-300 h-9 rounded-md px-3 py-1 w-full "
                                type="number" name="experience" value={contact.experience} onChange={(e) => handleChange(e)} placeholder="Experience" />
                            {errors.experience && (<span className="text-rose-500">{errors.experience}</span>)}
                        </label>
                        <label labelFor="skills" className="mb-2 block">Skills</label>
                        <div className="grid grid-cols-2 gap-1 mb-2 block">
                            {
                                skills.map((skill) => (
                                    <label key={skill} className="flex items-center gap-2 mb-2 text-slate-700">
                                        <input className="border border-1 border-slate-300 h-4 w-5 rounded-md" type="checkbox"
                                            name={skill} checked={contact.skills.includes(skill)} onChange={(e) => handleChange(e)} />
                                        {skill}
                                    </label>
                                ))
                            }
                            {errors.skills && (<span className="text-rose-500">{errors.skills}</span>)}
                        </div>
                        <label className="flex items-center gap-2 mb-2 text-slate-700">
                            <input className="border border-1 border-slate-300 h-4 w-5 rounded-md" type="checkbox" name="agree" checked={contact.agree} onChange={(e) => handleChange(e)} />
                            Agree Terms of Conditions
                        </label>
                        {errors.agree && (<span className="text-rose-500 mb-2 block">{errors.agree}</span>)}

                        <label className="flex items-center gap-2 mb-2 text-slate-700 block">
                            <input className="border border-1 border-slate-300 h-4 w-5 rounded-md" type="checkbox" name="notification" checked={contact.notification} onChange={(e) => handleChange(e)} />
                            Receive Notifications about oportunities.
                        </label>

                    </div>
                    <div className="flex justify-center items-center mt-4">

                        <button type="submit" className="px-3 py-2 bg-rose-600 text-white rounded-lg cursor-pointer w-full">Submit Application</button>
                    </div>
                </form >
            </div>

        </div >

    )
}

export default ApplicationForm