import React from "react";

export default function Card(props: any) {
  return (
    <div className="card-block max-w-screen-sm flex flex-col items-start justify-start border border-gray py-5 px-11 mb-5 mx-3 rounded-lg">
      {props.children}
    </div>
  );
}
