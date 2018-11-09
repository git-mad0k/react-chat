/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';

import NewChat from './NewChat';

const mockProps = {
  handleOpen: jest.fn(),
  disabled: false,
};

it('render witout crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NewChat {...mockProps} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
