/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';

import NewChatDialog from './NewChatDialog';

const mockProps = {
  handleClose: jest.fn(),
  submit: jest.fn(),
  open: true,
};

it('render witout crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NewChatDialog {...mockProps} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
