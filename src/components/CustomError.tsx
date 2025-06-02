import type { DetailPageError } from '@/types/app';

interface Props {
  errorCode: DetailPageError;
}

const CustomError = ({ errorCode }: Props) => {
  return (
    <div className="p-[1rem] bg-[#232735]">
      <p className="text-white">
        {(() => {
          switch (errorCode) {
            case 'IS_NOT_SIXTH_CLASS':
              return '6차전직을 완료하지 않은 캐릭터입니다.';
            default:
              return '접속 기록이 없거나 존재하지 않는 닉네임입니다.';
          }
        })()}
      </p>
    </div>
  );
};

export default CustomError;
