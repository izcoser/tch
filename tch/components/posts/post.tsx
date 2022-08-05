import React, { useState } from 'react';

export interface PostData {
  title: string;
  body: string;
  id: string;
  userId: string;
  thumbnailUrl: string;
  url: string;
}

export default function Post(props: PostData) {
  const [expandedImage, setExpandedImage] = useState(false);
  return (
    <div className="w-8/12 text-center rounded-md border bg-purple-900" key={props.id}>
      <div className="text-fuchsia-200 text-2xl"><span className="text-slate-900/100">No. {props.id}</span> {props.title}</div>
      <div className="text-indigo-200">{props.body}</div>
      <img className="m-auto max-w-xs object-contain" src={expandedImage ? props.url : props.thumbnailUrl} onClick={() => setExpandedImage(!expandedImage)}></img>
    </div>)
}