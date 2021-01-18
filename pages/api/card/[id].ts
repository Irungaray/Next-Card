import { NextApiRequest, NextApiResponse } from "next";

import DB from '@database';

const allCards = async (request: NextApiRequest, response: NextApiResponse) => {
  const db = new DB();
  const id = request.query.id.toString();
  const card = await db.getById(id);

  response.status(200).json(card);
};

export default allCards;