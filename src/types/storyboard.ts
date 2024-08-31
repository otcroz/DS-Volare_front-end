
export type Cut = {
  cut_num: number;
  // angleCam: string;
  cut_image: string;
  text: string;
};

export type StoryboardScene = {
  scene_num: number;
  summary: string;
  location: string;
  content?: Cut[];
  cutCount?: number;
}

export type Storyboard = {
  scene: StoryboardScene[];
}
