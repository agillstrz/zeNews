import React, { useState } from "react";
import Card from "../Card";
import FetchingAPI from "../FetchingAPI/FetchingAPI";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import { useParams } from "react-router-dom";
import Loading from "../Loading";

function News() {
  const [view, setView] = useState(false);
  const { cate } = useParams();
  const { data, loading, error } = FetchingAPI(
    `https://newsapi.org/v2/top-headlines?country=id&category=${cate}&apiKey=313e9d036541408a8cbb7523e09e9207`
  );
  return (
    <div>
      <div>
        {error && <p>{error}</p>}
        <h1 className="font-bold text-4xl lg:text-left text-center uppercase  py-4">
          📰{cate}
        </h1>
        {loading && <Loading />}
        {data &&
          data.slice(0, 5).map((m) => (
            <div key={m.url}>
              <Card
                url={m.url}
                title={m.title}
                image={m.urlToImage}
                publish={m.publishedAt}
                description={m.description}
                author={m.author}
              />
            </div>
          ))}
        <div className={`${!view ? "hidden" : ""}`}>
          {data &&
            data.slice(6).map((m) => (
              <div key={m.url}>
                <Card
                  url={m.url}
                  title={m.title}
                  image={m.urlToImage}
                  publish={m.publishedAt}
                  description={m.description}
                  author={m.author}
                />
              </div>
            ))}
        </div>
      </div>
      {!loading && (
        <div className="flex justify-center mt-5 lg:mt-0">
          <button
            className="border-2 hover:text-white hover:border-hijau hover:bg-hijau transition-colors duration-200 ease-in-out border-gray-700 py-2 px-5 font-bold "
            onClick={() => (!view ? setView(true) : setView(false))}
          >
            {!view ? "LIHAT LEBIH BANYAK..." : "LIHAT LEBIH SEDIKIT"}
          </button>
        </div>
      )}
    </div>
  );
}

export default News;
