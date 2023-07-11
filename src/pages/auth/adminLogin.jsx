import React from 'react'

function AdminLogin({login, email, setEmail, password, setPassword,checkLogin,navigate}) {
  return (
    <div className='h-screen flex justify-center items-center'>
        <div className='w-96 h-96 p-8 rounded bg-white'>
            <h1 className='font-bold text-center text-2xl'>Login</h1>
            <form className="space-y-4 md:space-y-6">
                  <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" value={email} onChange={e=>setEmail(e.target.value)} />
                  </div>
                  <div>
                      <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" value={password} onChange={e=>setPassword(e.target.value)} />
                  </div>
              </form>
              <button type="submit" className="w-full mt-4 bg-black text-bold text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" onClick={async()=>{
                await login(email,password)
                navigate('/ip')
              }}>Sign in</button>
        </div>
    </div>
  )
}

export default AdminLogin