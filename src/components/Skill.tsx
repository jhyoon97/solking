import { BiSolidLock } from 'react-icons/bi';

// types
import type { SkillPosition } from '@/types/app';

interface Props {
  variant: '스킬 코어' | '강화 코어' | '마스터리 코어' | '공용 코어';
  name: string;
  level: number;
  icon?: string;
  position: SkillPosition;
}

const Skill = ({ variant, name, level, icon, position }: Props) => {
  const background = `/${(() => {
    switch (variant) {
      case '스킬 코어':
        return 'vi';
      case '강화 코어':
        return 'v';
      case '마스터리 코어':
        return 'mastery';
      default:
        return 'common';
    }
  })()}.png`;

  return (
    <div
      className="absolute flex flex-col items-center w-[68px] h-[78px]"
      style={{
        top: position.y,
        left: position.x,
        backgroundImage: `url(${background}) no-repeat`,
      }}
    >
      {!icon && (
        <div className="absolute top-[50%] left-[50%] translate-[-50%, -50%] drop-shadow-[0 0 2px rgba(155, 155, 155, 0.5)]">
          <BiSolidLock color="rgba(255, 255, 255, 0.3)" size="35" />
        </div>
      )}
      {icon && (
        <span className="m-[14px 0 2px] p-[1px 0] w-[30px] bg-[rgba(0, 0, 0, 0.4)] rounded-[1rem] shadow-[rgba(255, 255, 255, 1) 0 0 2px] leading-[1] text-[0.8rem] font-light text-white text-center">
          {level}
        </span>
      )}
      {icon && <img alt={name} src={icon} width="32" height="32" />}
    </div>
  );
};

export default Skill;
