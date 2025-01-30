import React from "react";
import {Link, useNavigate} from "react-router-dom";


export default function Navbar({Islogged= false}) {
    const  navigate = useNavigate()
    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");

        
    }
    return (
        <nav className="bg-blue-800 text-white p-4">
            <div className="container mx-auto flex justify-between">
                <Link to="/" className="text-lg font-bold">Blog App</Link>
                {!Islogged ? <div>
                    <Link to="/login" className="mr-4 hover:underline">Login</Link>
                    <Link to="/register" className="mr-4 hover:underline">Register</Link>
                </div> :<div className="flex gap-4 items-center">
                            <Link to="/" className="mr-4 hover:underline">Home</Link>                                
                            <Link to="/dashboard" className="mr-4 hover:underline">Dashboard</Link>                                
                            <button onClick={handleLogout} className="cursor-pointer hover:underline">Logout</button>
                        </div>}
            </div>
        </nav>
    )
}