import { css } from "@emotion/react";
import Image from "next/image";

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

const levelBox = css`
  margin: 14px 0 3px;
  padding: 1px 0;
  width: 30px;

  background: rgba(0, 0, 0, 0.4);
  border-radius: 1rem;

  line-height: 1;
  font-size: 0.8rem;
  font-weight: 300;
  color: #fff;
  text-align: center;

  box-shadow: rgba(255, 255, 255, 1) 0px 0px 2px;
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
  })()}${icon ? "" : "_locked"}.png`;

  return (
    <div css={box(background)} style={{ top: position.y, left: position.x }}>
      {icon && <span css={levelBox}>{level}</span>}
      {icon && (
        <Image alt={name} src={icon} width="32" height="32" quality="100" />
      )}
    </div>
  );
};

export default Skill;
