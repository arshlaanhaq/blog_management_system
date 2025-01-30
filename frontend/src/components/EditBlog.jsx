import React, { useEffect, useState } from "react";
import API from "../api/api";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function EditBlog() {
    const { id } = useParams(); // Get the blog ID from the URL
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const response = await API.get(`/blogs/${id}`);
                
                setTitle(response.data.title);
                setContent(response.data.content);
            } catch (error) {
                console.error("Error fetching blog:", error);
            }
        };

        fetchBlog();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await API.put(`/blogs/${id}`, { title, content },
               { headers:{
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }}
            );
            navigate("/dashboard");
        } catch (error) {
            console.error("Error updating blog:", error);
        }
    };

    return (
        <div>
            <Navbar Islogged={true}/>
            <div className="container mx-auto p-4">
                <h1 className="text-2xl font-bold mb-4">Edit Blog</h1>
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
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 cursor-pointer"
                    >
                        Update
                    </button>
                </form>
            </div>
        </div>
    );
}
