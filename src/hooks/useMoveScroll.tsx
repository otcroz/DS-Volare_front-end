import { useRef } from 'react';

// ref 위치로 scroll하는 use hook
export const useMoveScroll = (name: string) => {
  const element = useRef<HTMLDivElement>(null);
  const onMoveElement = () => {
    console.log(element);
    element.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
  };

  return { element, name, onMoveElement };
};
