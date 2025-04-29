### Live URL- https://blog-project-ritank.netlify.app/

# Blog Project - InkNova 🖋️
InkNova is a modern, full-stack blogging platform built using React and Vite, powered by Appwrite as the backend. It provides a seamless experience for creating, editing, and viewing blog posts, with authentication and state management handled efficiently using Redux Toolkit.


## 🔧 Tech Stack:

- Frontend: React (with Vite for bundling)
- Backend: Appwrite (authentication, database, storage)
- State Management: Redux Toolkit
- Routing: React Router DOM
- Forms: React Hook Form
- Styling: Tailwind CSS
- Rich Text Editor: TinyMCE
- HTML Rendering: HTML React Parser

## 📁 Folder Structure Highlights:

src/appwrite: Appwrite configuration and auth utilities.
src/components: Reusable components like Header, Footer, Form controls, Auth Layouts, and PostCard.
src/pages: Core pages like Home, AddPost, AllPosts, EditPost, Login, Signup.
src/store: Redux slices for authentication and post management.
App.jsx: Root component managing the layout and routes.
main.jsx: Entry point for the React app.

## 📌 Features:

User authentication (Signup/Login/Logout)
Add, edit, and delete blog posts
All Blogs Page - View all blog posts, active/inactive both
Home - View blog posts, only active
Rich text editor integration (TinyMCE)
Tailwind-based responsive UI
Global state handling with Redux Toolkit
Secure backend interactions with Appwrite
Clean and modular component architecture