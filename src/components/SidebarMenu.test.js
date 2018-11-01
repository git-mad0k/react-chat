/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';

import SidebarMenu from './SidebarMenu';

const mockProps = {
  activeTab: 1,
  handleTabChange: jest.fn(),
};

it('render witout crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SidebarMenu {...mockProps} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
