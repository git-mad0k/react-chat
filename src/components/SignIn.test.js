/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';

import SignIn from './SignIn';

const mockProps = {
  onSubmit: jest.fn(),
};

it('render witout crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SignIn {...mockProps} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
