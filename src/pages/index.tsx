import { useRef } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { css } from "@emotion/react";

const box = css`
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const searchBox = css`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const button = css`
  border: 1px solid white;
  color: white;
`;

const caution = css`
  color: #fff;
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
        <div css={searchBox}>
          <input ref={inputRef} placeholder="닉네임을 입력해주세요." />
          <button type="submit" css={button}>
            검색
          </button>
        </div>

        <p css={caution}>
          - 6차전직을 완료한 리부트, 리부트2 캐릭터만 검색 가능합니다.
        </p>
      </form>
    </>
  );
};

export default Page;
