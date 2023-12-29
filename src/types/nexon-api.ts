export interface GetIdResponse {
  ocid: string;
}

export interface GetCharacterBasicInfoResponse {
  date: string;
  character_name: string;
  world_name: string;
  character_gender: string;
  character_class: string;
  character_class_level: string;
  character_level: number;
  character_exp: number;
  character_exp_rate: string;
  character_guild_name: string;
  character_image: string;
}

export interface GetSkillResponse {
  date: string;
  character_class: string;
  character_skill_grade: string;
  character_skill: Array<GetSkillItemResponse>;
}

export interface GetSkillItemResponse {
  skill_name: string;
  skill_description: string;
  skill_level: number;
  skill_effect: string;
  skill_icon: string;
}

export interface GetHexaMatrixResponse {
  date: string;
  character_hexa_core_equipment: Array<HexaMatrixItem>;
}

export interface HexaMatrixItem {
  hexa_core_name: string;
  hexa_core_level: number;
  hexa_core_type: "스킬 코어" | "강화 코어" | "마스터리 코어" | "공용 코어";
  linked_skill: Array<LinkedSkill>;
}

interface LinkedSkill {
  hexa_skill_id: string;
}
