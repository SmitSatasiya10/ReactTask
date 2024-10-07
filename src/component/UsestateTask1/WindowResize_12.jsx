import React, { useState, useEffect } from "react";

const WindowResize_12 = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="bg-black text-light" style={{height:"100vh"}}>
      <div className="container pt-5 text-center">
        <h2>Window Resize Listener</h2>
        <h5>Current Window Width: {windowWidth}px</h5>
      </div>
    </div>
  );
};

export default WindowResize_12;
