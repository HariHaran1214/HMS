import React, { useEffect, useState, useRef } from 'react'
import Sidebar from '../../../components/panels/Sidebar'
import emailjs from '@emailjs/browser';
import { check,regIp,connectWallet, getOutPatientCount, regOp, viewDoc } from '../../../services/contract.service';
import { useNavigate } from 'react-router-dom';

function AddOp() {
    const navigate = useNavigate()
    const [pid,setPid] = useState();
    const [count,setCount] = useState(1);
    const [verify,setVerify] = useState(false);
    const [verified,setVerified] = useState(false);
    const [o,so] = useState();
    const [otp,setOtp]= useState(0)
    const [doc,setDoc] = useState([])
    const [opForm,setOpForm] = useState({
        fullname:'',
        age:0,
        gender:'',
        address:'',
        phone:'',
        email:'',
        doctorid:'',
        doctornote:'',
        prescribtion:''
    })
    const form = useRef();
    let tday = ""
    useEffect(()=>{
        generatePid();
        genOtp();
        connectWallet();
    },[])
    const generatePid = async() =>{
        const c = await getOutPatientCount()
        setCount(c)
        console.log(c)
        let today = new Date
        tday = today.getDate().toString()+today.getMonth().toString()+today.getFullYear().toString()
        let id = today.getDate().toString()+today.getMonth().toString()+today.getFullYear().toString()+"OP"+c;
        setPid(id)
        console.log(pid)
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
        setOpForm({...opForm, [e.target.name]: e.target.value });
        console.log(opForm)
    }

    const getDoc = async()=>{
        const c  = await viewDoc(opForm.doctorid);
        setDoc(c)
        console.log(c)
    }

    const submit = async() => {
        if(verified){
            generatePid()
            localStorage.setItem('pid',pid)
            localStorage.setItem('form',JSON.stringify(opForm))
            await regOp(pid,opForm)
            navigate('/opdf')
        }else {
            alert("Verify the email to continue")
        }
        console.log(pid)
    }
  return (
        <div className="flex">
            <Sidebar />
            <div className='h-[100vh] mt-[18rem] w-[100vw] p-20 flex flex-col justify-center items-center'>
                <div className='bg-white w-[90vh] p-2'>
                    <label htmlFor="Fullname" className="block mb-2 text-xl underline font-medium text-gray-900 ">Patient Details</label>
                    <div className="mb-6">
                        <label htmlFor="Fullname" className="block mb-2 text-sm font-medium text-gray-900 ">Pid : </label>
                        <input id="Fullname" name='pid' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" required value={pid}/>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="Fullname" className="block mb-2 text-sm font-medium text-gray-900 ">Full Name : </label>
                        <input type="text" name='fullname' id="Fullname" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Full name" required onChange={handleChange} />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="age" className="block mb-2 text-sm font-medium text-gray-900">age : </label>
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
                    <label htmlFor="Fullname" className="block mb-2 text-xl underline font-medium text-gray-900 ">Seen by</label>
                    <div className="mb-6">
                        <label htmlFor="doctorid" className="block mb-2 text-sm font-medium text-gray-900 ">Doctor Id : </label>
                        <input type="text" name='doctorid' id="doctorid" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doctor Id" required onChange={handleChange} />
                        <label className="block mb-2 underline ml-5 cursor-pointer text-md font-medium text-blue-500 " onClick={()=>getDoc()}>View Doctor</label>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="doctorname" className="block mb-2 text-sm font-medium text-gray-900 ">Doctor name : </label>
                        <input type="text" id="doctorname" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doctor name" required value={doc[1]} />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="speciality" className="block mb-2 text-sm font-medium text-gray-900 ">Doctor speciality : </label>
                        <input type="text" id="speciality" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doctor Speciality" required value={doc[8]} />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="docnpte" className="block mb-2 text-sm font-medium text-gray-900 ">Doctor note : </label>
                        <textarea type="text" name='doctornote' id="doctornote" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doctor note" required onChange={handleChange} />
                    </div>
                    <label htmlFor="" className="block mb-2 text-xl underline font-medium text-gray-900 ">Prescribsion </label>
                    <div className="mb-6">
                        <label htmlFor="Prescribsion" className="block mb-2 text-sm font-medium text-gray-900 ">Prescribsion : </label>
                        <textarea type="text" name='prescribtion' id="Prescribsion" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Prescribsion" required onChange={handleChange} />
                    </div>
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={()=>submit()}>Submit</button>
                </div>
            </div>
        </div>
  )
}

export default AddOp