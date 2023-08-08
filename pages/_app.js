import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import "/styles/global.scss";

const App = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default App;
