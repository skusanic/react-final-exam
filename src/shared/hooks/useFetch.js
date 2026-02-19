import { useState, useEffect } from "react";
import { urls } from "../urls/urls";

const useFetch = (url, isSingle = false) => {
  const [data, setData] = useState(!isSingle ? [] : {});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`${urls.baseApi}${url}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setIsLoading(false);
      });
  }, [url]);

  return { data, isLoading };
};

export default useFetch;
