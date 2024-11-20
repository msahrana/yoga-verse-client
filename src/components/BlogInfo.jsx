import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogInfo = ({blog}) => {
  const {title, image, description, authorName, authorImage, _id} = blog || {};

  return (
    <section className="bg-white dark:bg-gray-900 border-2 rounded-lg container mx-auto">
      <div>
        <div className="lg:flex lg:items-center">
          <Image
            className="h-60 p-4 rounded-3xl hover:scale-105 transform transition duration-300"
            src={image}
            width={500}
            height={400}
            alt="blogsImage"
          />

          <div className="mt-6 lg:w-2/3 lg:mt-0 lg:mx-6 ">
            <p className="block mt-4 text-2xl font-semibold text-gray-800 dark:text-white">
              {title}
            </p>
            <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm text-justify"><span className="font-bold">Description:</span> {description}</p>

            <Link
              href={`/blog/${_id}`}
              className="inline-block mt-2 text-blue-500 underline hover:text-blue-400"
            >
              Read more
            </Link>

            <div className="flex items-center mt-6">
              <Image
                className="object-cover object-center w-10 h-10 rounded-full"
                src={authorImage}
                width={500}
                height={400}
                alt="blogsImage"
              />
              <div className="mx-4">
                <h1 className="text-sm text-gray-700 dark:text-gray-200 font-bold">
                  {authorName}
                </h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Lead Developer
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogInfo;
