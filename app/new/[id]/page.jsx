import React from "react";

const NewsIdPage = ({ params }) => {
  console.log("news id", params.id);
  return <div>hello {params.id}</div>;
};

export default NewsIdPage;
