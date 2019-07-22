import React, { useState, useEffect } from "react";

const Content = () => {
  const [load, setLoad] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setLoad(1);
    }, 3000);
  }, []);

  return load ? <p>This is Content page</p> : null;
};

export default Content;
