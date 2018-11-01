/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter, Route } from 'react-router-dom';
import renderer from 'react-test-renderer';
import MessageList from './MessageList';

jest.mock('moment', () => () => ({ fromNow: () => '2 days ago' }));

const mockProps = {
  messages: [
    {
      _id: '1',
      chatId: '12345',
      content: 'Hello, World!',
      sender: {
        firstName: 'test',
        lastName: 'test',
        username: 'test',
        _id: '12345',
      },
      statusMessage: true,
      createdAt: '2018-03-16T10:53:23.200Z',
      updatedAt: '2018-03-16T10:53:23.200Z',
    },
    {
      _id: '2',
      chatId: '12345',
      content: 'Hello, React!',
      sender: {
        firstName: 'test',
        lastName: 'test',
        username: 'test',
        _id: '12345',
      },
      statusMessage: true,
      createdAt: '2018-03-16T10:53:23.200Z',
      updatedAt: '2018-03-16T10:53:23.200Z',
    },
  ],
  activeUser: {
    _id: '12345',
    username: 'test',
    isMember: true,
    isCreator: true,
    isChatMember: true,
  },
};
describe('<MessageList />', () => {
  it('render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <MemoryRouter initialEntries={['/chat']}>
        <Route path="/chat/:chatId?" render={props => <MessageList {...mockProps} {...props} />} />
      </MemoryRouter>,
      div,
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it('reders correcty', () => {
    const tree = renderer
      .create(<MemoryRouter initialEntries={['/chat']}>
        <Route
          path="/chat/:chatId?"
          render={props => <MessageList {...mockProps} {...props} />}
        />
        {/* eslint-disable-next-line */}
        </MemoryRouter>,)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders messages', () => {
    const tree = renderer
      .create(<MemoryRouter initialEntries={['/chat/12345']}>
        <Route
          path="/chat/:chatId?"
          render={props => <MessageList {...mockProps} {...props} />}
        />
        {/* eslint-disable-next-line */}
        </MemoryRouter>,)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders without messages', () => {
    const tree = renderer
      .create(<MemoryRouter initialEntries={['/chat/12345']}>
        <Route
          path="/chat/:chatId?"
          render={props => <MessageList {...mockProps} {...props} messages={[]} />}
        />
        {/* eslint-disable-next-line */}
        </MemoryRouter>,)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
