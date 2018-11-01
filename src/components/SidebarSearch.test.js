/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';

import SidebarSearch from './SidebarSearch';

const mockProps = {
  handleSearchChange: jest.fn(),
};

it('render witout crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SidebarSearch {...mockProps} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
