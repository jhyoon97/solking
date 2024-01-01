import React from "react";
import { css, useTheme } from "@emotion/react";
import Link from "next/link";

// components
import Search from "components/Search";

// constants
import style from "constants/style";

// types
import type { Theme } from "@emotion/react";

interface Props {
  children: React.ReactNode;
}

const box = css`
  width: 100%;
  height: 100%;
`;

const header = {
  box: (theme: Theme) => css`
    z-index: 2;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: #232735;
  `,
  innerBox: css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    padding: 1rem 2rem;
    width: 100%;
    max-width: 1200px;

    ${style.mediaQuery.isMobile} {
      padding: 1rem;
    }
  `,
  title: (theme: Theme) => css`
    color: #fff;
    font-size: 1rem;
  `,
};

const body = {
  box: css`
    z-index: 1;
    padding-top: calc(1.5rem + 2rem);
    width: 100%;
    height: 100%;
  `,
  contentBox: css`
    margin: 0 auto;
    width: 100%;
    max-width: 1200px;
    height: 100%;
  `,
};

const Layout = ({ children }: Props) => {
  const theme = useTheme();

  return (
    <div css={box}>
      <header css={header.box(theme)}>
        <div css={header.innerBox}>
          <Link href="/">
            <h1 css={header.title(theme)}>솔킹</h1>
          </Link>

          <Search />
        </div>
      </header>
      <div css={body.box}>
        <main css={body.contentBox}>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
