import { css } from "@emotion/react";
import Image from "next/image";
import { BiSolidLock } from "react-icons/bi";

// types
import type { SkillPosition } from "types/app";

interface Props {
  variant: "스킬 코어" | "강화 코어" | "마스터리 코어" | "공용 코어";
  name: string;
  level: number;
  icon?: string;
  position: SkillPosition;
}

const box = (background: string) => css`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  width: 68px;
  height: 78px;
  background: url(${background}) no-repeat;
`;

const lockIcon = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  filter: drop-shadow(0 0 2px rgba(155, 155, 155, 0.5));
`;

const levelBox = css`
  margin: 14px 0 2px;
  padding: 1px 0;
  width: 30px;

  background: rgba(0, 0, 0, 0.4);
  border-radius: 1rem;
  box-shadow: rgba(255, 255, 255, 1) 0px 0px 2px;

  line-height: 1;
  font-size: 0.8rem;
  font-weight: 300;
  color: #fff;
  text-align: center;
`;

const Skill = ({ variant, name, level, icon, position }: Props) => {
  const background = `/${(() => {
    switch (variant) {
      case "스킬 코어":
        return "vi";
      case "강화 코어":
        return "v";
      case "마스터리 코어":
        return "mastery";
      default:
        return "common";
    }
  })()}.png`;

  return (
    <div css={box(background)} style={{ top: position.y, left: position.x }}>
      {!icon && (
        <div css={lockIcon}>
          <BiSolidLock color="rgba(255, 255, 255, 0.3)" size="35" />
        </div>
      )}
      {icon && <span css={levelBox}>{level}</span>}
      {icon && (
        <Image alt={name} src={icon} width="32" height="32" quality="100" />
      )}
    </div>
  );
};

export default Skill;
