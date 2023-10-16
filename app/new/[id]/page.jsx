import React from "react";

const NewsIdPage = ({ params }) => {
  console.log("news id", params.id); // 왜 콘솔이 안보일까?
  return <div>hello {params.id}</div>;
};

export default NewsIdPage;
