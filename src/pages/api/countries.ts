import type { NextApiRequest, NextApiResponse } from 'next';

import { setCountries } from '@/services/travel';

type Response = {
  success: boolean;
  error?: any;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Response>,
) {
  if (req.method === `POST`) {
    const { authorization } = req.headers;
    const { country } = JSON.parse(JSON.stringify(req.body));

    if (authorization !== process.env.API_SECRET) {
      res.status(401).end();
      return;
    }

    if (!country) {
      res.status(400).end();
      return;
    }

    try {
      setCountries(country);
      console.log(`Countries Updated:`, country);
      res.status(200).json({ success: true });
    } catch (err) {
      res.status(500).json({ success: false, error: err });
    }
  }
}
