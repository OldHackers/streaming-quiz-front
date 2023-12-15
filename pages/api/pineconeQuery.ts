// pages/api/pineconeQuery.ts
import type { NextApiRequest, NextApiResponse } from 'next';

import pinecone from '../../utils/pinecone';

// 요청 및 응답 타입 정의
interface RequestBody {
  topK: number;
  vector: number[];
  title: string;
}

interface QueryResult {
  title: string;
  text: string;
  score: number;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<QueryResult[] | { error: string }>,
) {
  if (req.method === 'POST') {
    const { topK, vector, title } = req.body as RequestBody;

    const index = pinecone.index('lecture');

    try {
      const result = await index.query({
        topK,
        vector,
        filter: { title: { $eq: title } },
      });
      res.status(200).json([
        {
          // use matches
          title: '123',
          text: '123',
          score: 0.5,
        },
      ]);
    } catch (error) {
      console.error('Pinecone query error:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
