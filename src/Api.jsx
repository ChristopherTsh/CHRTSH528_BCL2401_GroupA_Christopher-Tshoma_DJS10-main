import React, { useEffect } from "react";

/**
 * Api function component that fetches data from an API and updates the state accordingly.
 *
 * @param {function} setPosts - A function to update the posts state.
 * @param {function} setError - A function to update the error state.
 */
export default function Api({ setPosts, setError }) {
  /**
   * useEffect hook to fetch data from the API when the component mounts.
   * The dependency array includes setPosts and setError to ensure the effect is re-run if these functions change.
   */
  useEffect(() => {
    /**
     * Fetch data from the API.
     * The API endpoint is https://jsonplaceholder.typicode.com/posts.
     */
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        /**
         * Check if the response was successful.
         * If not, throw an error with the HTTP status code.
         */
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        } else {
          /**
           * If the response was successful, return the JSON data.
           */
          return response.json();
        }
      })
      .then((data) => {
        /**
         * Update the posts state with the fetched data.
         */
        setPosts(data);
      })
      .catch((error) => {
        /**
         * Catch any errors that occur during the data fetch and update the error state.
         */
        setError("Data fetch failed");
      });
  }, [setPosts, setError]);
  /**
   * The component doesn't render anything, so return null.
   */

  return null;
}
