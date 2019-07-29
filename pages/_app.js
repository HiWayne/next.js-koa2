import React from "react";
import App, { Container } from "next/app";
import { PageTransition } from "next-page-transitions";
import { Global, css } from "@emotion/core";
import Loader from "components/Loader";
import { Provider } from "react-redux";
import withReduxStore from "../lib/with-redux-store";

const TIMEOUT = 200;
class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Provider store={this.props.reduxStore}>
          <PageTransition
            timeout={TIMEOUT}
            classNames="page-transition"
            loadingComponent={<Loader />}
            loadingDelay={500}
            loadingTimeout={{
              enter: TIMEOUT,
              exit: 0
            }}
            loadingClassNames="loading-indicator"
          >
            <Component {...pageProps} key={this.props.path} />
          </PageTransition>
        </Provider>
        <Global
          style={css`
            .page-transition-enter {
              opacity: 0;
              width: 1px;
              transform: translate3d(0, 20px, 0);
              width: 100%;
            }
            .page-transition-enter-active {
              opacity: 1;
              transform: translate3d(0, 0, 0);
              transition: opacity ${TIMEOUT}ms, transform ${TIMEOUT}ms;
            }
            .page-transition-exit {
              opacity: 1;
            }
            .page-transition-exit-active {
              opacity: 0;
              transition: opacity ${TIMEOUT}ms;
            }
            .loading-indicator-appear,
            .loading-indicator-enter {
              opacity: 0;
            }
            .loading-indicator-appear-active,
            .loading-indicator-enter-active {
              opacity: 1;
              transition: opacity ${TIMEOUT}ms;
            }
          `}
        />
      </Container>
    );
  }
}

export default withReduxStore(MyApp);
