export interface Message {
  text: string;
  isUser: boolean;
  isTyping?: boolean;
  id?: number;
}
