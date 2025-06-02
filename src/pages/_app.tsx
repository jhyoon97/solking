import axios from 'axios';
import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import type { AppProps } from 'next/app';

import config from '@/constants/config';
import Default from '@/layouts/Default';

import './globals.css';

dayjs.extend(timezone);
dayjs.tz.setDefault('Asia/Seoul'); // 타임존 설정

axios.defaults.baseURL = config.host;

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Default>
      <Component {...pageProps} />
    </Default>
  );
};

export default App;
