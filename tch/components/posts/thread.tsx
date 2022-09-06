import Image from "next/image";
import React, { useState } from "react";
import Post, { PostData } from "./post";

export default function Thread(props: { posts: PostData[] }) {
  /*const [imageState, setImageState] = useState({ expanded: false, height: 150, width: 150 });*/
  return (
    <div
      className="w-8/12 text-center grid justify-items-center rounded-md border bg-blue-900" /*key={props[0].id}*/
    >
      {props.posts.map((p: PostData) => (
        <Post
          title={p.title}
          body={p.body}
          id={p.id}
          userId={p.userId}
          url={p.url}
          thumbnailUrl={p.thumbnailUrl}
          key={p.id}
        ></Post>
      ))}
    </div>
  );
}
