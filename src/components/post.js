import React, { useEffect, useState } from "react";

const Post = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      console.log("the fetch Data Triggred");
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((posts) =>
          // console.log(posts)
          setPosts(posts)
        );
    };
    fetchData();
  }, []);

  return (
    <div className="ml-4">
      <h1>Post page</h1>
      <ul>
        {posts.map((post, index) => {
          return (
            <div key={post.id}>
              <li>{post.userId}</li>
              <li>{post.id}</li>
              <li>{post.title}</li>
              <li>{post.body}</li>
              <hr />
            </div>
          );
        })}
      </ul>
    </div>
  );
};
export default Post;
