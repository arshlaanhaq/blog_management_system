import React, { useState } from "react";
import API from "../api/api";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function CreateBlog() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await API.post("/blogs", { title, content });
            navigate("/dashboard");
        } catch (error) {
            console.error("Error creating blog:", error);
        }
    };

    return (
        <div>
           <Navbar Islogged={true}/>
            <div className="container mx-auto p-4">
                <h1 className="text-2xl font-bold mb-4">Create New Blog</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="block w-full p-2 mb-4 border rounded"
                    />
                    <textarea
                        placeholder="Content"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        className="block w-full p-2 mb-4 border rounded"
                        rows={8}
                    ></textarea>
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-700"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}
