import nexonAxios from "utils/nexonAxios";

// types
import type { NextApiRequest, NextApiResponse } from "next";
import type { GetIdResponseData } from "types/open-api";

type Request = Omit<NextApiRequest, "query"> & {
  query: {
    nickname: string;
  };
};

export default async (req: Request, res: NextApiResponse) => {
  if (req.method === "GET") {
    const { nickname } = req.query;

    const response = await nexonAxios.get<GetIdResponseData>(
      `/id?character_name=${nickname}`
    );

    res.status(200).json(response.data);
  }
};
