import Link from 'next/link';
import type { ReactNode } from 'react';

import Search from '@/components/Search';

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className="w-full h-full">
      <header className="z-[2] fixed top-0 left-0 w-full bg-[#232735]">
        <div className="flex flex-row justify-between items-center my-0 mx-auto py-[1rem] px-[2rem] w-full max-w-[1200px]">
          <Link className="text-white text-[1rem]" href="/">
            <h1>솔킹</h1>
          </Link>

          <Search />
        </div>
      </header>
      <div className="z-[1] pt-[3.5rem] w-full h-full">
        <main className="my-0 mx-auto w-full max-w-[1200px] h-full">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
