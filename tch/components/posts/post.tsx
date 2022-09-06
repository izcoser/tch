import Image from "next/image";
import React, { useState } from "react";

export interface PostData {
  title: string;
  body: string;
  id: string;
  userId: string;
  thumbnailUrl: string;
  url: string;
}

type ImageState = {
  expanded: boolean;
  height: number;
  width: number;
};

function reverseImageState(im: ImageState) {
  if (im.expanded) {
    return { expanded: false, height: 150, width: 150 };
  }
  return { expanded: true, height: 600, width: 600 };
}

export default function Post(props: PostData) {
  const [imageState, setImageState] = useState({
    expanded: false,
    height: 150,
    width: 150,
  });
  const [hiddenPost, setHiddenPost] = useState(false);

  if (hiddenPost) {
    return (
      <div
        className="text-black hover:cursor-pointer"
        onClick={() => setHiddenPost(!hiddenPost)}
      >
        Toggle hide
      </div>
    );
  }

  return (
    /*<div className="w-11/12 text-center rounded-md border bg-purple-900" key={props.id}>
      <div className="text-fuchsia-200 text-2xl"><span className="text-slate-900/100">No. {props.id}</span> {props.title}</div>
      <div className="text-indigo-200">{props.body}</div>
      <Image height={imageState.width} width={imageState.width} layout="intrinsic" src={imageState.expanded ? props.url : props.thumbnailUrl}
        onClick={() => setImageState(reverseImageState(imageState))}></Image>
      <div className="text-black hover:cursor-pointer" onClick={() => setHiddenPost(!hiddenPost)}>Toggle hide</div>
    </div>*/
    <div className="postCell my-4 mx-5" key={props.id}>
      <div className="innerPost inline-block pr-1 ml-9 max-w-full align-top relative">
        <div className="contentOverflow max-h-[1400px] overflow-y-auto">
          <div className="panelUploads block">
            <figure className="uploadCell float-left my-5 mx-20 w-auto">
              <Image
                src={imageState.expanded ? props.url : props.thumbnailUrl}
                width={imageState.width}
                height={imageState.height}
                onClick={() => setImageState(reverseImageState(imageState))}
              ></Image>
            </figure>
          </div>
          <div className="divMessage m-4">{props.body}</div>
        </div>
      </div>
    </div>
  );
}
