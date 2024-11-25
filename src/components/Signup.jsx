// components/Signup.js
import React, { useState } from "react";
import "./App1.css";
import VideoBackground from "./VideoBackground";
import axios from "axios";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
let {name,email,password}=formData


  const handleChange = (e) => {
    let{name,value}=e.target
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit =async(e) => {
    e.preventDefault();
    let payload={name,email,password}
    let {data}=await axios.post("http://localhost:8000/users",payload)
    
  };

  return (
    <div id="home">
    <div className="form-container">
        <VideoBackground></VideoBackground>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          placeholder="name"
          value={name}
          onChange={handleChange}
          required
        />
        <label>Email:</label>
        <input
          type="email"
          name="email"
          placeholder="email"

          value={email}
          onChange={handleChange}
          required
        />
        <label>Password:</label>
        <input
          type="password"
          name="password"
          placeholder="passwors"
          value={password}
          onChange={handleChange}
          required
        />
        <button id="sig" type="submit">Signup</button>
      </form>
    </div>
    </div>
  );
};

export default Signup;
