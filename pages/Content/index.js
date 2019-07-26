import React, { useState, useEffect } from "react";

const Content = (props) => {
  const [load, setLoad] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      props.pageTransitionReadyToEnter();
      setLoad(1);
    }, 3000);
  }, []);

  return load ? <p>This is Content page</p> : null;
};

Content.pageTransitionDelayEnter = true;

export default Content;
