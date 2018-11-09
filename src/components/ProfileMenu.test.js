/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';

import ProfileMenu from './ProfileMenu';

const mockProps = {
  logOutHandler: jest.fn(),
  editUser: jest.fn(),
  activeUser: {
    username: 'test',
    firstName: 'test',
    lastName: 'test',
  },
  disabled: false,
};

it('render witout crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ProfileMenu {...mockProps} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
