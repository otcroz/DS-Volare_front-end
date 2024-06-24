import React from 'react';

type props = {
  name: string;
};

const NavBar = ({ name }: props) => (
  <>
    <div>Hello, {name}</div>
  </>
);

export default NavBar;
