import Head from 'next/head';

// components
import Search from '@/components/Search';

const Page = () => {
  return (
    <>
      <Head>
        <title>솔킹</title>
        <meta name="description" content="리부트 조각 파밍 랭킹" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="mb-[2rem] p-[2rem] bg-[#232735] rounded-[1rem]">
          <Search />
        </div>

        <p className="text-white">
          ※ 6차전직을 완료한 캐릭터만 검색 가능합니다.
        </p>
      </div>
    </>
  );
};

export default Page;
