import { css } from "@emotion/react";

// types
import type { DetailPageError } from "types/app";

interface Props {
  errorCode: DetailPageError;
}

const box = css`
  padding: 1rem;
  background: #232735;
`;

const text = css`
  color: #fff;
`;

const CustomError = ({ errorCode }: Props) => {
  return (
    <div css={box}>
      <p css={text}>
        {(() => {
          switch (errorCode) {
            case "IS_NOT_REBOOT_WORLD":
              return "리부트월드 캐릭터만 이용 가능합니다.";
            case "IS_NOT_SIXTH_CLASS":
              return "6차전직을 완료하지 않은 캐릭터입니다.";
            default:
              return "접속 기록이 없거나 존재하지 않는 닉네임입니다.";
          }
        })()}
      </p>
    </div>
  );
};

export default CustomError;
