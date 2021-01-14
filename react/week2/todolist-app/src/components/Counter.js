import React, { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);
    return () => {
      clearInterval(t);
    };
  }, []);

  return (
    <p className="counter"> You have used {count} seconds on this website</p>
  );
};
export default Counter;
