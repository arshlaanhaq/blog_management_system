import React from 'react'
import API from "../api/api.js";
import BlogCards from "../components/BlogCards";
import Navbar from '../components/Navbar.jsx';

export default function Home() {
    const [blogs, setBlogs] = React.useState([])
    const [Islogged,  setIslogged]= React.useState(false)

    React.useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const { data } = await API.get('/blogs')
                setBlogs(data)
            } catch (e) {
                console.log(e);
            }
        };
        fetchBlogs();
        if(localStorage.getItem('token')){
            setIslogged(true)
        }
        else{
            setIslogged(false)
        }
    }, [])

    return (
        <div>
            <Navbar Islogged={Islogged} />
            <div className="container mx-auto p-4">
                <h1 className="text-2xl font-bold mb-4">All Blogs</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {blogs.length>0? blogs.map((blog) => (
                        <BlogCards key={blog._id} blog={blog} />
                    )):<div>No Blogs Found. Be the first one to write...</div>}
                </div>
            </div>
        </div>
    )
}