import Link from "next/link";
import useSWR from "swr";
import Post, { PostData } from "../components/posts/post";
import Cell from "../components/posts/cell";
import Thread from "../components/posts/thread";
import { PostResponse, getData, getPosts } from "./board";

export default function Catalog() {
  const [data, error, photoData, photoError] = getData();
  if (error || photoError) return <div>failed to load</div>;
  if (!data || !photoData) return <div>loading...</div>;

  const posts = getPosts(data, photoData);
  const catalogCells = posts.splice(0, 30);

  return (
    <div id="divThreads" className="text-center">
      {catalogCells.map((c: PostData) => (
        <Cell cell={c} key={c.id + "c"}></Cell>
      ))}
    </div>
  );
}
