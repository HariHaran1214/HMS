import React, { useState } from 'react'
import Sidebar from '../../../components/panels/Sidebar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { getIp } from '../../../services/contract.service'
import { useNavigate } from 'react-router-dom'

function ViewIp() {
    const navigate = useNavigate()
    const [pid,setPid] = useState(0);
    const [data, setData] = useState([]);
  return (
    <div className="flex">
        <Sidebar />
        <div className="container h-[90vh] flex flex-col justify-center items-center mx-auto mt-12">           
            <div className="mb-10">
                <label htmlFor="Fullname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Pid : </label>
                <input onChange={(e)=>setPid(e.target.value)} id="Fullname" name='pid' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                <button className='flex justify-center items-center px-7 py-3 text-white hover:bg-blue-600 rounded mt-2 bg-blue-500' onClick={()=>{
                    getIp(pid).then((d)=>{
                        setData(d)
                        console.log(data)
                    })
                }}><FontAwesomeIcon icon={faSearch} className='mr-2' />Search</button>
                <button className='underline text-md font-bold text-blue-800 cursor-pointer' onClick={()=>{
                    localStorage.setItem('pid',pid)
                    const form = {
                        fullname:data[1],
                        age:data[2],
                        gender:data[3],
                        address:data[4],
                        phone:data[5],
                        email:data[6],
                        doctorid:data[7],
                        doctornote:data[8],
                        wardtype:data[9],
                        wardno:data[10],
                        noofaddmitteddays:data[11],
                        admittedDate:data[12],
                        dischargeDate:data[13],
                        labname:data[14],
                        testres:data[15],
                        prescribtion:data[16]
                    }
                    console.log(form)
                    localStorage.setItem('form',JSON.stringify(form))
                    navigate('/ipdf')
                }}>Print Result</button>
            </div>
            {data && <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-[45rem] text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                info
                            </th>
                            <th scope="col" className="px-6 py-3">
                                
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Pid
                            </th>
                            <td className="px-6 py-4">
                                {data[0]}
                            </td>
                        </tr>
                        <tr className="bg-gray-50 border-b dark:bg-gray-900 dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Full name
                            </th>
                            <td className="px-6 py-4">
                                {data[1]}
                            </td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Age
                            </th>
                            <td className="px-6 py-4">
                                {data[2]}
                            </td>
                        </tr>
                        <tr className="bg-gray-50 border-b dark:bg-gray-900 dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Gender
                            </th>
                            <td className="px-6 py-4">
                                {data[3]}
                            </td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Address
                            </th>
                            <td className="px-6 py-4">
                                {data[4]}
                            </td>
                        </tr>
                        <tr className="bg-gray-50 border-b dark:bg-gray-900 dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Phone no
                            </th>
                            <td className="px-6 py-4">
                                {data[5]}
                            </td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Email
                            </th>
                            <td className="px-6 py-4">
                                {data[6]}
                            </td>
                        </tr>
                        <tr className="bg-gray-50 border-b dark:bg-gray-900 dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Doctor Id
                            </th>
                            <td className="px-6 py-4">
                                {data[7]}
                            </td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Doctor note
                            </th>
                            <td className="px-6 py-4">
                                {data[8]}
                            </td>
                        </tr>
                        <tr className="bg-gray-50 border-b dark:bg-gray-900 dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                No of days Admitted
                            </th>
                            <td className="px-6 py-4">
                                {data[11]}
                            </td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Admitted Date
                            </th>
                            <td className="px-6 py-4">
                                {data[12]}
                            </td>
                        </tr>
                        <tr className="bg-gray-50 border-b dark:bg-gray-900 dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Discharged Date
                            </th>
                            <td className="px-6 py-4">
                                {data[13]}
                            </td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Lab name
                            </th>
                            <td className="px-6 py-4">
                               {data[14]}
                            </td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Test and results
                            </th>
                            <td className="px-6 py-4">
                               {data[15]}
                            </td>
                        </tr>
                        <tr className="bg-gray-50 border-b dark:bg-gray-900 dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Prescribtion
                            </th>
                            <td className="px-6 py-4">
                                {data[16]}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div> }
        </div>
    </div>
  )
}

export default ViewIp