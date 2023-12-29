import axios from "axios";
import { Global } from "@emotion/react";

// config
import config from "constants/config";

// utils
import resetCss from "utils/resetCss";

// dayjs
import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";

// types
import type { AppProps } from "next/app";

dayjs.extend(timezone);
dayjs.tz.setDefault("Asia/Seoul"); // 타임존 설정

axios.defaults.baseURL = config.host;

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Global styles={(theme) => resetCss(theme)} />
      <Component {...pageProps} />;
    </>
  );
};

export default App;
