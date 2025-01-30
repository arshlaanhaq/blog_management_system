const express = require('express')
const {
  createBlog,
  getBlogs,
  getMyBlogs,
  getBlogById,
  updateBlog,
  deleteBlog,
} = require('../controllers/blogController')
const authenticate = require('../middleware/authMiddleware')

const router = express.Router()

router.post('/', authenticate, createBlog) // Create a Blog
router.get('/', getBlogs)  // Get all Blogs
router.get("/my",authenticate,getMyBlogs) // Get all Blogs of a User
router.get('/:id' ,getBlogById) //Get a Blog by ID
router.put('/:id', authenticate, updateBlog)// Update a Blog
router.delete('/:id', authenticate, deleteBlog) // Delete a Blog

module.exports = router
