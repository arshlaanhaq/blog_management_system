import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BlogDetails from "./pages/BlogDetails";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import CreateBlog from "./components/CreateBlog.jsx";
import EditBlog from "./components/EditBlog.jsx";
import Navbar from "./components/Navbar";
import ThemeProvider from "./context/ThemeContext"; // Import Theme Provider

export default function App() {
    return (
        <ThemeProvider> {/* Wrap everything in ThemeProvider */}
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/blog/:id" element={<BlogDetails />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/dashboard/create" element={<CreateBlog />} />
                    <Route path="/dashboard/edit/:id" element={<EditBlog />} />
                    <Route path="*" element={<div>404 - Not Found</div>} />
                </Routes>
            </Router>
        </ThemeProvider>
    );
}
