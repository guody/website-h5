import http from "../../util/http.js";
import api from "../../api/api.js";
import React from "react";
const ArticleInfo = (props) =>{
  // const article = http.get(
  //   parseInt(props.match.params.arcid, 10)
  // )
  const article = {arcid:1,"name":"555555"}
  if (!article) {
    return <div>Sorry, but the article was not found</div>
  }

  return (
    <div>
      <h1>{article.name} (#{article.arcid})</h1>
    </div>
  )

} 

export default ArticleInfo;