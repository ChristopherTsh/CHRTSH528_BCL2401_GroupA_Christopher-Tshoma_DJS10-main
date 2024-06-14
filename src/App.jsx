import React, { useState} from "react"; // Importing React and the useState hook from the react module
import Api from "./Api"; // Importing the Api component from a local file called Api.js

// Defining the App component, which is the main component of the application
export default function App() {
  // Using the useState hook to create a state variable called posts, initialized as an empty array
  // and a function setPosts to update the posts state
  const [posts, setPosts] = useState([]);
  // Using the useState hook to create a state variable called error, initialized as null
  // and a function setError to update the error state
  const [error, setError] = useState(null);

  // If there is an error, return a div element with the error message
  if (error) {
    return <div className="Error">{error}</div>;
  }
  // If there is no error, return the main app component
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
