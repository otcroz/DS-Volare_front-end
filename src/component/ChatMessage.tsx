import { Message } from '../types';
import { TypeAnimation } from 'react-type-animation';
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
              <TypeAnimation
                sequence={[
                  text,
                  () => {
                    id && onEndTyping(id);
                  },
                ]}
                wrapper="span"
                speed={50}
                repeat={1}
                cursor={false}
              />
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
