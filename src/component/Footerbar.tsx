import React from 'react';

type props = {
  name: string;
};

const FooterBar = ({ name }: props) => (
  <>
    <div>Hello, {name}</div>
  </>
);

export default FooterBar;
