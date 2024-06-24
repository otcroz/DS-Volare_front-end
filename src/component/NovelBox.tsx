import React from 'react';

type props = {
  name: string;
};

const NovelBox = ({ name }: props) => (
  <>
    <div>Hello, {name}</div>
  </>
);

export default NovelBox;
