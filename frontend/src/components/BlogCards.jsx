import React from 'react'
import {Link} from 'react-router-dom'
export default function BlogCards({blog}) {
    return (
        <div className="border rounded-lg p-4 shadow-md">
            <h2 className="text-xl font-semibold">{blog.title}</h2>
            <p className="text-gray-600">{blog.content.slice(0, 100)}...</p>
            <Link to={`/blog/${blog._id}`} className="text-blue-500 mt-2 inline-block">
                Read More
            </Link>
        </div>
    )
}