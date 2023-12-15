import type { NextApiRequest, NextApiResponse } from 'next';

import openai from '../../utils/openai';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { text } = req.body;

    try {
      const result = await openai.embeddings.create({
        model: 'text-embedding-ada-002',
        input: text,
      });

      res.status(200).json({ data: result.data[0].embedding });
    } catch (error) {
      console.error('OpenAI embedding error:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
