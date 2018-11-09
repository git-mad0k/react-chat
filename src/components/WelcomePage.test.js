/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter, Route } from 'react-router-dom';
import WelcomePage from './WelcomePage';

const mockProps = {
  receiveAuth: jest.fn(),
  signup: jest.fn(),
  login: jest.fn(),
  errorCloseMessage: jest.fn(),
  isAuthenticated: false,
};

it('render witout crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MemoryRouter initialEntries={['/']}>
      <Route path="/" render={props => <WelcomePage {...props} {...mockProps} />} />
    </MemoryRouter>,
    div,
  );
  ReactDOM.unmountComponentAtNode(div);
});
