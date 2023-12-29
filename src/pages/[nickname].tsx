import Head from "next/head";
import { css } from "@emotion/react";
import dayjs from "dayjs";

// utils
import nexonAxios from "utils/nexonAxios";

// types
import type { GetServerSideProps } from "next";
import type {
  GetIdResponse,
  GetCharacterBasicInfoResponse,
  GetSkillResponse,
  GetSkillItemResponse,
} from "types/nexon-api";

interface Props {
  nickname?: string;
  level?: number;
  image?: string;
  className?: string;
  currentHexaMatrix?: Array<GetSkillItemResponse>;
  errorCode?: "IS_NOT_REBOOT_WORLD" | "IS_NOT_SIXTH_CLASS" | "UNKNOWN";
}

interface Params {
  [key: string]: string;
  nickname: string;
}

const Page = ({
  nickname,
  level,
  image,
  className,
  currentHexaMatrix,
  errorCode,
}: Props) => {
  return (
    <>
      <Head>
        <title>{nickname}</title>
        <meta name="description" content="리부트 조각 파밍 랭킹" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <div>
        <img alt={`${level} ${className} ${nickname}`} src={image} />
        <p>
          {level} {className} {nickname}
        </p>
        {currentHexaMatrix?.map((skill) => {
          return (
            <div>
              <img alt={skill.skill_name} src={skill.skill_icon} />
              {skill.skill_name} {skill.skill_level}
            </div>
          );
        })}
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
        data: { character_skill: currentHexaMatrix },
      } = await nexonAxios.get<GetSkillResponse>(
        `/character/skill?ocid=${ocid}&date=${date}&character_skill_grade=6`
      );

      return {
        props: {
          nickname: params.nickname,
          image,
          level,
          className,
          currentHexaMatrix,
        },
      };
    }

    return {
      props: { nickname: "UNKNOWN" },
    };
  } catch (err) {
    return {
      props: { errorCode: "UNKNOWN" },
    };
  }
};

export default Page;
