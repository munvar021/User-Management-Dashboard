# User Management Dashboard

This is a full-stack web application to perform CRUD (Create, Read, Update, Delete) operations on a list of users.

## Tech Stack

### Backend

*   **Node.js**: A JavaScript runtime for server-side code.
*   **Express.js**: A web application framework for Node.js to build APIs.
*   **SQLite**: A lightweight, file-based database.
*   **uuid**: Library for generating Universally Unique Identifiers (UUIDs) for user IDs.
*   **CORS**: A package to enable Cross-Origin Resource Sharing.

### Frontend

*   **React.js**: A JavaScript library for building user interfaces.
*   **React Hook Form**: For flexible and extensible forms with easy-to-use validation.
*   **Font Awesome**: For icons.
*   **Axios**: An HTTP client for making API requests from the browser.

## Features

*   Create, Read, Update, and Delete users.
*   Modern, responsive, and stylish user interface with an "Obsidian black" theme and "liquid glass" (glassmorphism) effect.
*   RESTful API for user management using UUIDs for unique user identification.
*   Animations and hover effects for an enhanced user experience.
*   Optimized layout for mobile devices, ensuring a compact and user-friendly design.

## Setup and Installation

### Backend

1.  Navigate to the `backend` directory:
    ```bash
    cd user-management-dashboard/backend
    ```
2.  Install the dependencies:
    ```bash
    npm install
    ```
3.  Start the server:
    ```bash
    npm start
    ```
    The server will be running on `http://localhost:8080`.

### Frontend

1.  Navigate to the `frontend` directory:
    ```bash
    cd user-management-dashboard/frontend
    ```
2.  Install the dependencies:
    ```bash
    npm install
    ```
3.  Start the React application:
    ```bash
    npm start
    ```
    The application will be running on `http://localhost:3000`.

## How to use

1. Open your browser and go to `http://localhost:3000`.
2. You will see a user management dashboard with a form on the left to add/edit users and a list of existing users on the right.
3. To add a user, fill in the "Add User" form fields (Name and Email) and click the compact, right-aligned "Add User" button.
4. To edit a user, click the edit icon on the user card. The form will be populated with the user's data. After editing, click the compact, right-aligned "Update User" button.
5. To delete a user, click the trash icon on the user card.
