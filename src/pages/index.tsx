import Head from "next/head";
import { css } from "@emotion/react";

// components
import Search from "components/Search";

const box = css`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const searchBox = css`
  margin-bottom: 2rem;
  padding: 2rem;
  background: #232735;
  border-radius: 1rem;
`;

const caution = css`
  color: #fff;
`;

const Page = () => {
  return (
    <>
      <Head>
        <title>솔킹</title>
        <meta name="description" content="리부트 조각 파밍 랭킹" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <div css={box}>
        <div css={searchBox}>
          <Search />
        </div>

        <p css={caution}>
          ※ 6차전직을 완료한 리부트/리부트2 캐릭터만 검색 가능합니다.
        </p>
      </div>
    </>
  );
};

export default Page;
