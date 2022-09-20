import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from "./Card";
import FetchingAPI from "./FetchingAPI/FetchingAPI";
import Loading from "./Loading";

const GetSearch = () => {
  const { name } = useParams();
  const { loading, data, error } = FetchingAPI(
    `https://newsapi.org/v2/everything?q=${name}&from=2022-08-20&sortBy=publishedAt&apiKey=313e9d036541408a8cbb7523e09e9207`
  );
  return (
    <>
      {error && <p>{error}</p>}

      {data && (
        <h1 className="font-bold text-4xl lg:text-left text-center uppercase  py-4">
          🔍{name}
        </h1>
      )}
      {loading && <Loading />}
      {data &&
        data.slice(0, 20).map((m) => (
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
    </>
  );
};

export default GetSearch;
