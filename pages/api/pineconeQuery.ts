// pages/api/pineconeQuery.ts
import type { NextApiRequest, NextApiResponse } from 'next';

import pinecone from '../../utils/pinecone';

// 요청 및 응답 타입 정의
interface RequestBody {
  topK: number;
  vector: number[];
  lectureId: number;
}

interface QueryResult {
  text: string;
  score: number;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<QueryResult[] | { error: string }>,
) {
  if (req.method === 'POST') {
    const { topK, vector, lectureId } = req.body as RequestBody;

    // console.log(`lectureId: ${lectureId}`);

    const index = pinecone.index('lecture');

    try {
      const result = await index.query({
        topK,
        vector,
        // filter: { lectureId: { $eq: lectureId } },
        includeMetadata: true,
      });

      console.log(`result: ${JSON.stringify(result)}`);

      const ret = result.matches.map((match) => ({
        text: match.metadata?.originalText,
        score: match.score,
      }));

      res.status(200).json(ret as QueryResult[]);
    } catch (error) {
      console.error('Pinecone query error:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
