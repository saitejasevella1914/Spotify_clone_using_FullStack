import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar w-full border-b-2 border-gray-800 px-5 sm:px-12 py-4 text-lg flex justify-between items-center'>
        {/* Left side */}
        <p className="font-semibold">Admin Panel</p>

        {/* Right side */}
        <button
          onClick={() => (window.location.href = " http://localhost:5173")} // change to your actual home URL
          className="bg-[#003a10] hover:bg-green-600 text-white px-4 py-2 rounded-lg transition"
        >
          Go to Home
        </button>
    </div>
  )
}

export default Navbar
