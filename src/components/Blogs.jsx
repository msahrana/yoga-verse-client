"use client";
import React, {useEffect, useState} from "react";
import BlogInfo from "./BlogInfo";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await fetch("http://localhost:5000/blogs");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setBlogs(data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchCards();
  }, []);

  return (
    <div>
      <h1 className="text-center text-xl md:text-4xl font-bold pt-4">
        Our Blogs
      </h1>
      <div className="space-y-10 mt-5 mb-10 grid grid-cols-1 gap-6">
        {blogs.length > 0 ? (
          blogs.map((blog) => <BlogInfo key={blog.id} blog={blog} />)
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Blogs;
