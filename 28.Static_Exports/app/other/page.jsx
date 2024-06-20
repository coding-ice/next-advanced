"use client";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default () => {
  const { data, error, isLoading } = useSWR(
    "https://jsonplaceholder.typicode.com/posts/1",
    fetcher
  );

  if (isLoading) {
    return "loading...";
  }

  return <h3>other:{data.title}</h3>;
};
