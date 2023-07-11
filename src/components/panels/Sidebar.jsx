import { faDoorClosed, faDoorOpen, faPager, faUser, faUserDoctor, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import block from '../../assets/block1.png'
import { logout } from '../../services/auth.service'

function Sidebar() {
    const navigate = useNavigate();
  return (
    <div className="flex flex-col h-screen p-3 bg-white shadow w-60 fixed left-0 top-0">
        <div className="space-y-3">
            <div className="flex items-center">
                <h2 className="text-xl font-bold">Dashboard</h2>
            </div>
            <div className="flex-1">
                <ul className="pt-2 pb-4 space-y-1 text-sm">
                    <li className="rounded-sm text-lg font-bold hover:bg-gray-200">
                        <Link
                            to="/ip"
                            className="flex items-center p-2 space-x-3 rounded-md"
                        >
                            <FontAwesomeIcon icon={faUser} />
                            <span>In Patient</span>
                        </Link>
                    </li>
                    <li className="rounded-sm text-lg font-bold hover:bg-gray-200">
                        <Link
                            to="/op"
                            className="flex items-center p-2 space-x-3 rounded-md"
                        >
                            <FontAwesomeIcon icon={faUser} />
                            <span>Out Patient</span>
                        </Link>
                    </li>
                    <li className="rounded-sm text-lg font-bold hover:bg-gray-200">
                        <Link
                            to="/doc"
                            className="flex items-center p-2 space-x-3 rounded-md"
                        >
                            <FontAwesomeIcon icon={faUserDoctor} />
                            <span>Doctor</span>
                        </Link>
                    </li>
                    <li className="rounded-sm text-lg font-bold hover:bg-gray-200">
                        <Link
                            to="/admin"
                            className="flex items-center p-2 space-x-3 rounded-md"
                        >
                            <FontAwesomeIcon icon={faUserPlus} />
                            <span>Add Admin</span>
                        </Link>
                    </li>
                    <li className="rounded-sm flex items-center text-lg font-bold hover:bg-gray-200">
                        <Link
                            to="/bc"
                            className="flex items-center p-2 space-x-3 rounded-md"
                        >
                            <img src={block} className='w-10 h-10' alt='bc'/>
                            <span>About <br />Blockchain</span>
                        </Link>
                    </li>
                    <li className="rounded-sm text-lg font-bold hover:bg-gray-200">
                        <button
                            onClick={()=>{
                                logout()
                                navigate('/')
                            }}
                            className="flex items-center p-2 space-x-3 rounded-md"
                        >
                            <FontAwesomeIcon icon={faDoorOpen} />
                            <span>Logout</span>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Sidebar