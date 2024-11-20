import React from "react";

const Banner = () => {
  return (
    <div className='relative h-[70vh] bg-cover bg-right bg-no-repeat text-white pl-10 space-y-10'
    style={{ backgroundImage: `url('https://i.ibb.co.com/gDJhjgL/avrielle-suleiman-Gp-Vak9-c-L6-E-unsplash.jpg')` }}>
      <h1 className="text-5xl font-bold pt-20">Welcome to the Future of YogaVerse!</h1>
      <p className="">Discover a new way to enhance your practice with our smart yoga products— <br />where innovation meets mindfulness. </p>

      <button className="btn btn-outline my-6 border-white text-white hover:bg-blue-500 hover:text-black">Shop Now</button>
    </div>
  );
};

export default Banner;
