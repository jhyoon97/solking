import type { HexaMatrixItem } from "./nexon-api";

export interface SkillPosition {
  x: number;
  y: number;
}

export interface HexaMatrixItemWithIcon
  extends Omit<HexaMatrixItem, "linked_skill"> {
  icon?: string;
}
