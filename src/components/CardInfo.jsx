import Image from "next/image";
import Link from "next/link";
import React from "react";

const CardInfo = ({card}) => {
  const {name, image, description, benefits, _id} = card || {};
  return (
    <div className="card bg-base-100 w-full shadow-xl">
      <figure className="px-10 pt-10">
        <Image className="h-64 rounded-sm" src={image} width={400} height={200} alt="image" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p className="text-justify"><span className="font-bold">Description:</span> {description}</p>
        <div>
          <p className="text-justify"><span className="font-bold">Benefits:</span> {benefits}</p>
        </div>
        <div className="card-actions">
          <Link href={`/product/${_id}`}>
          <button className="btn btn-outline">Shop Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardInfo;
