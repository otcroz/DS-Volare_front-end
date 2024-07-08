import React, { useState } from 'react';
import styled from 'styled-components';
import SceneItem from './SceneItem';

const Container = styled.div`
  padding: 20px;
`;

interface Script {
  scene: Scene[];
}

interface Scene {
  scene_num: number;
  location: string;
  time: string;
  content: Content[];
}

type Content = 
  | { type: '지문'; content: string }
  | { type: '대사'; character: string; action: string; dialog: string };

const SceneList: React.FC = () => {
    const [script1, setScript1] = useState<Script>({
        scene: [
          {
            scene_num: 1,
            location: "장소1",
            time: "낮",
            content: [
              { type: "지문", content: "지문내용1" },
              { type: "지문", content: "지문내용2" },
              { type: "대사", character: "인물1", action: "행위지문1", dialog: "대사 내용1" },
              { type: "대사", character: "인물2", action: "행위지문2", dialog: "대사 내용2" },
              { type: "대사", character: "인물2", action: "행위지문3", dialog: "대사 내용3" },
              { type: "대사", character: "인물1", action: "행위지문4", dialog: "대사 내용4" }
            ]
          },
          {
            scene_num: 2,
            location: "장소2",
            time: "밤",
            content: [
              { type: "지문", content: "지문내용1" },
              { type: "대사", character: "인물2", action: "행위지문1", dialog: "대사 내용1" },
              { type: "지문", content: "지문내용2" },
              { type: "지문", content: "지문내용3" },
              { type: "대사", character: "인물2", action: "행위지문2", dialog: "대사 내용2" },
              { type: "대사", character: "인물2", action: "행위지문1", dialog: "대사 내용1" },
              { type: "대사", character: "인물1", action: "행위지문1", dialog: "대사 내용1" },
              { type: "대사", character: "인물2", action: "행위지문1", dialog: "대사 내용1" }
            ]
          }
        ]
      });

  const [script, setScript] = useState<Script>({
        "scene": [
            {
                "content": [
                    {
                        "action": "(늑대 영감을 만났어요.)",
                        "character": "집",
                        "dialog": "얘야, 할머니가 어떠신지 가보렴. 아주 아프시다는 말을 들었지 뭐니.",
                        "type": "대사"
                    },
                    {
                      "action": "",
                      "character": "집",
                      "dialog": "할머니께 이 핫케이크 하나와 여기 이 버터 작은 병을 가져다 드리렴.",
                      "type": "대사"
                  },
                    { type: "지문", content: "지문내용~~" },
                    { type: "지문", content: "지문내용~~~" },
                    {
                        "action": "(그녀보고 어디 가는 길이냐고 물었어요.)",
                        "character": "엄마",
                        "dialog": "할머니 뵈러 가요.",
                        "type": "대사"
                    },
                    {
                        "action": "",
                        "character": "엄마",
                        "dialog": "이 핫케이크 하나와 버터 작은 병을 엄마가 갔다드리라 하셨거든요.",
                        "type": "대사"
                    },
                    {
                        "action": "(가능한 한 빨리 달리기 시작해 가장 빠른 지름길을 택했어요.)",
                        "character": "마을,",
                        "dialog": "할머니 집이 머니?  ",
                        "type": "대사"
                    },
                    {
                        "action": "(나무열매들을 줍기도 하고, 나비들을 쫓기도 하고, 만나는 귀여운 꽃들로 꽃다발을 만드느라 정신이 팔려 가장 먼 길을 택해 나아갔어요.)",
                        "character": "마을,",
                        "dialog": "오!  네,",
                        "type": "대사"
                    },
                    {
                        "action": "(핀을 끌어당기니 정말 문이 열렸어요.)",
                        "character": "모자",
                        "dialog": "저기 보이는 방앗간 너머에 있는 마을 첫 번째 집인걸요.",
                        "type": "대사"
                    },
                    {
                        "action": "(문을 닫고 할머니 침대 속으로 들어가 빨간 모자를 쓴 아이를 기다렸어요.)",
                        "character": "병",
                        "dialog": "그럼,",
                        "type": "대사"
                    },
                    {
                        "action": "(우선 화들짝 겁이 났어요.)",
                        "character": "병",
                        "dialog": "나도 늑대를 보러 가봐야겠는 걸.",
                        "type": "대사"
                    },
                    {
                      "action": "",
                      "character": "병",
                      "dialog": "난 이 쪽으로 갈 테니, 넌 저 쪽으로 가 보거라, 우리 중 누가 더 빨리 거기까지 가는지 보자꾸나.",
                      "type": "대사"
                    }                    
                ],
                "location": "길 위",
                "scene_num": 1,
                "time": "낮"
            },
            {
              "content": [
                  {
                      "action": "(가능한 한 가장 부드러운 목소리로 늑대에게 소리쳤어요.)",
                      "character": "병",
                      "dialog": "누구신지요?  ",
                      "type": "대사"
                  },
                  {
                      "action": "(핀을 끌어당기니 문이 열렸어요.)",
                      "character": "마을,",
                      "dialog": "당신의 손녀딸이에요, 빨간 모자를 쓴 아이요.  ",
                      "type": "대사"
                  },
                  {
                      "action": "(옷을 벗고 침대 속으로 들어갔어요.)",
                      "character": "마을,",
                      "dialog": "할머니께 핫케이크 하나랑, 버터 작은 병 하나를 가져다 드리라고, 엄마가 보내셨어요.  ",
                      "type": "대사"
                  },
                  {
                      "action": "",
                      "character": "핀",
                      "dialog": "핀을 끌어당기면, 빗장이 떨어질 게다.  ",
                      "type": "대사"
                  },
                  {
                      "action": "",
                      "character": "마을,",
                      "dialog": "거기 누구냐?  ",
                      "type": "대사"
                  },
                  {
                      "action": "",
                      "character": "늑대",
                      "dialog": "저 할머니 손녀딸, 빨간 모자를 쓴 아이에요, 엄마가 할머니께 핫케이크 하나랑 버터 작은 병 하나를 가져다드리라고 심부름 보내셨어요.  ",
                      "type": "대사"
                  },
                  {
                      "action": "",
                      "character": "집",
                      "dialog": "열쇠를 돌리면, 그럼 자물쇠가 돌아갈 게다.  ",
                      "type": "대사"
                  },
                  {
                      "action": "",
                      "character": "늑대",
                      "dialog": "케이크와 버터 병은 빵 저장통 속에 두고, 넌 우선 이리와 나와 함께 누우렴.  ",
                      "type": "대사"
                  },
                  {
                      "action": "",
                      "character": "모자",
                      "dialog": "할머니, 손이 어쩜 이리도 크세요!  ",
                      "type": "대사"
                  },
                  {
                      "action": "",
                      "character": "문",
                      "dialog": "그건 늑대를 더 잘 안아주기 위해서란다, 얘야.  ",
                      "type": "대사"
                  },
                  {
                      "action": "",
                      "character": "마을,",
                      "dialog": "할머니, 다리가 어쩜 이리도 크세요!  ",
                      "type": "대사"
                  },
                  {
                      "action": "",
                      "character": "문",
                      "dialog": "그건 더 잘 달리기 위해서란다, 얘야.  ",
                      "type": "대사"
                  },
                  {
                      "action": "",
                      "character": "병",
                      "dialog": "할머니, 귀가 어쩜 이리도 크세요!  ",
                      "type": "대사"
                  },
                  {
                      "action": "",
                      "character": "집",
                      "dialog": "더 잘 듣기 위해서지, 얘야.  ",
                      "type": "대사"
                  },
                  {
                      "action": "",
                      "character": "늑대",
                      "dialog": "할머니, 눈이 어쩜 이리도 크세요!  ",
                      "type": "대사"
                  },
                  {
                      "action": "",
                      "character": "병",
                      "dialog": "그건 더 잘 보기 위해서란다, 얘야.  ",
                      "type": "대사"
                  },
                  {
                      "action": "",
                      "character": "늑대",
                      "dialog": "할머니, 이빨들이 어쩜 이리도 크세요!  ",
                      "type": "대사"
                  },
                  {
                      "action": "",
                      "character": "문",
                      "dialog": "그건 늑대를 잡아먹기 위해서지.  ",
                      "type": "대사"
                  }
              ],
              "location": "할머니의 집",
              "scene_num": 2,
              "time": "낮"
          }
        ]
    
  });

  const handleContentChange = (sceneIndex: number, contentIndex: number, field: string, value: string) => {
    const newScript = { ...script };
    const content = newScript.scene[sceneIndex].content[contentIndex];

    if (content.type === '지문' && field === 'content') {
      content.content = value;
    } else if (content.type === '대사') {
      if (field === 'character') content.character = value;
      if (field === 'action') content.action = value;
      if (field === 'dialog') content.dialog = value;
    }

    setScript(newScript);
    console.log(script);
  };

  return (
    <Container>
      {script.scene.map((scene, sceneIndex) => (
        <SceneItem
          key={scene.scene_num}
          scene={scene}
          sceneIndex={sceneIndex}
          onContentChange={handleContentChange}
        />
      ))}
    </Container>
  );
};

export default SceneList;
