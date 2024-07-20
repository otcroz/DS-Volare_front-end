import React, { useState, useEffect, useRef } from 'react';
import Typing from 'react-typing-animation';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

type Props = {
  chatId?: string; // 추후 변경
};

interface Message {
  text: string;
  isUser: boolean;
  isTyping?: boolean;
  id?: number;
}

const ChatbotBox = ({ chatId }: Props) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentTypingId, setCurrentTypingId] = useState<number | null>(null);
  const [isTyping, setIsTyping] = useState(false);
  const messageListRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(true);

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

  // 챗봇이 타이핑 시작 시 isTyping을 true로 설정
  useEffect(() => {
    setIsTyping(currentTypingId !== null);
  }, [currentTypingId]);

  // 챗봇 drawer toggle button 애니메이션
  const buttonVariants = {
    init: {
      x: 0,
    },
    end: (isOpen: boolean) => ({
      x: isOpen ? -250 : 0,
    }),
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <ChatContainer
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 200, opacity: 0 }}
            transition={{ type: 'tween' }}
          >
            <ChatBox>
              <Title>Chat</Title>
              <MessageList
                messages={messages}
                currentTypingId={currentTypingId}
                onEndTyping={handleEndTyping}
                ref={messageListRef}
              />
              <MessageForm
                onSendMessage={handleSendMessage}
                isTyping={isTyping}
              />
            </ChatBox>
          </ChatContainer>
        )}
      </AnimatePresence>

      <ChatbotButton
        initial="init"
        animate="end"
        variants={buttonVariants}
        custom={isOpen}
        whileTap={{ scale: 0.9 }}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        transition={{ type: 'tween' }}
      />
    </>
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

const ChatMessage = ({
  text,
  isUser,
  isTyping,
  id,
  onEndTyping,
  currentTypingId,
}: ChatMessageProps) => {
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
                startDelay={30}
                speed={50}
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
  isTyping: boolean;
}

const MessageForm = ({ onSendMessage, isTyping }: MessageFormProps) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (message.trim() && !isTyping) {
      onSendMessage(message);
      setMessage('');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <ChatInputArea
        value={message}
        onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
          setMessage(event.target.value)
        }
      />
      <Button type="submit" disabled={!message.trim() || isTyping}>
        Send
      </Button>
    </Form>
  );
};

// Styled Components

const ChatbotButton = styled(motion.button)`
  position: absolute;
  right: 5rem;
  bottom: 1rem;
  width: 4rem;
  height: 4rem;
  border-radius: 2rem;
  background-color: ${({ theme }) => theme.colors.orange};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const ChatContainer = styled(motion.div)`
  position: absolute;
  z-index: 1;
  right: 0;
  width: 20rem;
  height: 100%;
  display: flex;
  background: rgba(149, 155, 136, 0.6);

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

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

export default ChatbotBox;
