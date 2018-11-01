/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import ChatList from './ChatList';

jest.mock('./ChatItem.js', () => ({ chatId, title }) => `ChatId-${chatId} ChatTitlte-${title}`);

const mockProps = {
  chats: [
    {
      _id: '1',
      title: 'test1',
      createdAt: '2018-03-16T10:53:23.200Z',
    },
    {
      _id: '2',
      title: 'test2',
      createdAt: '2018-03-16T10:53:23.200Z',
    },
    {
      _id: '3',
      title: 'test3',
      createdAt: '2018-03-16T10:53:23.200Z',
    },
  ],
  activeChat: {
    createdAt: '2018-03-16T10:53:23.200Z',
    creator: {
      _id: '111',
      username: 'test',
      firstName: 'test',
      lastName: 'test',
    },
    title: 'test1',
  },
  disabled: false,
};
describe('<ChatList />', () => {
  it('render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ChatList {...mockProps} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders correctly', () => {
    const tree = renderer.create(<ChatList {...mockProps} />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders without chats', () => {
    const tree = renderer.create(<ChatList {...mockProps} chats={[]} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
