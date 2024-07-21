import { useState } from 'react';
import {
  ChatFormContainer,
  ChatInputArea,
  SubmitButton,
} from '../styles/chatbotStyles';

interface MessageFormProps {
  onSendMessage: (message: string) => void;
  isTyping: boolean;
}

const ChatForm = ({ onSendMessage, isTyping }: MessageFormProps) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (message.trim() && !isTyping) {
      onSendMessage(message.trim());
      setMessage('');
    }
  };

  return (
    <ChatFormContainer onSubmit={handleSubmit}>
      <ChatInputArea
        value={message}
        onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
          setMessage(event.target.value)
        }
      />
      <SubmitButton type="submit" disabled={!message.trim() || isTyping}>
        Send
      </SubmitButton>
    </ChatFormContainer>
  );
};

export default ChatForm;
