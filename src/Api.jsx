import React, { useState, useEffect } from 'react';

export default function Api({setPosts,setError}) {
  

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        } else {
          return response.json();
        }
      })
      .then(data => setPosts(data))
      .catch(error => setError(error.message));
  }, [setPosts,setError]);

  return null
  }