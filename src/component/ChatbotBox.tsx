import React from 'react';

type props = {
  name: string;
};

const ChatbotBox = ({ name }: props) => (
  <>
    <div>Hello, {name}</div>
  </>
);

export default ChatbotBox;
