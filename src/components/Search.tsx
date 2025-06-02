import { useRef } from "react";
import { useRouter } from "next/router";
import { css } from "@emotion/react";

const box = css`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const button = css`
  border: 1px solid white;
  color: white;
`;

const Search = () => {
  const router = useRouter();
  const formRef = useRef<HTMLFormElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      ref={formRef}
      css={box}
      onSubmit={(e) => {
        e.preventDefault();

        router.push(`/character/${inputRef.current?.value}`);
        formRef.current?.reset();
      }}
    >
      <input ref={inputRef} placeholder="닉네임을 입력해주세요." />
      <button type="submit" css={button}>
        검색
      </button>
    </form>
  );
};

export default Search;
