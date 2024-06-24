import React from 'react';

type props = {
  name: string;
};

const ScriptBox = ({ name }: props) => (
  <>
    <div>Hello, {name}</div>
  </>
);

export default ScriptBox;
