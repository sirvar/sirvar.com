import type { NextApiRequest, NextApiResponse } from 'next';

import { setLocation } from '@/services/location';

type Request = {
  location: string;
  secret: string;
};

type Response = {
  success: boolean;
  error?: any;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Response>,
) {
  if (req.method === `POST`) {
    const { location, secret } = req.body as Request;

    if (secret !== process.env.API_SECRET) {
      res.status(401).end();
      return;
    }

    try {
      setLocation(location);
      res.status(200).json({ success: true });
    } catch (err) {
      res.status(500).json({ success: false, error: err });
    }
  }
}
