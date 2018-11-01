/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import NewMeesage from './NewMessage';

jest.mock('@material-ui/core/Button', () => () => 'Button');

const mockData = {
  showJoinBtn: true,
  onSendMessage: jest.fn(),
  disabled: false,
  onJoinChat: jest.fn(),
};

describe('NewMeesage', () => {
  it('render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<NewMeesage {...mockData} />, div);
  });

  it('render correctly', () => {
    const tree = renderer.create(<NewMeesage {...mockData} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('render showJoin false', () => {
    const tree = renderer.create(<NewMeesage {...mockData} showJoinBtn={false} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
