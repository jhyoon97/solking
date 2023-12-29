import { css } from "@emotion/react";

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
  padding-top: 15px;
  width: 68px;
  height: 78px;
  background: url(${background}) no-repeat;
`;

const skillLevel = css`
  margin-bottom: 4px;
  width: 20px;
  height: 8px;
  color: #fff;
  font-size: 0.6rem;
  line-height: 1;
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
  })()}${name ? "" : "_locked"}.png`;

  return (
    <div css={box(background)} style={{ top: position.y, left: position.x }}>
      <span css={skillLevel}>{level}</span>
      <img alt={name} src={icon} />
    </div>
  );
};

export default Skill;
