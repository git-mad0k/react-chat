import React from 'react'

import Drawer from '@material-ui/core/Drawer'
import Divider from '@material-ui/core/Divider'
import { withStyles } from '@material-ui/core/styles'

import ChatList from './ChatList'
import NewChat from './NewChat'
import SidebarMenu from './SidebarMenu'
import SidebarSearch from './SidebarSearch'


const styles = theme => ({
  drawerPaper: {
    position: 'relative',
    width: 320,
    height: '100%',
    overflow: 'hidden'
  },
})

const Sidebar = ({ classes, chats, handleOpen, joinChat }) => (
  <Drawer
    variant="permanent"
    classes={{
      paper: classes.drawerPaper
    }}
  >
    <SidebarSearch />
    <Divider />
    <ChatList chats={chats} joinChat={joinChat} />
    <NewChat handleOpen={handleOpen} />
    <SidebarMenu />
  </Drawer>
);

export default withStyles(styles)(Sidebar)
