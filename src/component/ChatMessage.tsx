import { Message } from '../types';
import Typing from 'react-typing-animation';
import {
  ChatbotIcon,
  ChatbotMessage,
  ChatbotMessageDateTime,
  MessageContainer,
  UserMessage,
  UserMessageDateTime,
} from '../styles/chatbotStyles';

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

export default ChatMessage;
