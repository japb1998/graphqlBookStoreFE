import React, { useState } from 'react'
import { useNavigate, userNavigate } from 'react-router-dom';
import './index.css'
export default function Login() {
    const [form, setForm] = useState({ email: "", password: "" });
    let navigate = useNavigate()
    function onChange(e) {
        const value = e.target.value;
        const name = e.target.name;
        setForm({ ...form, [name]: value })
    }
    function onSubmit(e) {
        e.preventDefault();
        console.log(form)
    }
    
    return (
        <div className='w-screen  h-screen flex justify-center items-center animate'>
            <form className="px-6 py-12 border rounded border-gray-300  w-6/12 max-w-xl drop-shadow-xl bg-gray-100" onSubmit={onSubmit}>
                <div className="mb-6">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email address</label>
                    <input type="email" id="email" value={form.email} onChange={onChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="email" placeholder="email address" required />
                </div>
                <div className="mb-6">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Password</label>
                    <input type="password" id="password" value={form.password} onChange={onChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="password" placeholder="•••••••••" required />
                </div>
                <div className='flex items-center'>
                <button type="submit" className='border rounded bg-gray-700 text-white p-1  pr-2 w-24' onSubmit={onSubmit} >Login</button>
                <a onClick={(e)=>{ e.preventDefault(); navigate('/register')}} className='text-blue-400 text-sm ml-6'>or Register</a>
                </div>
            </form>
            
        </div>
    )
}
