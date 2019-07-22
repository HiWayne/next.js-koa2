import { keyframes } from "@emotion/core";
import styled from "@emotion/styled";

const spin = keyframes({
  "0%": {
    transform: "rotate(0deg)"
  },
  "100%": {
    transform: "rotate(360deg)"
  }
});

const Loader = styled.div`
  margin: 40px auto 0 auto;
  width: 40px;
  height: 40px;
  border: 8px solid #f3f3f3;
  border-top: 8px solid #3498db;
  border-radius: 50%;
  animation: ${spin} 2s linear infinite;
`;

export default Loader;
