/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import AvatarProfile from './AvatarProfile';

describe('<AvatarProfile />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AvatarProfile name="Name Surname" />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('отображается корректно', () => {
    const tree = renderer.create(<AvatarProfile name="Name Surname" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
