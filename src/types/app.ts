import type { HexaMatrixItem } from "./nexon-api";

export interface SkillPosition {
  x: number;
  y: number;
}

export interface HexaMatrixItemWithIcon
  extends Omit<HexaMatrixItem, "linked_skill"> {
  icon?: string;
}

export interface SolTable {
  [key: string]: Array<SolTableCell>;
}

interface SolTableCell {
  erda: number;
  peace: number;
}
