import { useEffect } from "react";
import { useState } from "react";
const FetchingAPI = (url) => {
  const [data, setDatas] = useState([]);
  const [loading, setloading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw Error("DATA NOT FOUND");
          }
          return res.json();
        })
        .then((data) => {
          setDatas(data.articles);
          setloading(false);
          setError(null);
        })
        .catch((err) => {
          setError(err.message);
          setloading(false);
        });
    }, [0]);
    setloading(true);
  }, [url]);

  return { loading, data, error };
};
export default FetchingAPI;
