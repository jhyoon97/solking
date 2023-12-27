import type { AppProps } from "next/app";

// dayjs
import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";

// utils
import setAxiosInterceptors from "utils/setAxiosInterceptors";

dayjs.extend(timezone);
dayjs.tz.setDefault("Asia/Seoul"); // 타임존 설정

setAxiosInterceptors();

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default App;
