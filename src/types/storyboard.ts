
export type Cut = {
  cutNum: number;
  // angleCam: string;
  cutImage: string;
  text: string
};

export type StoryboardScene = {
  sceneNum: number;
  summary: string;
  location: string;
  content?: Cut[];
  cutCount?: number;
}

export type Storyboard = {
  scene: StoryboardScene[];
}
