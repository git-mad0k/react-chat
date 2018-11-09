import React from 'react';
import PropTypes from 'prop-types';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import { withStyles } from '@material-ui/core/styles';

import ChatList from './ChatList';
import NewChat from './NewChat';
import SidebarMenu from './SidebarMenu';
import SidebarSearch from './SidebarSearch';

const styles = () => ({
  drawerPaper: {
    position: 'relative',
    width: 320,
    height: '100%',
    overflow: 'hidden',
  },
});

class Sidebar extends React.Component {
  static propTypes = {
    classes: PropTypes.objectOf(PropTypes.string).isRequired,
    handleOpen: PropTypes.func.isRequired,
    joinChat: PropTypes.func.isRequired,
    chats: PropTypes.shape({
      active: PropTypes.object,
      my: PropTypes.array.isRequired,
      all: PropTypes.array.isRequired,
    }).isRequired,
    isConnected: PropTypes.bool.isRequired,
    activeChat: PropTypes.shape({
      createdAt: PropTypes.string,
      creator: PropTypes.shape({
        _id: PropTypes.string,
        username: PropTypes.string,
        firstName: PropTypes.string,
        lastName: PropTypes.string,
      }),
      members: PropTypes.array,
      title: PropTypes.string,
    }),
  };

  static defaultProps = {
    activeChat: {},
  };

  state = {
    activeTab: 0,
    searchValue: '',
  };

  handleTabChange = (event, value) => {
    this.setState({
      activeTab: value,
    });
  };

  handleSearchChange = (event) => {
    this.setState({
      searchValue: event.currentTarget.value,
    });
  };

  filterChat = (chats) => {
    const { searchValue } = this.state;
    return chats.filter(chat => chat.title.toLowerCase().includes(searchValue.toLowerCase()));
  };

  render() {
    const {
      classes, chats, handleOpen, joinChat, activeChat, isConnected,
    } = this.props;
    const { activeTab } = this.state;
    return (
      <Drawer
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <SidebarSearch handleSearchChange={this.handleSearchChange} />
        <Divider />
        <ChatList
          chats={this.filterChat(activeTab === 0 ? chats.my : chats.all)}
          joinChat={joinChat}
          disabled={!isConnected}
          activeChat={activeChat}
        />
        <NewChat handleOpen={handleOpen} disabled={!isConnected} />
        <SidebarMenu activeTab={activeTab} handleTabChange={this.handleTabChange} />
      </Drawer>
    );
  }
}
export default withStyles(styles)(Sidebar);
