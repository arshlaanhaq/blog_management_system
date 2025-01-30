import React, { useEffect, useState } from "react";
import API from "../api/api";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function BlogDetails() {
    const { id } = useParams(); 
    const [blog, setBlog] = useState(null);

    useEffect(() => {
        const fetchBlog = async () => {
            try {

                const response = await API.get(`/blogs/${id}`);
                setBlog(response.data);
                    
            } catch (error) {
                console.error("Error fetching blog:", error);
            }
        };

        fetchBlog();
    }, [id]);

    return (
        <div>
            <Navbar Islogged={true} />
            <div className="container mx-auto p-4">
                {blog ? (
                    <>
                        <h1 className="text-2xl font-bold">{blog.title}</h1>
                        <p className="text-gray-600">By {blog.author.name}</p>
                        <p className="mt-4">{blog.content}</p>
                    </>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    );
}
