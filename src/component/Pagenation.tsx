import React from 'react';

type props = {
  name: string;
};

const Pagenation = ({ name }: props) => (
  <>
    <div>Hello, {name}</div>
  </>
);

export default Pagenation;
