/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter, Route } from 'react-router-dom';
import Chat from './Chat';

const mockProps = {
  sendMessage: jest.fn(),
  joinChat: jest.fn(),
  messages: [],
  activeUser: {
    firstName: 'test',
    lastName: 'test',
    username: 'test',
    isMember: true,
    isCreator: false,
    isChatMember: false,
  },
  isConnected: true,
};

it('render without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MemoryRouter initialEntries={['/chat']}>
      <Route path="/chat/:chatId?" render={props => <Chat {...mockProps} {...props} />} />
    </MemoryRouter>,
    div,
  );
  ReactDOM.unmountComponentAtNode(div);
});
