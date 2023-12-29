import { useState, useEffect } from "react";
import Head from "next/head";
import { css } from "@emotion/react";
import dayjs from "dayjs";

// components
import Skill from "components/Skill";

// constants
import solTable from "constants/solTable";

// utils
import nexonAxios from "utils/nexonAxios";

// types
import type { GetServerSideProps } from "next";
import type { SkillPosition, HexaMatrixItemWithIcon } from "types/app";
import type {
  GetIdResponse,
  GetCharacterBasicInfoResponse,
  GetSkillResponse,
  GetHexaMatrixResponse,
} from "types/nexon-api";

interface Props {
  nickname?: string;
  level?: number;
  image?: string;
  className?: string;
  currentHexaMatrix?: Array<HexaMatrixItemWithIcon>;
  errorCode?: "IS_NOT_REBOOT_WORLD" | "IS_NOT_SIXTH_CLASS" | "UNKNOWN";
}

interface Params {
  [key: string]: string;
  nickname: string;
}

const box = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const characterInfo = css`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 1rem;
  margin-bottom: 1rem;
  width: 506px;
  background: #232735;
  border-radius: 1rem;
  color: #fff;
`;

const matrix = css`
  position: relative;
  margin-bottom: 1rem;
  width: 506px;
  height: 507px;
  background: url("/matrix.png") no-repeat;
  background-color: #232735;
  border-radius: 1rem;
`;

const totalInfo = css`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 1rem;
  width: 506px;
  background: #232735;
  border-radius: 1rem;
  color: #fff;

  & .group {
    display: flex;
    flex-direction: row;
    align-items: center;

    & span {
      margin-left: 0.5rem;
    }
  }
`;

const viPositions: Array<SkillPosition> = [
  { x: 170, y: 142 },
  { x: 100, y: 142 },
  { x: 135, y: 82 },
  { x: 65, y: 82 },
  { x: 100, y: 22 },
  { x: 30, y: 22 },
];
const vPositions: Array<SkillPosition> = [
  { x: 170, y: 286 },
  { x: 135, y: 346 },
  { x: 65, y: 346 },
  { x: 30, y: 406 },
];
const masteryPositions: Array<SkillPosition> = [
  { x: 268, y: 142 },
  { x: 303, y: 82 },
  { x: 373, y: 82 },
  { x: 408, y: 22 },
];
const commonPositions: Array<SkillPosition> = [
  { x: 268, y: 286 },
  { x: 303, y: 346 },
  { x: 373, y: 346 },
  { x: 408, y: 406 },
];

const Page = ({
  nickname,
  level,
  image,
  className,
  currentHexaMatrix,
  errorCode,
}: Props) => {
  const [total, setTotal] = useState({ erda: 0, peace: 0 });

  useEffect(() => {
    if (currentHexaMatrix) {
      setTotal(
        currentHexaMatrix.reduce(
          (acc, skill) => {
            const column = (() => {
              switch (skill.hexa_core_type) {
                case "스킬 코어":
                  return "vi";
                case "강화 코어":
                  return "v";
                case "마스터리 코어":
                  return "mastery";
                default:
                  return "common";
              }
            })();

            for (let i = 0; i < skill.hexa_core_level; i += 1) {
              acc.erda += solTable[column][i].erda;
              acc.peace += solTable[column][i].peace;
            }

            return acc;
          },
          { erda: 0, peace: 0 }
        )
      );
    }
  }, [currentHexaMatrix]);

  if (!currentHexaMatrix) {
    return null;
  }

  const viSkills = currentHexaMatrix.filter(
    (item) => item.hexa_core_type === "스킬 코어"
  );
  const vSkills = currentHexaMatrix.filter(
    (item) => item.hexa_core_type === "강화 코어"
  );
  const masterySkills = currentHexaMatrix.filter(
    (item) => item.hexa_core_type === "마스터리 코어"
  );
  const commonSkills = currentHexaMatrix.filter(
    (item) => item.hexa_core_type === "공용 코어"
  );

  return (
    <>
      <Head>
        <title>솔킹 - {nickname}</title>
        <meta name="description" content="리부트 조각 파밍 랭킹" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <div css={box}>
        <div css={characterInfo}>
          <img alt={`${level} ${className} ${nickname}`} src={image} />
          <span>
            Lv.{level} {className} {nickname}
          </span>
        </div>

        <div css={matrix}>
          {viSkills
            .concat(
              new Array(6 - viSkills.length).fill({
                hexa_core_type: "스킬 코어",
              })
            )
            .map((item, index) => {
              return (
                <Skill
                  key={item.hexa_core_name || index}
                  variant={item.hexa_core_type}
                  name={item.hexa_core_name}
                  level={item.hexa_core_level}
                  icon={item.icon}
                  position={viPositions[index]}
                />
              );
            })}
          {vSkills
            .concat(
              new Array(4 - vSkills.length).fill({
                hexa_core_type: "강화 코어",
              })
            )
            .map((item, index) => {
              return (
                <Skill
                  key={item.hexa_core_name || index}
                  variant={item.hexa_core_type}
                  name={item.hexa_core_name}
                  level={item.hexa_core_level}
                  icon={item.icon}
                  position={vPositions[index]}
                />
              );
            })}
          {masterySkills
            .concat(
              new Array(4 - masterySkills.length).fill({
                hexa_core_type: "마스터리 코어",
              })
            )
            .map((item, index) => {
              return (
                <Skill
                  key={item.hexa_core_name || index}
                  variant={item.hexa_core_type}
                  name={item.hexa_core_name}
                  level={item.hexa_core_level}
                  icon={item.icon}
                  position={masteryPositions[index]}
                />
              );
            })}
          {commonSkills
            .concat(
              new Array(4 - commonSkills.length).fill({
                hexa_core_type: "공용 코어",
              })
            )
            .map((item, index) => {
              return (
                <Skill
                  key={item.hexa_core_name || index}
                  variant={item.hexa_core_type}
                  name={item.hexa_core_name}
                  level={item.hexa_core_level}
                  icon={item.icon}
                  position={commonPositions[index]}
                />
              );
            })}
        </div>

        <div css={totalInfo}>
          <div className="group">
            <img alt="솔 에르다" src="/solErda.png" width="32" height="33" />
            <span>{total.erda}</span>
          </div>
          <div className="group">
            <img
              alt="솔 에르다"
              src="/solErdaPeace.png"
              width="54"
              height="57"
            />
            <span>{total.peace}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps<Props, Params> = async ({
  params,
}) => {
  try {
    if (params?.nickname) {
      const date = dayjs().add(-1, "day").format("YYYY-MM-DD"); // 조회 기준일 - 금일기준 1일 전

      // 식별자 조회
      const {
        data: { ocid },
      } = await nexonAxios.get<GetIdResponse>(
        `/id?character_name=${params.nickname}`
      );

      // 월드명 및 전직 차수 조회
      const {
        data: {
          world_name: world,
          character_class_level: classLevel,
          character_class: className,
          character_level: level,
          character_image: image,
        },
      } = await nexonAxios.get<GetCharacterBasicInfoResponse>(
        `/character/basic?ocid=${ocid}&date=${date}`
      );

      if (!world.startsWith("리부트")) {
        return {
          props: {
            errorCode: "IS_NOT_REBOOT_WORLD",
          },
        };
      }

      if (classLevel !== "6") {
        return {
          props: {
            errorCode: "IS_NOT_SIXTH_CLASS",
          },
        };
      }

      const {
        data: { character_skill: currentSkills },
      } = await nexonAxios.get<GetSkillResponse>(
        `/character/skill?ocid=${ocid}&date=${date}&character_skill_grade=6`
      );

      const {
        data: { character_hexa_core_equipment: currentHexaMatrix },
      } = await nexonAxios.get<GetHexaMatrixResponse>(
        `/character/hexamatrix?ocid=${ocid}&date=${date}`
      );

      return {
        props: {
          nickname: params.nickname,
          image,
          level,
          className,
          currentHexaMatrix: currentHexaMatrix.map((item) => {
            return {
              hexa_core_name: item.hexa_core_name,
              hexa_core_level: item.hexa_core_level,
              hexa_core_type: item.hexa_core_type,
              icon:
                item.linked_skill.length > 1
                  ? currentSkills.find(
                      (skill) =>
                        skill.skill_name === item.linked_skill[0].hexa_skill_id
                    )?.skill_icon
                  : currentSkills.find(
                      (skill) => skill.skill_name === item.hexa_core_name
                    )?.skill_icon,
            };
          }),
        },
      };
    }

    return {
      props: { nickname: "ERROR", errorCode: "UNKNOWN" },
    };
  } catch (err) {
    return {
      props: { nickname: "ERROR", errorCode: "UNKNOWN" },
    };
  }
};

export default Page;
