import Head from 'next/head';
import { FormEvent, useState } from 'react';

export default function Home() {
  const [query, setQuery] = useState<string>('');
  const [chatMessages, setChatMessages] = useState<string[]>([]);

  const handleQuerySubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    // POST 요청을 보내고 스트리밍 응답을 처리합니다.
    const response = await fetch('/api/openaiChat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query, context: '' }),
    });

    if (response.body) {
      const reader = response.body.pipeThrough(new TextDecoderStream()).getReader();

      // 데이터 스트리밍을 읽고 처리합니다.
      const readStream = async () => {
        const { value, done } = await reader.read();
        if (done) {
          return;
        }

        // 새로운 메시지를 상태에 추가합니다.
        setChatMessages((prev) => [...prev, value]);

        // 다음 데이터 조각을 계속 읽습니다.
        readStream();
      };

      readStream();
    }

    setQuery(''); // 입력 필드 초기화
  };

  return (
    <div>
      <Head>
        <title>OpenAI Chatbot</title>
      </Head>
      <main>
        <h1>OpenAI Chatbot</h1>
        <form onSubmit={handleQuerySubmit}>
          <textarea
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="질문을 입력하세요"
          />
          <button type="submit">질문하기</button>
        </form>
        <div>
          {chatMessages.map((msg, index) => (
            <p key={index}>{msg}</p>
          ))}
        </div>
      </main>
    </div>
  );
}
