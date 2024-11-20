import SingleBlogCard from "@/components/SingleBlogCard";
import React from "react";

const SongleBlog = ({params}) => {
  return (
    <div>
      <SingleBlogCard params={params}/>
    </div>
  );
};

export default SongleBlog;
