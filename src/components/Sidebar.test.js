/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';

import Sidebar from './Sidebar';

const mockProps = {
  handleOpen: jest.fn(),
  joinChat: jest.fn(),
  activeUser: {
    username: 'test',
    firstName: 'test',
    lastName: 'test',
  },
  chats: {
    active: {},
    my: [],
    all: [],
  },
  isConnected: true,
};

it('render witout crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Sidebar {...mockProps} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
