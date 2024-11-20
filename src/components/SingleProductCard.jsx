"use client";
import Image from "next/image";
import Link from "next/link";
import React, {useEffect, useState} from "react";

const SingleProductCard = ({params = {}}) => {
  const {id} = params || {}; // Provide default value
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) {
      console.error("ID is missing!");
      return;
    }

    const fetchCards = async () => {
      try {
        const response = await fetch(`http://localhost:5000/product/${id}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setPost(data);
      } catch (error) {
        console.error("Error fetching blog:", error);
        setError(error.message);
      }
    };

    fetchCards();
  }, [id]);

  if (!id) {
    return <div>Blog ID is missing.</div>;
  }

  if (error) {
    return <div>Error loading blog: {error}</div>;
  }

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className="card bg-base-100 w-2/5 shadow-xl container mx-auto my-10">
      <Image
        src={post?.image || "/default-image.jpg"}
        width={400}
        height={400}
        alt="blogImage"
        className="w-full h-[434px] p-4 rounded-3xl"
      />

      <div className="card-body items-center text-center">
        <h2 className="card-title">{post?.name || "Product Title"}</h2>
        <p className="text-justify"> <span className="font-bold">Description:</span>
           {post?.description || "Product description goes here."}
        </p>
        <p className="text-justify"><span className="font-bold">Benefits:</span>
           {post?.benefits || "Product description goes here."}
        </p>
        <div className="card-actions">
          <Link href={"/products"}>
            <button
              className="px-8 py-3 relative shadow-lg before:absolute 
before:top-0 before:left-0 before:w-0 before:h-0 before:border-l-[4px] before:border-t-[4px] before:border-transparent 
hover:before:w-full hover:before:h-full hover:before:border-primary hover:before:transition-all hover:before:duration-500 
after:border-r-[4px] after:border-b-[4px] after:border-transparent hover:after:border-primary 
after:absolute after:bottom-0 after:right-0 after:w-0 
after:h-0 hover:after:w-full hover:after:h-full hover:after:transition-all hover:after:duration-500 bg-blue-200 rounded"
            >
              {" "}
              See More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleProductCard;
