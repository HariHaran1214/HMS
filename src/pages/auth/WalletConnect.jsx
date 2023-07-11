import React from 'react'

function WalletConnect({connectWallet,navigate}) {
  return (
    <div className='h-screen flex justify-around items-center'>
        <div className='text-2xl font-extrabold'>Connect To Wallet</div>
        <div className='w-48 h-48 text-white flex justify-center items-center cursor-pointer hover:w-52 hover:h-52 transition-all ease-in-out'>
            <div className='h-full w-full rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1 animate-gradient-xy'>
                <button className=" h-full w-full flex justify-center items-center text-xl font-bold rounded bg-gray-800" onClick={async()=>{
                        await connectWallet()
                        navigate('/login')
                    }}>
                    Connect 
                </button>
            </div>
        </div>
    </div>
  )
}

export default WalletConnect