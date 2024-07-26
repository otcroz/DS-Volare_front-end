import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';

const SceneContainer = styled.div`
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.beige};
  border-radius: 5px;
`;

const SceneHeader = styled.div`
  font-weight: bold;
  margin-bottom: 10px;
`;

const ContentItem = styled.div<{ type: string }>`
  margin-bottom: 10px;
  border: 1px solid ${({ theme }) => theme.colors.beige};
  border-radius: 5px;
`;

const ActionDialogInput = styled.input`
  background: transparent;
  &:focus {
    outline: none;
  }
`;

const Input = styled.input<{ field: string }>`
  width: ${({ field }) => {
    switch (field) {
      case 'character':
        return '4em';
      case 'direction':
        return '100%';
      default:
        return 'auto';
    }
  }};
  font-weight: ${({ field }) => (field === 'character' ? 'bold' : 'normal')};
  min-width: 5ch; /* 최소 너비 설정 */
  max-width: 100%; /* 최대 너비 설정 */
  padding: 5px;
  margin-bottom: 5px;
  border: none;
  background: transparent;
  &:focus {
    outline: none;
  }
`;

interface Content {
  type: '지문' | '대사';
  content?: string;
  character?: string;
  action?: string;
  dialog?: string;
}

interface Scene {
  scene_num: number;
  location: string;
  time: string;
  content: Content[];
}

interface SceneItemProps {
  scene: Scene;
  sceneIndex: number;
  onContentChange: (
    sceneIndex: number,
    contentIndex: number,
    field: string,
    value: string
  ) => void;
}

const calculateWidth = (str?: string): number => {
  return new TextEncoder().encode(str!).length * 0.625;
};

const SceneItem: React.FC<SceneItemProps> = ({
  scene,
  sceneIndex,
  onContentChange,
}) => {
  const refActionDialog = useRef<(HTMLInputElement | null)[]>([]);

  // 초기 설정
  useEffect(() => {
    scene.content.forEach((content, index) => {
      if (refActionDialog.current[index]) {
        const value = content.action
          ? `(${content.action}) ${content.dialog}`
          : content.dialog;
        const width = calculateWidth(value);
        refActionDialog.current[index]!.style.width = `${width}ch`;
      }
    });
  }, [scene]);

  const handleInputAllChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    contentIndex: number
  ) => {
    const value = e.target.value;
    const width = calculateWidth(value);
    refActionDialog.current[contentIndex]!.style.width = `${width}ch`;

    let action = '';
    let dialog = '';
    const regex = /\(([^)]+)\)(.*)/;
    const match = value.match(regex);

    if (match) {
      action = `(${match[1]})`;
      dialog = match[2].replace(/^\s+/, '');
    } else {
      action = '';
      dialog = value;
    }
    onContentChange(sceneIndex, contentIndex, 'action', action);
    onContentChange(sceneIndex, contentIndex, 'dialog', dialog);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    contentIndex: number,
    field: string
  ) => {
    const value = e.target.value;
    onContentChange(sceneIndex, contentIndex, field, value);

    if (e.target) {
      const width = calculateWidth(value);
      e.target.style.width = `${width}ch`;
    }
  };

  return (
    <SceneContainer>
      <SceneHeader>
        #{scene.scene_num}. {scene.location} ({scene.time})
      </SceneHeader>
      {scene.content.map((content, contentIndex) => (
        <ContentItem key={contentIndex} type={content.type}>
          {content.type === '지문' ? (
            <Input
              type="text"
              value={content.content || ''}
              onChange={(e) => handleInputChange(e, contentIndex, 'content')}
              field="direction"
            />
          ) : (
            <>
              <Input
                type="text"
                value={content.character || ''}
                onChange={(e) =>
                  handleInputChange(e, contentIndex, 'character')
                }
                field="character"
              />
              <ActionDialogInput
                type="text"
                ref={(el) => (refActionDialog.current[contentIndex] = el)}
                onChange={(e) => handleInputAllChange(e, contentIndex)}
                value={
                  content.action
                    ? `${content.action} ${content.dialog}`
                    : content.dialog
                }
              />
              {/* 확인용 */}
              dialog: {content.dialog}
              <br />
              action: {content.action}
            </>
          )}
        </ContentItem>
      ))}
    </SceneContainer>
  );
};

export default SceneItem;
