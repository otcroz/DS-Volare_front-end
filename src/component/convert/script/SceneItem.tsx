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

const calculateWidth = (str: string): number => {
  return new TextEncoder().encode(str).length * 0.625;
};

const SceneItem: React.FC<SceneItemProps> = ({
  scene,
  sceneIndex,
  onContentChange,
}) => {
  // 함수 실행 속도 때문에 Ref를 유형별로 나누어 사용

  const actionRefs = useRef<(HTMLInputElement | null)[]>([]);
  const dialogRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    scene.content.forEach((content, index) => {
      if (actionRefs.current[index]) {
        const value = content.action || '';
        const width = calculateWidth(value);
        actionRefs.current[index]!.style.width = `${width}ch`;
      }
      if (dialogRefs.current[index]) {
        const value = content.dialog || '';
        const width = calculateWidth(value);
        dialogRefs.current[index]!.style.width = `${width}ch`;
      }
    });
  }, [scene]);

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
              {content.action && (
                <Input
                  type="text"
                  value={content.action || ''}
                  onChange={(e) => handleInputChange(e, contentIndex, 'action')}
                  field="action"
                  ref={(el) => (actionRefs.current[contentIndex] = el)}
                />
              )}
              {content.dialog && (
                <Input
                  type="text"
                  value={content.dialog || ''}
                  onChange={(e) => handleInputChange(e, contentIndex, 'dialog')}
                  field="dialog"
                  ref={(el) => (dialogRefs.current[contentIndex] = el)}
                />
              )}
            </>
          )}
        </ContentItem>
      ))}
    </SceneContainer>
  );
};

export default SceneItem;
