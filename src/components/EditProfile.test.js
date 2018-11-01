/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import EditProfile from './EditProfile';

jest.mock('./ChatMenu.js', () => () => '<ChatMenu/>');

const mockProps = {
  handleClose: jest.fn(),
  hanldeEditUser: jest.fn(),
  user: {
    username: 'username',
  },
  open: true,
};

it('render witout crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<EditProfile {...mockProps} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
