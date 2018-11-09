/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter, Route } from 'react-router-dom';
import ChatPage from './ChatPage';

const mockProps = {
  fetchAllChats: jest.fn(),
  fetchMyChats: jest.fn(),
  setActiveChat: jest.fn(),
  socketsConnect: jest.fn(),
  mountChat: jest.fn(),
  unmountChat: jest.fn(),
  logout: jest.fn(),
  createChat: jest.fn(),
  joinChat: jest.fn(),
  leaveChat: jest.fn(),
  deleteChat: jest.fn(),
  sendMessage: jest.fn(),
  editUser: jest.fn(),
  chats: {
    active: {},
    my: [],
    all: [],
  },
  activeUser: {
    username: 'username',
    isMember: true,
    isCreator: true,
    isChatMember: true,
  },
  messages: [
    {
      _id: '123foo321',
      chatId: '12345',
      content: 'Hello, World!',
      sender: {
        _id: '12345',
        username: 'me',
        firstName: 'test',
        lastName: 'test',
      },
      createdAt: '2018-03-16T10:53:23.200Z',
    },
    {
      _id: '321bar123',
      chatId: '12345',
      content: 'Hello, React!',
      sender: {
        _id: '2222',
        username: 'someone',
        firstName: 'test',
        lastName: 'test',
      },
      createdAt: '2018-03-16T10:53:23.200Z',
    },
  ],
  isConnected: true,
  error: null,
  errorCloseMessage: jest.fn(),
};

it('render witout crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MemoryRouter initialEntries={['/chat']}>
      <Route path="/chat/:chatId?" render={props => <ChatPage {...mockProps} {...props} />} />
    </MemoryRouter>,
    div,
  );
  ReactDOM.unmountComponentAtNode(div);
});
