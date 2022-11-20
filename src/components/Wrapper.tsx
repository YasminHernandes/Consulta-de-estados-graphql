import React from "react";

export default function Wrapper(props: any) {
  return (
    <div className="wrapper flex flex-col items-center justify-center py-5  w-full h-max">
      {props.children}
    </div>
  );
}
