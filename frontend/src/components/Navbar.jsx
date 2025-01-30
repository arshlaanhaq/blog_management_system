import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar({ Islogged = false }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    };

    return (
        <nav className="bg-blue-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-lg font-bold">Blog App</Link>

                {/* Desktop Menu */}
                {!Islogged ? (
                    <div className="hidden md:flex items-center gap-4">
                        <Link to="/login" className="hover:underline">Login</Link>
                        <Link to="/register" className="hover:underline">Register</Link>
                    </div>
                ) : (
                    <div className="hidden md:flex gap-4 items-center ">
                        <Link to="/" className="hover:underline">Home</Link>
                        <Link to="/dashboard" className="hover:underline">Dashboard</Link>
                        <button onClick={handleLogout} className="cursor-pointer hover:underline">Logout</button>
                    </div>
                )}

                {/* Mobile Menu Toggle */}
                <button
                    className="block md:hidden cursor-pointer"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <svg
                        className="w-6 h-6 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                        />
                    </svg>
                </button>
            </div>

            {/* Mobile Menu with Smooth Transition */}
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
                <ul className="md:hidden  text-white space-y-4 px-4 py-6">
                    {!Islogged ? (
                        <li className="flex flex-col items-center gap-2">
                            <Link to="/login" className="hover:underline">Login</Link>
                            <Link to="/register" className="hover:underline">Register</Link>
                        </li>
                    ) : (
                        <li className="flex flex-col gap-4 items-center">
                            <Link to="/" className="hover:underline">Home</Link>
                            <Link to="/dashboard" className="hover:underline">Dashboard</Link>
                            <button onClick={handleLogout} className="cursor-pointer hover:underline">Logout</button>
                        </li>
                    )}
                </ul>
            </div>
        </nav>
    );
}
