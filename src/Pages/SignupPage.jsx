import React, { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { UserContext } from "../UserContext";

const SignUpPage = () => {
  const navigate=useNavigate();
  const [input,setInput]=useState({
    name:"",
    email:"",
    password:"",


  });
  //to store value in localstorage
  const handleSubmit=(e)=>{
    e.preventDefault();
    localStorage.setItem("user",JSON.stringify(input));
    navigate("/loginpage");
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-80">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        {/* {error && <p className="text-red-500 text-sm mb-4">{error}</p>} */}
        <form onSubmit={handleSubmit}>
        <div className="mb-4">
            <label className="block text-gray-700 text-sm mb-2">Name</label>
            <input
              name="name"
              type="text"
              value={input.name}
              onChange={(e) => setInput({...input,[e.target.name]: e.target.value})}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your Name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm mb-2">Email</label>
            <input
            name="email"
              type="email"
              value={input.email}
              onChange={(e) => setInput({...input,[e.target.name]:e.target.value})}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm mb-2">Password</label>
            <input
            name="password"
              type="password"
              value={input.password}
              onChange={(e) => setInput({...input,[e.target.name]: e.target.value})}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
            />
          </div>
          {/* <div className="mb-4">
            <label className="block text-gray-700 text-sm mb-2">Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Confirm your password"
            />
          </div> */}
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
          >
            Sign Up
          </button>
        </form>
        <div className="text-center mt-4">
          <span>Have an account? </span>
          <Link to="/loginPage" className="text-blue-500 hover:underline">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
