import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import CharacterChip from './CharacterChip';

interface Props {
  characterList: string[];
}

const CharacterChipList = ({ characterList }: Props) => {
  const [chips, setChips] = useState<string[]>(characterList);
  const [inputVisible, setInputVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const [addVisible, setAddVisible] = useState(true);

  const addChip = () => {
    if (inputValue) {
      setChips([...chips, inputValue]);
      setInputValue('');
      setInputVisible(false);
      setAddVisible(true);
    }
  };

  const removeChip = (index: number) => {
    const newChips = chips.filter((_, i) => i !== index);
    setChips(newChips);
  };

  const handleAddButtonClick = () => {
    setInputVisible(!inputVisible);
    setAddVisible(!addVisible);
    setTimeout(() => {
      inputRef.current?.focus();
    }, 0);
  };

  const handleOnblur = ()=> {
    if (inputValue) {
      addChip();
    }
    else {
      setInputVisible(false);
      setAddVisible(true);
    }
  };

  return (
    <ChipContainer>
      {chips.map((chip, index) => (
        <CharacterChip key={index} label={chip} onDelete={() => removeChip(index)} />
      ))}
      {inputVisible && (
        <ChipInput
          ref={inputRef}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && addChip()}
          onBlur={handleOnblur}
        />
      )}
      {addVisible && (
        <AddButton onClick={handleAddButtonClick}>+</AddButton>
      )}
    </ChipContainer>
  );
};

export default CharacterChipList;


const ChipContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

const ChipInput = styled.input`
  border: none;
  border-radius: 2rem;
  padding: 0.75rem 1.5rem;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  margin-right: 0.625rem;
  margin-bottom: 1rem;
  font-size: 1.25rem;
  font-family: 'BookkMyungjo';
  width: 5rem;
  &:focus {
    outline: 3px solid ${({ theme }) => theme.colors.orange};
  }
`;

const AddButton = styled.button`
  background: ${({ theme }) => theme.colors.orange};
  border: none;
  border-radius: 2rem;
  width: 3rem;
  height: 3rem;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  color: ${({ theme })=> theme.colors.darkBrown};
  font-size: 1.5rem;
  font-weight: bold;
  padding: 0;
  margin-bottom: 1rem;
  &:focus {
    outline: none;
  }
`;
