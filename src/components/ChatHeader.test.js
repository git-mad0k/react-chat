/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import ChatHeader from './ChatHeader';

jest.mock('./ProfileMenu.js', () => () => 'ProfileMeu');

const mockProps = {
  logOutHandler: jest.fn(),
  leaveChat: jest.fn(),
  deleteChat: jest.fn(),
  editUser: jest.fn(),
  isConnected: true,
  activeUser: {
    isMember: true,
    isCreator: true,
    isChatMember: true,
  },
};

it('render without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ChatHeader {...mockProps} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
