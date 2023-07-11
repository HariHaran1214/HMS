import React, { useEffect, useState, useRef } from 'react'
import Sidebar from '../../../components/panels/Sidebar'
import emailjs from '@emailjs/browser';
import { regDoc,connectWallet, getDoctorCount } from '../../../services/contract.service';
import { useNavigate } from 'react-router-dom';

function AddDoc() {
    const navigate = useNavigate()
    const [docId,setdocId] = useState();
    const [count,setCount] = useState(1);
    const [verify,setVerify] = useState(false);
    const [verified,setVerified] = useState(false);
    const [o,so] = useState();
    const [otp,setOtp]= useState(0)
    const [docForm,setdocForm] = useState({
        fullname:'',
        age:0,
        gender:'',
        address:'',
        phone:'',
        email:'',
        qualification:'',
        speciality:''
    })
    const form = useRef();
    let tday = ""
    useEffect(()=>{
        generatedocId();
        genOtp();
        connectWallet();
    },[])
    const generatedocId = async() =>{
        const c = await getDoctorCount()
        setCount(c)
        console.log(c)
        let today = new Date
        tday = today.getDate().toString()+today.getMonth().toString()+today.getFullYear().toString()
        let id = "XHDOC"+c
        setdocId(id)
        console.log(docId)
    }
    function genOtp(){
        var digits = '0123456789'
        let OTP =''
        for(let i =0;i < 4;i++){
            OTP += digits[Math.floor(Math.random() * 10)];
        }
        localStorage.setItem('otp',OTP)
        setOtp(OTP);
        console.log(otp)
    }
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_d6haxk9', 'template_nesbcgu', form.current, 'o5EVRK7GS2D6upfH4')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        setVerify(true)
    }
    const verifyOtp =()=> {
        localStorage.getItem('otp');
        if(otp == o){
            setVerified(true)
            localStorage.setItem('verify',true)
            alert('Email verified')
            setVerify(false)
        }else{
            localStorage.setItem('verify',false)
            alert('Email not verified')
        }
    }

    const handleChange = (e) => {
        setdocForm({...docForm, [e.target.name]: e.target.value });
        console.log(docForm)
    }

    const submit = async() => {
        if(verified){
            generatedocId()
            localStorage.setItem('docId',docId)
            localStorage.setItem('form',JSON.stringify(docForm))
            await regDoc(docId,docForm)
            window.location.reload();
        }else {
            alert("Verify the email to continue")
        }
        console.log(typeof(Number(docForm.phone)))
        console.log(docId)
    }
  return (
        <div className="flex">
            <Sidebar />
            <div className='h-[100vh] mt-24 w-[100vw] p-20 flex flex-col justify-center items-center'>
                <div className='bg-white w-[90vh] p-2'>
                    <label htmlFor="Fullname" className="block mb-2 text-xl underline font-medium text-gray-900 ">Doctor Details</label>
                    <div className="mb-6">
                        <label htmlFor="Fullname" className="block mb-2 text-sm font-medium text-gray-900 ">Doctor Id : </label>
                        <p id="Fullname" name='pid' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" required >{docId}</p>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="Fullname" className="block mb-2 text-sm font-medium text-gray-900 ">Full Name : </label>
                        <input type="text" name='fullname' id="Fullname" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Full name" required onChange={handleChange} />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="age" className="block mb-2 text-sm font-medium text-gray-900 ">age : </label>
                        <input type="text" name='age' id="Fullname" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="age" required onChange={handleChange} />
                    </div>
                    <div className="mb-6">
                        <div className='flex justify-start items-center'>
                            <label htmlFor="gender" className="mb-2 text-sm font-medium text-gray-900 ">Gender : </label>
                            <div className="ml-12 flex justify-start items-center">
                                <input type="radio" name='gender' id="male" className="bg-gray-50 mr-3 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" value='male' required onChange={handleChange}/>
                                <label>male</label>
                            </div>
                            <div className="ml-12 flex justify-start items-center">
                                <input type="radio" name='gender' id="male" className="bg-gray-50 mr-3 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" value='female' required onChange={handleChange}/>
                                <label>female</label>
                            </div>
                        </div>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-900 ">Address : </label>
                        <textarea type="text" name='address' id="address" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Address" required onChange={handleChange} />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="contact" className="block mb-2 text-sm font-medium text-gray-900 ">Phone no : </label>
                        <input type="text" name='phone' id="contact" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Phone no" required onChange={handleChange} />
                    </div>
                    <form ref={form} onSubmit={sendEmail}>
                        <div className="mb-6">
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Email : </label>
                            <input type="email" id="email" name='email' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="jeo@mail.com" required onChange={handleChange}/>
                            <input type='submit' className="block mb-2 underline ml-5 cursor-pointer text-md font-medium text-blue-500 " value='verify email' />
                        </div>
                        <input name="otp" className="hidden mb-2 text-sm font-medium text-gray-900 " value={otp} />
                        {verify && <div className="mb-6">
                            <label htmlFor="otp" className="block mb-2 text-sm font-medium text-gray-900 ">Enter otp : </label>
                            <input type="text" value={o} id="otp" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter otp" required onChange={(e)=>so(e.target.value)} />
                            <label className="block mb-2 underline ml-5 cursor-pointer text-md font-medium text-blue-500 " onClick={()=>verifyOtp()}>verify</label>
                        </div>}
                    </form>
                    <div className="mb-6">
                        <label htmlFor="qualification" className="block mb-2 text-sm font-medium text-gray-900 ">Qualification : </label>
                        <input type="text" name='qualification' id="qualification" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Qualification" required onChange={handleChange} />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="Speciality" className="block mb-2 text-sm font-medium text-gray-900 ">Speciality : </label>
                        <input type="text" name='speciality' id="Speciality" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Speciality" required onChange={handleChange} />
                    </div>
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={()=>submit()}>Submit</button>
                </div>
            </div>
        </div>
  )
}

export default AddDoc