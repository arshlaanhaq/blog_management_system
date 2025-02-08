# Blog Management System

## Overview
The Blog Management System is a full-stack web application that allows users to create, edit, delete, and manage blog posts. It includes user authentication and a responsive frontend.

## Features
- User Authentication (Login/Signup)
- Create, Read, Update, Delete (CRUD) functionality for blogs
- Responsive UI with React.js
- Secure backend with Node.js and Express.js
- Database integration with MongoDB (or MySQL/PostgreSQL)

## Tech Stack
- **Frontend:** React.js
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (or MySQL/PostgreSQL if preferred)

## Installation
### Prerequisites
- Node.js and npm installed
- MongoDB database setup

### Steps to Run the Project
1. Clone the repository:
   ```bash
   git clone https://github.com/arshlaanhaq/blog_management_system.git
   cd blog-management-system
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables (`.env` file):
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   ```
4. Start the backend server:
   ```bash
   npm start
   ```
5. Navigate to the frontend directory and start the frontend:
   ```bash
   cd client
   npm start
   ```

## API Endpoints
| Method | Endpoint       | Description          |
|--------|---------------|----------------------|
| POST   | /api/auth/register | User registration  |
| POST   | /api/auth/login    | User login        |
| GET    | /api/blogs         | Get all blogs     |
| POST   | /api/blogs         | Create a blog     |
| PUT    | /api/blogs/:id     | Update a blog     |
| DELETE | /api/blogs/:id     | Delete a blog     |

## Deployment
- Frontend: Deployed using Vercel/Netlify
- Backend: Deployed using Render/Railway.app
- Database: MongoDB Atlas / Planetscale

## Contribution
Feel free to fork the repo, create a branch, and submit a PR!


