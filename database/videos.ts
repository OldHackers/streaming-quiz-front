import { Video } from '../entity/video';

export const videoData: { [key: string]: Video } = {
  // 류은석. 10주차 강의 Synchronization and deadlock avoidance
  1: {
    id: '1',
    title: 'Synchronization and deadlock avoidance',
    tutor: '류은석',
    url: 'https://comedu.s3.ap-northeast-2.amazonaws.com/squiz/1.mp4',
    quizzes: [
      {
        id: 1,
        question:
          '운영체제 강의에서 싱크로나이제이션과 데드락 어버이던스의 주요 개념에 대한 설명으로 올바른 것은 무엇입니까?',
        choiceList: [
          {
            id: 1,
            content:
              '싱크로나이제이션은 다양한 트레이드들이 한정된 자원에 접근할 때 순서를 조정하는 과정을 의미한다.',
            choiceNumber: 1,
            isAnswer: true,
          },
          {
            id: 2,
            content: '데드락 어버이던스는 프로세스 간의 무제한 자원 접근을 허용하는 것을 의미한다.',
            choiceNumber: 2,
            isAnswer: false,
          },
          {
            id: 3,
            content: '레이스 컨디션은 프로세스 간의 협력적인 자원 접근 방법을 나타낸다.',
            choiceNumber: 3,
            isAnswer: false,
          },
          {
            id: 4,
            content: '동기화는 프로세스 간 자원 공유 없이 독립적으로 실행되는 것을 지원한다.',
            choiceNumber: 4,
            isAnswer: false,
          },
        ],
        answer: 1,
        commentary:
          '강의에서 언급된 바에 따르면, 싱크로나이제이션은 여러 트레이드가 한정된 자원을 사용할 때 발생할 수 있는 동시 접근 문제를 차단하고, 순서를 조정하는 과정을 의미합니다. 이는 프로세스 또는 트레이드가 데이터를 안전하게 사용할 수 있게 하는 중요한 메커니즘입니다.',
        idx: 1,
      },
      {
        id: 2,
        question: "운영체제 강의에서 설명한 '크리티컬 섹션'과 관련하여 올바른 설명은 무엇입니까?",
        choiceList: [
          {
            id: 1,
            content: '크리티컬 섹션은 모든 프로세스가 동시에 접근할 수 있는 코드 영역이다.',
            choiceNumber: 1,
            isAnswer: false,
          },
          {
            id: 2,
            content:
              '크리티컬 섹션은 한 프로세스만이 접근할 수 있는 코드 영역으로, 동시 접근을 방지한다.',
            choiceNumber: 2,
            isAnswer: true,
          },
          {
            id: 3,
            content: '모든 프로세스는 크리티컬 섹션에서의 실행을 위해 특별한 권한이 필요하지 않다.',
            choiceNumber: 3,
            isAnswer: false,
          },
          {
            id: 4,
            content: '크리티컬 섹션은 프로세스 간의 데이터 공유 없이 독립적으로 실행되는 영역이다.',
            choiceNumber: 4,
            isAnswer: false,
          },
        ],
        answer: 2,
        commentary:
          '강의에서 언급된 바에 따르면, 크리티컬 섹션은 공유 자원에 접근하는 코드 영역으로, 한 시점에 한 프로세스만이 접근할 수 있어야 하며, 이를 통해 동시 접근 문제와 레이스 컨디션을 방지합니다.',
        idx: 2,
      },
      {
        id: 3,
        question:
          "운영체제 강의에서 언급된 '크리티컬 섹션(Critical Section)'과 관련하여 올바르지 않은 설명은 무엇입니까?",
        choiceList: [
          {
            id: 1,
            content: '크리티컬 섹션은 한 번에 한 프로세스만 접근할 수 있는 코드 영역이다.',
            choiceNumber: 1,
            isAnswer: false,
          },
          {
            id: 2,
            content: '크리티컬 섹션은 모든 프로세스가 자유롭게 접근할 수 있는 공유 영역이다.',
            choiceNumber: 2,
            isAnswer: true,
          },
          {
            id: 3,
            content: '크리티컬 섹션 내에서는 동시 접근을 방지하여 데이터 일관성을 유지한다.',
            choiceNumber: 3,
            isAnswer: false,
          },
          {
            id: 4,
            content: '크리티컬 섹션 관리는 시스템의 병렬 처리 성능에 영향을 줄 수 있다.',
            choiceNumber: 4,
            isAnswer: false,
          },
        ],
        answer: 2,
        commentary:
          '강의에서 설명된 바에 따르면, 크리티컬 섹션은 한 번에 한 프로세스만 접근할 수 있는 중요한 코드 영역입니다. 모든 프로세스가 자유롭게 접근할 수 있는 공유 영역이라는 설명은 크리티컬 섹션의 정의와 상반됩니다.',
        idx: 3,
      },
      {
        id: 1,
        question:
          "강의 내용에 따르면, '크리티컬 섹션(Critical Section)'에 대한 올바른 설명은 무엇입니까?",
        choiceList: [
          {
            id: 1,
            content: '크리티컬 섹션은 여러 프로세스가 동시에 접근할 수 있는 코드 영역이다.',
            choiceNumber: 1,
            isAnswer: false,
          },
          {
            id: 2,
            content: '크리티컬 섹션은 한 번에 한 프로세스만 접근할 수 있는 중요한 코드 영역이다.',
            choiceNumber: 2,
            isAnswer: true,
          },
          {
            id: 3,
            content: '크리티컬 섹션은 운영체제의 주 메모리 관리에 사용된다.',
            choiceNumber: 3,
            isAnswer: false,
          },
          {
            id: 4,
            content: '크리티컬 섹션은 프로그램의 실행에 필요하지 않은 부분이다.',
            choiceNumber: 4,
            isAnswer: false,
          },
        ],
        answer: 2,
        commentary:
          '강의에서 설명된 바에 따르면, 크리티컬 섹션은 한 번에 한 프로세스만 접근할 수 있는 중요한 코드 영역입니다. 여기서는 동시 접근을 방지하여 데이터의 일관성과 동기화를 유지합니다.',
        idx: 4,
      },
    ],
  },

  // 안성진 Chapter 6. Connecting Devices and Virtual LAN part1
  2: {
    id: '2',
    title: 'Chapter 6. Connecting Devices and Virtual LAN part1',
    tutor: '안성진',
    url: 'https://comedu.s3.ap-northeast-2.amazonaws.com/squiz/2.mp4',
    quizzes: [
      {
        id: 1,
        question: '6장 커넥팅 디바이스의 주제와 관련하여, 리피터의 주요 기능은 무엇입니까?',
        choiceList: [
          {
            id: 1,
            content: '신호의 에러를 검출하고 복구하는 것',
            choiceNumber: 1,
            isAnswer: false,
          },
          {
            id: 2,
            content: '디지털 신호를 깨끗하게 리제너레이트하는 것',
            choiceNumber: 2,
            isAnswer: true,
          },
          {
            id: 3,
            content: '데이터의 전송 속도를 증가시키는 것',
            choiceNumber: 3,
            isAnswer: false,
          },
          { id: 4, content: '신호의 전송 거리를 제한하는 것', choiceNumber: 4, isAnswer: false },
        ],
        answer: 2,
        commentary:
          '강의에서 언급된 바에 따르면, 리피터는 피지컬 레이어에 해당되며, 주요 기능은 들어온 신호를 깨끗하게 만들어 다시 전송하는 리제너레이트(rejuvenate)하는 것입니다. 에러 검출이나 속도 증가 등의 기능은 리피터의 주 기능이 아닙니다.',
        idx: 1,
      },

      {
        id: 2,
        question: '강의 내용에 따르면, L2 스위치의 주요 기능 중 하나는 무엇입니까?',
        choiceList: [
          { id: 5, content: '네트워크 트래픽을 증가시키는 것', choiceNumber: 1, isAnswer: false },
          {
            id: 6,
            content: '데이터 링크 레이어에서의 에러 컨트롤',
            choiceNumber: 2,
            isAnswer: true,
          },
          { id: 7, content: '신호의 전송 속도를 감소시키는 것', choiceNumber: 3, isAnswer: false },
          { id: 8, content: '장비간 물리적 연결을 제공하는 것', choiceNumber: 4, isAnswer: false },
        ],
        answer: 2,
        commentary:
          'L2 스위치는 데이터 링크 레이어에서의 에러 컨트롤 기능을 수행합니다. 이는 강의에서 언급된 바와 같이, L2 스위치의 중요한 역할 중 하나입니다.',
        idx: 2,
      },

      {
        id: 3,
        question: '강의에서 설명한 내용에 따르면, L3 스위치의 주요 기능은 무엇입니까?',
        choiceList: [
          { id: 9, content: '포트 간 트래픽 흐름을 제어하는 것', choiceNumber: 1, isAnswer: false },
          {
            id: 10,
            content: '다양한 네트워크 프로토콜을 연결하는 것',
            choiceNumber: 2,
            isAnswer: false,
          },
          {
            id: 11,
            content: 'IP 주소를 기반으로 패킷 경로를 설정하는 것',
            choiceNumber: 3,
            isAnswer: true,
          },
          { id: 12, content: '데이터 전송 속도를 증가시키는 것', choiceNumber: 4, isAnswer: false },
        ],
        answer: 3,
        commentary:
          'L3 스위치는 IP 주소를 기반으로 패킷의 경로를 설정하는 주요 기능을 가집니다. 이는 강의에서 언급된 L3 스위치의 중요한 역할 중 하나로, 네트워크 레이어에서의 라우팅 기능을 포함하고 있습니다.',
        idx: 3,
      },

      {
        id: 4,
        question: 'L4 스위치의 주요 기능은 무엇입니까?',
        choiceList: [
          {
            id: 13,
            content: '맥 어드레스를 기반으로 네트워크 트래픽을 제어하는 것',
            choiceNumber: 1,
            isAnswer: false,
          },
          {
            id: 14,
            content: 'IP 주소를 기반으로 패킷 경로를 설정하는 것',
            choiceNumber: 2,
            isAnswer: false,
          },
          {
            id: 15,
            content: '애플리케이션 구분을 통한 로드 밸런싱',
            choiceNumber: 3,
            isAnswer: true,
          },
          { id: 16, content: '데이터 속도 변환을 수행하는 것', choiceNumber: 4, isAnswer: false },
        ],
        answer: 3,
        commentary:
          'L4 스위치는 애플리케이션을 구분하여 트래픽을 관리하는 로드 밸런싱 기능을 제공합니다. 이 기능은 네트워크 트래픽의 효율적인 분배를 도모하며, 강의에서 이에 대한 중요성이 강조되었습니다.',
        idx: 4,
      },
    ],
  },

  //[소프트웨어설계] Ch1. C++ 시작
  3: {
    id: '3',
    title: '[소프트웨어설계] Ch1. C++ 시작',
    tutor: '박천수',
    url: 'https://comedu.s3.ap-northeast-2.amazonaws.com/squiz/3.mp4',
    quizzes: [
      {
        id: 1,
        question: '프로그래밍 언어의 역사에서 어셈블리어는 어떤 역할을 하였나요?',
        choiceList: [
          {
            id: 1,
            content: '하드웨어와 소프트웨어 간의 상호 보완을 위한 명령어로 사용됨',
            choiceNumber: 1,
            isAnswer: false,
          },
          {
            id: 2,
            content: '고급 언어에서 기계어로의 변환 도구로 사용됨',
            choiceNumber: 2,
            isAnswer: true,
          },
          {
            id: 3,
            content: '프로그램의 실행 속도를 향상시키기 위해 사용됨',
            choiceNumber: 3,
            isAnswer: false,
          },
          {
            id: 4,
            content: '기계어 코드를 작성하기 위한 인간 친화적인 언어로 사용됨',
            choiceNumber: 4,
            isAnswer: false,
          },
        ],
        answer: 2,
        commentary:
          '어셈블리어는 하드웨어와 소프트웨어 간의 상호 보완을 위한 명령어로 사용되었습니다.',
        idx: 1,
      },

      {
        id: 2,
        question: '시불불 언어의 주요 설계 목적 중 하나는 무엇인가요?',
        choiceList: [
          { id: 1, content: '표준 준수', choiceNumber: 1, isAnswer: true },
          { id: 2, content: '타입 에러 최소화', choiceNumber: 2, isAnswer: false },
          { id: 3, content: '함수 중복', choiceNumber: 3, isAnswer: false },
          { id: 4, content: '메모리 할당', choiceNumber: 4, isAnswer: false },
        ],
        answer: 1,
        commentary:
          "올바른 답은 '표준 준수'입니다. 강의에서 언급한 대로, 표준을 따르면 코드가 어떤 플랫폼이나 표준 시플 컴파일러에서도 동일한 동작을 하게 됩니다.",
        idx: 2,
      },

      {
        id: 3,
        question: '객체 지향 프로그래밍에서 상속의 특성은 무엇인가요?',
        choiceList: [
          { id: 1, content: '캡슐화', choiceNumber: 1, isAnswer: false },
          { id: 2, content: '다양성', choiceNumber: 2, isAnswer: false },
          { id: 3, content: '상속성', choiceNumber: 3, isAnswer: true },
          { id: 4, content: '오버로딩', choiceNumber: 4, isAnswer: false },
        ],
        answer: 3,
        commentary:
          '상속성은 객체가 자식 클래스의 멤버와 부모 클래스에서 선언된 멤버들을 가지고 탄생하는 특성입니다. 이를 통해 부모 클래스의 기능을 자식 클래스가 재사용하고 확장할 수 있습니다.',
        idx: 3,
      },

      {
        id: 4,
        question: '컴파일과 링킹의 차이점은 무엇인가요?',
        choiceList: [
          {
            id: 1,
            content:
              '컴파일은 소스 코드를 기계어로 변환하는 과정이며, 링킹은 목적 파일들을 합쳐 실행 파일을 생성하는 과정입니다.',
            choiceNumber: 1,
            isAnswer: true,
          },
          {
            id: 2,
            content:
              '컴파일은 목적 파일들을 합쳐 실행 파일을 생성하는 과정이며, 링킹은 소스 코드를 기계어로 변환하는 과정입니다.',
            choiceNumber: 2,
            isAnswer: false,
          },
          {
            id: 3,
            content: '컴파일과 링킹은 동일한 과정이며, 목적 파일을 생성합니다.',
            choiceNumber: 3,
            isAnswer: false,
          },
          {
            id: 4,
            content: '컴파일과 링킹은 모두 소스 코드를 실행 파일로 변환하는 과정입니다.',
            choiceNumber: 4,
            isAnswer: false,
          },
        ],
        answer: 1,
        commentary:
          '컴파일은 소스 코드를 기계어로 변환하는 과정이며, 링킹은 목적 파일들을 합쳐 실행 파일을 생성하는 과정입니다.',
        idx: 4,
      },
    ],
  },
};
