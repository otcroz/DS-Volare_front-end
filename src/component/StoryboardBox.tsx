import React from 'react';

type props = {
  name: string;
};

const StoryboardBox = ({ name }: props) => (
  <>
    <div>Hello, {name}</div>
  </>
);

export default StoryboardBox;
