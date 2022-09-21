import Image from "next/image";
import React, { useState } from "react";
import { PostData } from "./post";

export default function Cell(props: { cell: PostData }) {
  return (
    <div
      className="catalogCell bg-slate-300 border-transparent rounded border-solid border inline-block mx-6 mb-6 overflow-hidden p-1 relative align-top w-56"
      key={props.cell.id}
    >
      <div className="catalogHeader leading-4">
        <a className="labelSubject font-bold block text-base mx-0 mt-0 mb-2 p-0 no-underline whitespace-normal text-red-500">
          {props.cell.body.slice(0, 10) + "..."}
        </a>
      </div>
      <div className="thumbGrid">
        <div className="thumbGridTop">
          <a className="linkThumb">
            <Image
              src={props.cell.thumbnailUrl}
              width={150}
              height={150}
            ></Image>
          </a>
        </div>
        <div className="thumbGridBottom flex items-center justify-evenly"></div>
        <div className="threadStats mb-2">R: 1 P: 1</div>
        <div className="divMessage m-0 overflow-hidden">{props.cell.body}</div>
      </div>
    </div>
  );
}
