import React, { useState } from 'react'
import Sidebar from '../../../components/panels/Sidebar'
import { createAdmin } from '../../../services/auth.service';

function AddAdmin(){
    const [form,setForm] = useState({
        email:'',
        password:'',
        confirmPassword:''
    })

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value });
        console.log(form)
    }

    const submit = async() => {
        if(form.password === form.confirmPassword) {
            createAdmin(form.email,form.password)
        }else{
            alert("Password doesnt match")
        }
    }
  return (
    <div className='flex'>
        <Sidebar />
        <div className='h-[100vh] w-[100vw] p-20 flex flex-col justify-center items-center'>
            <div className='bg-white w-[90vh] p-2'>
                <label htmlFor="Fullname" className="block mb-2 text-xl underline font-medium text-gray-900 dark:text-white">Add Credentials</label>
                <div className="mb-6">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email : </label>
                    <input type="text" name='email' id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Full name" required onChange={handleChange} />
                </div>
                <div className="mb-6">
                    <label htmlFor="Password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password : </label>
                    <input type="password" name='password' id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="********" required onChange={handleChange}/>
                </div>
                <div className="mb-6">
                    <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm Password : </label>
                    <input type="password" name='confirmPassword' id="confirmPassword" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="********" required onChange={handleChange} />
                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={()=>submit()}>Submit</button>
            </div>
        </div>
    </div>
  )
}

export default AddAdmin