import React, { useState, useEffect, useRef } from 'react';
import Typing from 'react-typing-animation';
import styled from 'styled-components';

type Props = {
  name: string;
};

interface Message {
  text: string;
  isUser: boolean;
  isTyping?: boolean;
  id?: number;
}

const ChatbotBox: React.FC<Props> = ({ name }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentTypingId, setCurrentTypingId] = useState<number | null>(null);
  const messageListRef = useRef<HTMLDivElement>(null);

  // 메시지 전송 함수
  const handleSendMessage = (message: string) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: message, isUser: true },
      {
        text: `${message}`,
        isUser: false,
        isTyping: true,
        id: Date.now(),
      },
    ]);
  };

  // 타이핑이 끝났을 때(라이브러리 컴포넌트에서 판정함) 호출되는 함수
  const handleEndTyping = (id: number) => {
    setMessages((prevMessages) =>
      prevMessages.map((msg) =>
        msg.id === id ? { ...msg, isTyping: false } : msg
      )
    );
    setCurrentTypingId(null);
  };

  // 현재 타이핑 중인 메시지 설정
  useEffect(() => {
    if (currentTypingId === null) {
      const nextTypingMessage = messages.find(
        (msg) => !msg.isUser && msg.isTyping
      );
      if (nextTypingMessage && nextTypingMessage.id) {
        setCurrentTypingId(nextTypingMessage.id);
      }
    }
  }, [messages, currentTypingId]);

  // 새 메시지 전송 시 스크롤을 최하단으로 설정
  useEffect(() => {
    if (messageListRef.current) {
      messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <ChatContainer>
      <ChatBox>
        <Title>Chat</Title>
        <MessageList
          messages={messages}
          currentTypingId={currentTypingId}
          onEndTyping={handleEndTyping}
          ref={messageListRef}
        />
        <MessageForm onSendMessage={handleSendMessage} />
      </ChatBox>
    </ChatContainer>
  );
};

interface MessageListProps {
  messages: Message[];
  currentTypingId: number | null;
  onEndTyping: (id: number) => void;
}

const MessageList = React.forwardRef<HTMLDivElement, MessageListProps>(
  ({ messages, currentTypingId, onEndTyping }, ref) => (
    <MessageListContainer ref={ref}>
      {messages.map((message, index) => (
        <ChatMessage
          key={index}
          {...message}
          onEndTyping={onEndTyping}
          currentTypingId={currentTypingId}
        />
      ))}
    </MessageListContainer>
  )
);

interface ChatMessageProps extends Message {
  onEndTyping: (id: number) => void;
  currentTypingId: number | null;
}

const ChatMessage: React.FC<ChatMessageProps> = ({
  text,
  isUser,
  isTyping,
  id,
  onEndTyping,
  currentTypingId,
}) => {
  return (
    <>
      {isUser ? (
        <MessageContainer>
          <UserMessage>
            <p>{text}</p>
          </UserMessage>
          <UserMessageDateTime>2024.xx.xx</UserMessageDateTime>
        </MessageContainer>
      ) : (
        <MessageContainer>
          <ChatbotIcon></ChatbotIcon>
          <ChatbotMessage>
            {isTyping && id && currentTypingId === id ? (
              <Typing
                speed={100}
                onFinishedTyping={() => id && onEndTyping(id)}
              >
                <p>{text}</p>
              </Typing>
            ) : (
              <p>{text}</p>
            )}
          </ChatbotMessage>
          <ChatbotMessageDateTime>2024.xx.xx</ChatbotMessageDateTime>
        </MessageContainer>
      )}
    </>
  );
};

interface MessageFormProps {
  onSendMessage: (message: string) => void;
}

const MessageForm: React.FC<MessageFormProps> = ({ onSendMessage }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSendMessage(message);
    setMessage('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <ChatInputArea
        value={message}
        onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
          setMessage(event.target.value)
        }
      />
      <Button type="submit">Send</Button>
    </Form>
  );
};

// Styled Components
const ChatContainer = styled.div`
  position: fixed;
  right: 0;
  width: 30vw;
  height: 100%;
  display: flex;
  background: rgba(149, 155, 136, 0.6);

  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
`;

const ChatBox = styled.div`
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  text-align: center;
  padding: 20px;
  margin: 0;
  color: white;
  height: 1.25rem;
`;

const MessageListContainer = styled.div`
  width: 100%;
  padding: 20px;
  flex-grow: 1;
  overflow-y: auto;
`;

const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const BaseMessage = styled.div`
  max-width: 80%;
  padding: 10px 15px;
  white-space: pre-wrap;
  overflow-wrap: break-word;
`;

const UserMessage = styled(BaseMessage)`
  align-self: flex-end;
  background: ${({ theme }) => theme.colors.darkBrown};
  color: #fff;
  border-radius: 16px 16px 0 16px;
  margin-left: auto;
`;

const UserMessageDateTime = styled.div`
  margin-top: 0.4rem;
  font-size: 0.8rem;
  color: white;
  margin-left: auto;
`;

const ChatbotMessage = styled(BaseMessage)`
  align-self: flex-start;
  background: #f0f0f0;
  color: #333;
  border-radius: 16px 16px 16px 0;
`;

const ChatbotMessageDateTime = styled.div`
  margin-top: 0.4rem;
  font-size: 0.8rem;
  color: white;
`;

const ChatbotIcon = styled.div`
  width: 2rem;
  height: 2rem;
  background-color: ${({ theme }) => theme.colors.orange};
  border-radius: 1rem;
  margin-bottom: 0.5rem;
`;

const Form = styled.form`
  border-top: 1px solid #f0f0f0;
  padding: 20px;
  bottom: 0;
  display: flex;
  align-items: center;
`;

const ChatInputArea = styled.textarea`
  flex-grow: 1;
  padding: 10px;
  border-radius: 16px;
  border: 1px solid #ccc;
  margin-right: 10px;

  resize: none;
  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  border-radius: 16px;
  border: none;
  background-color: ${({ theme }) => theme.colors.orange};
  color: #fff;
  cursor: pointer;
`;

export default ChatbotBox;
