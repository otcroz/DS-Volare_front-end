import React from 'react';

type props = {
  name: string;
};

const StatisticsBox = ({ name }: props) => (
  <>
    <div>Hello, {name}</div>
  </>
);

export default StatisticsBox;
