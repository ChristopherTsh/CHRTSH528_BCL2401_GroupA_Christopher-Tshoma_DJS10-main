import React, { useState} from "react";
import Api from "./Api";

export default function App() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  if (error) {
    return <div>Error:{error}</div>;
  }

  return (
    <div className="app-container">
      <Api setPosts={setPosts} setError={setError} />
      <h1>Post</h1>
      <ol className="centered-list">
        {posts.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
