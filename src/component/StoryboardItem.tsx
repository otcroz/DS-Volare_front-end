import React from 'react';

type props = {
  name: string;
};

const StoryboardItem = ({ name }: props) => (
  <>
    <div>Hello, {name}</div>
  </>
);

export default StoryboardItem;
