import React from 'react'

const Navbar = ({ setToggle }) => {
    return (
        <nav className="bg-white shadow-md px-8 py-4">
            <div className="max-w-7xl mx-auto flex items-center justify-between">

                {/* Logo */}
                <h1 className="text-2xl font-bold text-blue-600">
                    MediCare
                </h1>

                {/* Navigation Links */}
                <div className="flex items-center gap-8 text-gray-700 font-medium">
                    <a href="#" className="hover:text-blue-600 transition">
                        Home
                    </a>

                    <a href="#" className="hover:text-blue-600 transition">
                        About
                    </a>

                    <a onClick={() => setToggle(false)} href="#" className="hover:text-blue-600 transition">
                        User
                    </a>
                </div>

                {/* Create Button */}
                <button onClick={() => setToggle(true)} className="bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
                    Create
                </button>

            </div>
        </nav>
    )
}

export default Navbar