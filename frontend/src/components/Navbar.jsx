import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

export default function Navbar({ Islogged = false }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { theme, toggleTheme } = useContext(ThemeContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    };

    return (
        <nav className="bg-blue-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-lg font-bold">Blog App</Link>

                {/* Menu for larger screens */}
                <div className="hidden md:flex items-center gap-4">
                    {!Islogged ? (
                        <>
                            <Link to="/login" className="hover:underline">Login</Link>
                            <Link to="/register" className="hover:underline">Register</Link>
                        </>
                    ) : (
                        <>
                            <Link to="/" className="hover:underline">Home</Link>
                            <Link to="/dashboard" className="hover:underline">Dashboard</Link>
                            <button onClick={handleLogout} className="cursor-pointer hover:underline">Logout</button>
                        </>
                    )}

                    {/* Inline Dark Mode Toggle Button */}
                    <button
                        onClick={toggleTheme}
                        className="ml-4 cursor-pointer text-white px-3 py-1 rounded-md transition-all duration-300"
                    >
                        {theme === "dark" ? "🌞" : "🌙"}
                    </button>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="block md:hidden cursor-pointer transition-transform duration-300"
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

            {/* Mobile Menu */}
            <div
                className={` text-white md:hidden overflow-hidden transition-all duration-300 ease-in-out transform ${isMenuOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}
            >
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

                {/* Dark Mode Toggle for Mobile */}
                <li className="flex justify-center">
                    <button
                        onClick={toggleTheme}
                        className="cursor-pointer text-white px-3 py-1 rounded-md transition-all duration-300"
                    >
                        {theme === "dark" ? "🌞" : "🌙"}
                    </button>
                </li>
            </div>
        </nav>
    );
}
