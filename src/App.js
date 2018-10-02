import React from 'react';
import { withStyles } from '@material-ui/core/styles';



import red from '@material-ui/core/colors/red';
import {chats, messages} from "./mock-data.json";

import Sidebar from './components/Sidebar'
import ChatHeader from './components/ChatHeader'
import Chat from './components/Chat'


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  
  avatar: {
    backgroundColor: red[500],
  },
  
  appFrame: {
    height: '100%',
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
  },
});

class PermanentDrawer extends React.Component {
  render() {
    const { classes } = this.props;

    return (      
        <div className={classes.appFrame}>
          <ChatHeader />
          <Sidebar chats={chats} />
          <Chat messages={messages} />
      </div>
    );
  }
}

export default withStyles(styles)(PermanentDrawer);
