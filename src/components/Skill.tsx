import { RiLock2Fill } from '@react-icons/all-files/ri/RiLock2Fill';

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
        background: `url("${background}") no-repeat`,
      }}
    >
      {!icon && (
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] filter-[drop-shadow(0_0_2px_rgba(155,155,155,0.5))]">
          <RiLock2Fill color="rgba(255, 255, 255, 0.3)" size="35" />
        </div>
      )}
      {icon && (
        <span className="shadow-[0px_0px_2px_rgba(255,255,255,1)] mt-[14px] mx-0 mb-[2px] py-[1px] px-0 w-[30px] bg-[rgba(0,0,0,0.4)] rounded-[1rem] leading-[1] text-[0.8rem] font-light text-white text-center">
          {level}
        </span>
      )}
      {icon && <img alt={name} src={icon} width="32" height="32" />}
    </div>
  );
};

export default Skill;
