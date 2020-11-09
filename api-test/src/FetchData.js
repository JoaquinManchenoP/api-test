import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

export default function FetchData() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log(response);
        setPosts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <div>
      {posts.map((post) => (
        <h3 key={post.id}>{post.title}</h3>
      ))}
    </div>
  );
}
