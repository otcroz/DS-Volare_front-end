// chatbot
export interface Message {
  message: string;
  messageType: string;  // "QUESTION" | "GPT"
  messageId: string;
  createdAt: string;
  isTyping?: boolean;
}

// script
export interface Scene {
  scene_num: number;
  location: string;
  time?: string;
  content: Content[];
}

export interface Script {
  scene: Scene[];
}

export type Content =
  | { type: '지문'; content: string | undefined }
  | { type: '대사'; character: string; action: string | undefined; dialog: string | undefined };
