const Blog = require('../models/Blog');
const createBlog = async (req, res) => {
  try {
    const { title, content } = req.body;
      const newBlog= new Blog({ title, content, author: req.user.id });
      await newBlog.save();
      res.status(201).json({ message: 'Blog created successfully', blog: newBlog });

    
  } catch (error) {
    console.error("Error creating Blog:", error);
    res.status(500).json({ message: 'Error creating Blog', error: error.message });
  }
};


const getBlogs = async (req, res) => {
  try {
    const Blogs = await Blog.find().populate('author', 'username email');
    res.status(200).json(Blogs);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching Blogs', error });
  }
};

const getMyBlogs = async (req, res) => {
  const  id  = req.user._id;
 
 try {
   const Blogs = await Blog.find({author:id.toString()}).select('title content');

   res.status(200).json(Blogs);
 } catch (error) { 
   console.error("Error fetching Blog:", error);
   res.status(500).json({ message: 'Error fetching Blog', error });
 }
};

const getBlogById = async (req, res) => {
   const { id } = req.params;
  try {
    const Blogs = await Blog.findById(id).select('title author content').populate('author');
    res.status(200).json(Blogs);
  } catch (error) { 
    console.error("Error fetching Blog:", error);
    res.status(500).json({ message: 'Error fetching Blog', error });
  }
};


const updateBlog = async (req, res) => {
  const { title, content } = req.body;
  try {
    const blog = await Blog.findById(req.params.id);
    if(!blog) return res.status(404).json({ message: 'Blog not found' });
    if(blog.author.toString() !== req.user.id) return res.status(401).json({ message: 'User not authorized' });
    blog.title = title;
    blog.content = content;
    await blog.save()
    res.status(200).json({ message: 'Blog updated successfully', blog: blog });
  } catch (error) {
    console.error("Error updating Blog:", error);   
    res.status(500).json({ message: 'Error updating Blog', error });
  }
};

const deleteBlog = async (req, res) => {  
  try {
   const blog =await Blog.findById(req.params.id);
    if(!blog) return res.status(404).json({ message: 'Blog not found' });

    if(blog.author.toString() !== req.user.id) return res.status(401).json({ message: 'You can only delete your own blogs' });

    await blog.deleteOne();
    res.status(200).json({ message: 'Blog deleted' });
  } catch (error) {
    console.error("Error deleting Blog:", error);   
    res.status(500).json({ message: 'Error deleting Blog', error });
  }
};

module.exports = { createBlog, getBlogs, getMyBlogs, getBlogById ,updateBlog, deleteBlog };
