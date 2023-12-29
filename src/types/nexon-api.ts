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
