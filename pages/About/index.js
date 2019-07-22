import React from "react";

const About = () => <p>This is About page</p>;

About.getInitialProps = async () => {
  console.log("进入");
  const delayLoad = new Promise(resolve => {
    setTimeout(() => {
      resolve();
      console.log("延时");
    }, 5000);
  });

  await delayLoad;
  console.log("结束");
};

export default About;
