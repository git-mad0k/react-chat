/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter, Route } from 'react-router-dom';
import ChatItem from './ChatItem';

const mockProps = {
  title: 'Title Chat',
  createdAt: '2018-03-16T10:53:23.200Z',
  chatId: '1111',
  active: true,
  disabled: true,
};

it('render witout crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MemoryRouter initialEntries={['/chat']}>
      <Route path="/chat" render={props => <ChatItem {...props} {...mockProps} />} />
    </MemoryRouter>,
    div,
  );
  ReactDOM.unmountComponentAtNode(div);
});
