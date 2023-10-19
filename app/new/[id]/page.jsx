import React from "react";

const NewsIdPage = ({ params, searchParams }) => {
  console.log("news id", params.id);
  console.log("searchParams", searchParams);
  return (
    <div>
      hello {params.id}
      hello {searchParams.test}
    </div>
  );
};

export default NewsIdPage;
