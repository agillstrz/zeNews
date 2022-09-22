import Card from "../Card";
import FetchingAPI from "../FetchingAPI/FetchingAPI";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";

function TodayNews() {
  const { data: news, error } = FetchingAPI(
    `https://newsapi.org/v2/top-headlines?country=id&apiKey=${process.env.REACT_APP_TMDB_KEY}`
  );
  const { data: business, error: err } = FetchingAPI(
    `https://newsapi.org/v2/top-headlines?country=id&category=business&apiKey=${process.env.REACT_APP_TMDB_KEY}`
  );

  return (
    <div>
      <h1 className="font-bold text-4xl text-center pb-5 ">🔥TRENDING</h1>
      <div className=" mx-auto lg:w-[80%] ">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          slidesPerView={1}
          navigation
          autoplay={true}
          pagination={{ clickable: true }}
        >
          {news &&
            news.slice(0, 5).map((m) => (
              <SwiperSlide key={m.url}>
                <div className=" relative h-80  group overflow-hidden">
                  <img src={m.urlToImage} className="w-full" alt={m.url} />
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"></div>
                  <div className="bg-black/70 absolute bottom-0 h-28 left-0 right-0  flex items-center">
                    <div className="text-white font-bold text-xl px-20 ">
                      <p className="text-center">
                        <a
                          className="hover:underline hover:text-hijau"
                          href={m.url}
                        >
                          {m.title}
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>

      <div>
        {error && <p>{error}</p>}
        {news &&
          news.slice(6, 10).map((m) => (
            <div key={m.url}>
              <Card
                title={m.title}
                image={m.urlToImage}
                publish={m.publishedAt}
                description={m.description}
                author={m.author}
                url={m.url}
              />
            </div>
          ))}
      </div>
      {business && (
        <div className="border-b-2 mt-5 lg:mt-0 border-black/60 mb-2 pb-2">
          <h1 className="font-bold text-4xl text-center lg:text-left ">
            💼Busines
          </h1>
        </div>
      )}

      <div className="grid grid-cols-2 lg:gap-2">
        {err && <p>{err}</p>}

        {business &&
          business.slice(0, 4).map((m) => (
            <div key={m.url}>
              <div className="w-full lg:h-[400px] lg:p-5 p-2 hover:shadow-xl">
                <div>
                  <img
                    className="lg:h-52 w-full"
                    src={m.urlToImage}
                    alt={m.title}
                  />
                </div>
                <h1 className="font-semibold text-[15px] lg:text-lg py-2">
                  <a className="hover:underline hover:text-hijau" href={m.url}>
                    {m.title}
                  </a>
                </h1>
                <p className="text-base hidden lg:block">{m.description}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default TodayNews;
