import React, { useState} from "react";
import Api from "./Api";

export default function App() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  if (error) {
    return <div className="Error">{error}</div>;
  }

  return (
    <div className="app-container">
      <Api setPosts={setPosts} setError={setError} />
      <h1>Post</h1>
      <dd className="centered-list">
        {posts.map((post, index) => (
          <dd key={post.id}>
            <h2>{index + 1}.{post.title}</h2>
            <p>{post.body}</p>
          </dd>
        ))}
      </dd>
    </div>
  );
}
