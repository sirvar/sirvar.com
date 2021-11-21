import type { NextApiRequest, NextApiResponse } from 'next';

import { setLocation } from '@/services/location';

type Request = {
  location: string;
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
    const { location } = req.body as Request;

    try {
      setLocation(location);
      res.status(200).json({ success: true });
    } catch (err) {
      res.status(500).json({ success: false, error: err });
    }
  }
}
