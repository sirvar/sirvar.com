import type { NextApiRequest, NextApiResponse } from 'next';

import { setDistance } from '@/services/travel';

type Response = {
  success: boolean;
  error?: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Response>,
) {
  if (req.method === `POST`) {
    const { authorization } = req.headers;
    const { distance } = JSON.parse(JSON.stringify(req.body));

    if (authorization !== process.env.API_SECRET) {
      res.status(401).end();
      return;
    }

    if (!distance) {
      res.status(400).end();
      return;
    }

    try {
      await setDistance(distance);
      console.log(`Distance Updated:`, distance);
      res.status(200).json({ success: true });
    } catch (err) {
      console.log(`Failed to update distance:`, err);
      res.status(500).json({ success: false, error: err });
    }
  }
}
