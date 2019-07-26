import React from "react";
import { connect } from "react-redux";
import { mapStateToAboutProps as mapStateToProps } from "../../shared/store";
import { mapDispatchToAboutProps as mapDispatchToProps } from "../../shared/store";

const About = ({ text, changeText }) => {
  let showText = "";
  return (
    <div>
      <p>This is {text} page</p>
      <input
        onChange={e => {
          showText = e.target.value;
        }}
      />
      <div
        onClick={() => {
          changeText(showText);
        }}
      >
        确认
      </div>
    </div>
  );
};

About.getInitialProps = async () => {
  const delayLoad = new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, 3000);
  });

  await delayLoad;
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(About);
