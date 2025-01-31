import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/api"; // Import your API setup

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError]= useState("")
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault()
        setError("")

        try {
            // Use API to make a POST request
            const response = await API.post("/auth/register", { name, email, password });

            if (response.status === 201) {
                
                navigate("/login");
            } else {
                alert(response.data.message || "Registration failed");
            }
        } catch (error) {
            console.error("Error during registration:", error);
            alert(error.response?.data?.message || "An unexpected error occurred.");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6">Register</h1>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              value={name}
              onChange={(e)=>setName(e.target.value)}
              className="w-full border border-gray-300 p-2 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              className="w-full border border-gray-300 p-2 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              className="w-full border border-gray-300 p-2 rounded"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-800 text-white py-2 rounded hover:bg-grey-900 transition cursor-pointer"
          >
            Register
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-gray-600 ">Already have an account?</p>
          <button
            onClick={() => navigate("/login")}
            className="text-blue-500 hover:underline cursor-pointer"
          >
            Login
          </button>
        </div>
      </div>
    </div>
    );
};

export default Register;
