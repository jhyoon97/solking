import { useRouter } from 'next/router';
import { useRef } from 'react';

const Search = () => {
  const router = useRouter();
  const formRef = useRef<HTMLFormElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      ref={formRef}
      className="flex flex-row items-center"
      onSubmit={(e) => {
        e.preventDefault();

        router.push(`/character/${inputRef.current?.value}`);
        formRef.current?.reset();
      }}
    >
      <input ref={inputRef} placeholder="닉네임을 입력해주세요." />
      <button type="submit" className="text-white border-[1px solid white]">
        검색
      </button>
    </form>
  );
};

export default Search;
