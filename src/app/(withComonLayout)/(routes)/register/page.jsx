"use client";
import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";
import bcrypt from "bcryptjs";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation"


const Register = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    photo: "",
    password: "",
  });

  const router = useRouter()

  const handleSignUp = async (e) => {
    e.preventDefault();
    const { name, email, photo, password } = userData;

    if (!name || !photo || !email || !password) {
      alert("Please fill up all fields");
      return;
    }

    try {
      // Check if the user already exists
      const existingUser = await axios.get(`http://localhost:5000/user?email=${email}`);
      if (existingUser.data.length > 0) {
        alert("User already exists");
        return;
      }

      // Hash the password using bcryptjs
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      // Prepare the user data with the hashed password
      const data = {
        name,
        email,
        photo,
        password: hashedPassword,
        role: 'member'
      };

      // Send data to the backend
      const response = await axios.post("http://localhost:5000/users", data);
      console.log(response)
      if (response.data.insertedId) {
        toast.success("User registered successfully!");
        router.push("/"); // Navigate to the home page
      }
    } catch (error) {
      console.error("Error during registration:", error);
      toast.error("Failed to register user. Please try again.");
    }
  };

  return (
    <div className="w-full max-w-md p-8 space-y-3 rounded-xl border-2 container mx-auto my-3 md:mt-[18px] mb-48">
      <h1 className="text-2xl font-bold text-center">Register Form</h1>
      <form className="space-y-6" onSubmit={handleSignUp}>
        <div className="space-y-1 text-sm">
          <label htmlFor="name" className="block dark:text-gray-600">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="Name"
            placeholder="Your Name"
            className="w-full px-4 py-3 rounded-md border"
            required
            onChange={(e) =>
              setUserData({ ...userData, name: e.target.value })
            }
          />
        </div>
        <div className="space-y-1 text-sm">
          <label htmlFor="photo" className="block dark:text-gray-600">
            Photo URL
          </label>
          <input
            type="text"
            name="photo"
            id="Photo"
            placeholder="Your Photo URL"
            className="w-full px-4 py-3 rounded-md border"
            required
            onChange={(e) =>
              setUserData({ ...userData, photo: e.target.value })
            }
          />
        </div>
        <div className="space-y-1 text-sm">
          <label htmlFor="email" className="block dark:text-gray-600">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="Email"
            placeholder="Your Email"
            className="w-full px-4 py-3 rounded-md border"
            required
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
          />
        </div>
        <div className="space-y-1 text-sm">
          <label htmlFor="password" className="block dark:text-gray-600">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Type Password"
            className="w-full px-4 py-3 rounded-md border"
            required
            onChange={(e) =>
              setUserData({ ...userData, password: e.target.value })
            }
          />
        </div>
        <button className="block w-full p-3 text-center rounded-sm bg-blue-300 font-bold text-white">
          Sign Up
        </button>
      </form>
      <p className="text-xs text-center sm:px-6 dark:text-gray-600">
        Already have an account?
        <Link href="/login" className="underline text-blue-400 font-bold ml-1">
          Login
        </Link>
      </p>
    </div>
  );
};

export default Register;
