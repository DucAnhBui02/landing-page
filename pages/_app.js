import React from "react";
import { Provider } from "react-redux";
import Footer from '../components/theme/Footer';
import Navigation from '../components/theme/Navigation';
import store from "../store/store";

import './../styles/2.2e108a71.chunk.css'
import './../styles/animate.min.css'
import './../styles/bootstrap.min.css'
// import './../styles/flaticon.css'
// import './../styles/fontawesome-all.min.css'
import './../styles/main.64a4e6c0.chunk.css'
import './../styles/slick.css'
import './../styles/slicknav.css'
import './../styles/styles.css'
import './../styles/vnpt_smartbot_ver2.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <Navigation />
        <Component {...pageProps} />
        <Footer />
      </Provider>
    </>
  );
}

export default MyApp;
