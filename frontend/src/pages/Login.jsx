import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/api";


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = React.useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault()
        setError("")
        try {
            const response = await API.post("/auth/login", { email, password });
           
            if (response.status === 200) {
                const { token } = response.data;
                localStorage.setItem("token", token);
            
                navigate("/");
            } else {
                alert(response.data.message || "Login failed");
            }
        } catch (error) {
            console.error("Error during login:", error);
            alert(error.response?.data?.message || "An error occurred during login");
        }
    };


    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
          <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <form onSubmit={handleLogin} className="flex flex-col space-y-4">    
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-2 border border-gray-300 rounded"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="p-2 border border-gray-300 rounded"
              required
            />
            <button
              type="submit"
              className="p-2 bg-blue-800 text-white rounded hover:rounded-lg transition-all duration-300 cursor-pointer"
            >
              Login
            </button>
          </form>
          <div className="mt-4 text-center">
            <p className="text-gray-600">Don't have an account?</p>
            <button
              onClick={() => navigate("/register")}
              className="text-blue-500 hover:underline cursor-pointer"
            >
              Register
            </button>
          </div>
        </div>
      </div>
    );
};

export default Login;
