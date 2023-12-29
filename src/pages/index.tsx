import { useRef } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { css } from "@emotion/react";

const box = css`
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Page = () => {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <Head>
        <title>솔킹</title>
        <meta name="description" content="리부트 조각 파밍 랭킹" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <form
        css={box}
        onSubmit={(e) => {
          e.preventDefault();

          router.push(`/${inputRef.current?.value}`);
        }}
      >
        <input ref={inputRef} />
        <button type="submit">검색</button>
      </form>
    </>
  );
};

export default Page;
