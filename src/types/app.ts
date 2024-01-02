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

export type DetailPageError =
  | "IS_NOT_REBOOT_WORLD"
  | "IS_NOT_SIXTH_CLASS"
  | "UNKNOWN";
