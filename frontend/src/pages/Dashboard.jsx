import React, { useEffect, useState } from "react";
import API from "../api/api";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Dashboard() {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchBlogs = async () => {
            setLoading(true);

            try {
                const response = await API.get('/blogs/my');
                setBlogs(response.data);
            
            } catch (error) {
                console.error("Error fetching blogs:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchBlogs();
    }, []);

    const deleteBlog = async (id) => {
        if (!window.confirm("Are you sure you want to delete this blog?")) return;

        try {
            await API.delete(`/blogs/${id}`);
            setBlogs((prev) => prev.filter((blog) => blog._id !== id));
        } catch (error) {
            console.error("Error deleting blog:", error);
        }
    };

    return (
        <div>
            <Navbar Islogged={true}/>
            <div className="container mx-auto p-4">
                <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
                <button
                    onClick={() => navigate("/dashboard/create")}
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg mb-4 cursor-pointer hover:bg-blue-800"
                >
                    Add New Blog
                </button>
                {loading ? (
                    <p>Loading blogs...</p>
                ) : blogs.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {blogs.map((blog) => (
                            <div
                                key={blog._id}
                                className="border p-4 rounded-lg shadow-md"
                            >
                                <h2 className="text-xl font-semibold">{blog.title}</h2>
                                <p className="text-gray-600">
                                    {blog.content.slice(0, 100)}...
                                </p>
                                <div className="flex justify-between mt-2">
                                    <button
                                        onClick={() =>
                                            navigate(`/dashboard/edit/${blog._id}`)
                                        }
                                        className="bg-green-500 text-white px-4 py-1 rounded-lg cursor-pointer hover:bg-green-800"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => deleteBlog(blog._id)}
                                        className="bg-red-500 text-white px-2 py-1 rounded-lg cursor-pointer hover:bg-red-800"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>No blogs found. Start creating!</p>
                )}
            </div>
        </div>
    );
}
