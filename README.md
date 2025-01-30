# Blog Management System

## Overview
The **Blog Management System** is a full-stack web application that enables users to create, manage, and interact with blog posts. It provides a responsive and user-friendly interface for seamless blogging experiences.

## Features
- User Authentication (Login/Register)
- Create, Read, Update, and Delete (CRUD) Blog Posts
- Responsive Frontend Design
- Secure and Scalable Backend
- Database Integration

## Tech Stack
### Frontend:
- React.js
- Vite (for faster development)
- Tailwind CSS (for styling)

### Backend:
- Node.js
- Express.js
- JWT Authentication

### Database:
- MongoDB (or MySQL/PostgreSQL as needed)

## Installation & Setup

### Prerequisites
Ensure you have the following installed on your system:
- Node.js (LTS version recommended)
- MongoDB (or MySQL/PostgreSQL)

### Steps to Run the Project

#### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/blog-management-system.git
cd blog-management-system
```

#### 2. Backend Setup
```bash
cd backend
npm install
```

- Create a `.env` file in the backend folder and add the necessary environment variables:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

- Start the backend server:
```bash
npm run dev
```

#### 3. Frontend Setup
```bash
cd ../frontend
npm install
```

- Start the React frontend:
```bash
npm run dev
```

### API Endpoints
| Method | Endpoint       | Description                  |
|--------|--------------|------------------------------|
| POST   | `/api/auth/register` | User Registration       |
| POST   | `/api/auth/login`    | User Login             |
| GET    | `/api/blogs`         | Fetch All Blogs        |
| POST   | `/api/blogs`         | Create a New Blog      |
| GET    | `/api/blogs/:id`     | Fetch Single Blog      |
| PUT    | `/api/blogs/:id`     | Update a Blog Post    |
| DELETE | `/api/blogs/:id`     | Delete a Blog Post    |

## Deployment

### Backend Deployment on Render
1. Create an account on [Render](https://render.com/).
2. Create a new **Web Service**.
3. Connect your GitHub repository.
4. Set up the environment variables (`MONGO_URI`, `JWT_SECRET`, etc.).
5. Deploy the backend service.

### Frontend Deployment on Netlify
1. Create an account on [Netlify](https://www.netlify.com/).
2. Click on **New site from Git** and connect your repository.
3. Set the build command to:
   ```bash
   npm run build
   ```
4. Set the publish directory to `dist` (for Vite projects).
5. Deploy the frontend.

## Contribution
Feel free to contribute by submitting pull requests or reporting issues.

## Links
- Frontend: https://blog-management-sys.netlify.app
- Backend: 

