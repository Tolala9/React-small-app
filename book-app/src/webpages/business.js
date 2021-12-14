import React, { useEffect } from "react";

const Business = () => {
  useEffect(() => {
    document.title = 'Business';
  });

  return (
    <div>
      <h1>Business page</h1>
    </div>
  );
};

export default Business;
