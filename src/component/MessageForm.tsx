import { useState } from 'react';
import {
  MessageFormContainer,
  ChatInputArea,
  SubmitButton,
} from '../styles/chatbotStyles';

interface MessageFormProps {
  onSendMessage: (message: string) => void;
  isTyping: boolean;
}

const MessageForm = ({ onSendMessage, isTyping }: MessageFormProps) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (message.trim() && !isTyping) {
      onSendMessage(message.trim());
      setMessage('');
    }
  };

  return (
    <MessageFormContainer onSubmit={handleSubmit}>
      <ChatInputArea
        value={message}
        onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
          setMessage(event.target.value)
        }
      />
      <SubmitButton type="submit" disabled={!message.trim() || isTyping}>
        Send
      </SubmitButton>
    </MessageFormContainer>
  );
};

export default MessageForm;
