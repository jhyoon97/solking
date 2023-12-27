import type { AppProps } from "next/app";
import axios from "axios";

// config
import config from "config";

// dayjs
import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(timezone);
dayjs.tz.setDefault("Asia/Seoul"); // 타임존 설정

axios.defaults.baseURL = config.host;

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default App;
