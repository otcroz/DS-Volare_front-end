import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { Scene } from '../../../types';

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
  const actionDialogRef = useRef<(HTMLInputElement | null)[]>([]);

  // 초기 설정
  useEffect(() => {
    let value = '';
    scene.content.forEach((content, index) => {
      if (actionDialogRef.current[index]) {
        if (content.type === '지문') {
          value = content.content!;
        } else {
          // content.type == '대사'
          value = content.action
            ? `(${content.action}) ${content.dialog}`
            : content.dialog || '';
        }

        const width = calculateWidth(value);
        actionDialogRef.current[index]!.style.width = `${width}ch`;
      }
    });
  }, [scene]);

  const handleInputAllChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    contentIndex: number
  ) => {
    const value = e.target.value;
    const width = calculateWidth(value);
    actionDialogRef.current[contentIndex]!.style.width = `${width}ch`;

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

    // if (e.target) {
    //   const width = calculateWidth(value);
    //   e.target.style.width = `${width}ch`;
    // }
  };

  return (
    <SceneContainer>
      <SceneHeader>
        #{scene.scene_num}. {scene.location} ({scene.time})
      </SceneHeader>
      {scene.content.map((content, contentIndex) => (
        <ContentItem key={contentIndex} type={content.type}>
          {content.type === '지문' ? (
            <DirectionInput
              type="text"
              value={content.content || ''}
              onChange={(e) => handleInputChange(e, contentIndex, 'content')}
              field="direction"
            />
          ) : (
            <>
              <CharacterInput
                type="text"
                value={content.character || ''}
                onChange={(e) =>
                  handleInputChange(e, contentIndex, 'character')
                }
                field="character"
              />
              <ActionDialogInput
                type="text"
                ref={(el) => (actionDialogRef.current[contentIndex] = el)}
                onChange={(e) => handleInputAllChange(e, contentIndex)}
                value={
                  content.action
                    ? `${content.action} ${content.dialog}`
                    : content.dialog
                }
              />
            </>
          )}
        </ContentItem>
      ))}
    </SceneContainer>
  );
};

export default SceneItem;

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
  border-radius: 5px;
`;

const DirectionInput = styled.input<{ field: string }>`
  width: 100%;
  margin-bottom: 5px;
  font-size: 1em;
`;

const CharacterInput = styled.input<{ field: string }>`
  width: 5em;
  font-weight: bold;
  margin-bottom: 5px;
  font-size: 1em;
`;

const ActionDialogInput = styled.input`
  max-width: 25rem;
  margin-bottom: 5px;
  font-size: 1em;
`;
