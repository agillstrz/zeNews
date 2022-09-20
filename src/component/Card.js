import moment from "moment/moment";
import React from "react";

function Card({ url, title, image, description, publish, author }) {
  let time = moment(publish).startOf("hour").fromNow();
  return (
    <div className="cards mt-4 hover:shadow-xl py-2 lg:py-0 lg:h-60 lg:my-8 flex lg:flex-row flex-col items-center lg:items-start">
      <div className="lg:w-[45%] lg:h-full ">
        <img className="lg:h-full lg:w-full  h-1/2 " src={image} alt={title} />
      </div>
      <div className="lg:w-[65%]  px-2">
        <h1 className="font-bold lg:text-xl  pb-2">
          <a
            className="hover:underline hover:text-hijau"
            href={url}
            target="_blank"
          >
            {title}
          </a>
        </h1>
        <p className="mb-5">{description}</p>
        <a href={url} target="_blank" className="hover:underline text-blue-800">
          <span className="text-black/60">
            {time}, {author}
          </span>
        </a>
      </div>
    </div>
  );
}

export default Card;
