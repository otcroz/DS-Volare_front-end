// chatbot
export interface Message {
  text: string;
  isUser: boolean;
  isTyping?: boolean;
  id?: number;
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
