import React, { useState, useEffect } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faEdit,
  faTrash,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import "./Home.css";

const apiUrl = process.env.REACT_APP_BACKEND_API_URL;

const Home = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await axios.get(`${apiUrl}/users`);
    setUsers(response.data.data);
  };

  const onSubmit = async (data) => {
    if (editingUser) {
      await axios.put(`${apiUrl}/users/${editingUser.id}`, data);
    } else {
      await axios.post(`${apiUrl}/users`, data);
    }
    fetchUsers();
    reset();
    setEditingUser(null);
  };

  const deleteUser = async (id) => {
    await axios.delete(`${apiUrl}/users/${id}`);
    fetchUsers();
  };

  const startEditing = (user) => {
    setEditingUser(user);
    setValue("name", user.name);
    setValue("email", user.email);
  };

  const cancelEditing = () => {
    setEditingUser(null);
    reset();
  };

  return (
    <div className="home-container">
      <div className="form-section">
        <div className="form-container">
          <h2>{editingUser ? "Edit User" : "Add User"}</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <input
                {...register("name", { required: "Name is required" })}
                placeholder="Name"
              />
              {errors.name && (
                <p className="error-message">{errors.name.message}</p>
              )}
            </div>
            <div className="form-group">
              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email address",
                  },
                })}
                placeholder="Email"
              />
              {errors.email && (
                <p className="error-message">{errors.email.message}</p>
              )}
            </div>
            <div className="form-buttons">
              <button type="submit">
                <FontAwesomeIcon icon={editingUser ? faEdit : faPlus} />
                {editingUser ? "Update User" : "Add User"}
              </button>
              {editingUser && (
                <button type="button" onClick={cancelEditing}>
                  Cancel
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
      <div className="user-list-section">
        <div className="user-list">
          {users.map((user) => (
            <div key={user.id} className="user-card">
              <FontAwesomeIcon icon={faUserCircle} className="avatar" />
              <div className="user-info">
                <h3>{user.name}</h3>
                <p>{user.email}</p>
              </div>
              <div className="card-actions">
                <button onClick={() => startEditing(user)}>
                  <FontAwesomeIcon icon={faEdit} />
                </button>
                <button onClick={() => deleteUser(user.id)}>
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
