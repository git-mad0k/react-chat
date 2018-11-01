/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import MessageItem from './MessageItem';

const mockData = {
  message: {
    _id: '1',
    updatedAt: '2018-03-16T10:53:23.200Z',
    createdAt: '2018-03-16T10:53:23.200Z',
    content: 'test content 1',
    sender: {
      _id: '1',
      username: 'test2',
      lastName: 'test',
      firstName: 'test',
    },
  },

  activeUser: {
    _id: '1',
    firstName: 'test',
    lastName: 'test',
    username: 'test',
    isMember: false,
    isCreator: false,
    isChatMember: false,
  },
};

describe('MessageItem', () => {
  it('render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MessageItem {...mockData} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('render corretly ', () => {
    const tree = renderer.create(<MessageItem {...mockData} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('redner no user message', () => {
    const tree = renderer
      .create(<MessageItem {...mockData} activeUser={{ ...mockData.activeUser, _id: '2' }} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('render user is joined ', () => {
    const tree = renderer
      .create(<MessageItem
        {...mockData}
        message={{ ...mockData.message, content: 'joined', statusMessage: true }}
      />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
