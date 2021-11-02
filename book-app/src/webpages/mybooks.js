import React, { useEffect } from "react";

const MyBooks = () => {
  useEffect(() => {
    document.title = 'My books';
  });

  return (
    <div>
      <h1>Book App</h1>
      <p>These are my books...</p>
    </div>
  );
};

export default MyBooks;
