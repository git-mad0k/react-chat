/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter, Route } from 'react-router-dom';
import ChatMenu from './ChatMenu';

const mockProps = {
  leaveChat: jest.fn(),
  deleteChat: jest.fn(),
  activeUser: {
    username: 'username',
    isMember: true,
    isCreator: true,
    isChatMember: true,
  },
  disabled: false,
};

it('render witout crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MemoryRouter initialEntries={['/chat']}>
      <Route path="/chat/:chatId?" render={props => <ChatMenu {...mockProps} {...props} />} />
    </MemoryRouter>,
    div,
  );
  ReactDOM.unmountComponentAtNode(div);
});
