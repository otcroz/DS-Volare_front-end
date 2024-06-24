import React from 'react';

type props = {
  name: string;
};

const ConvertIndicator = ({ name }: props) => (
  <>
    <div>Hello, {name}</div>
  </>
);

export default ConvertIndicator;
