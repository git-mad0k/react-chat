import React from 'react'
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

import { chats, messages } from "./mock-data.json"
import Sidebar from './components/Sidebar'
import ChatHeader from './components/ChatHeader'
import Chat from './components/Chat'
import blue from '@material-ui/core/colors/blue'
import red from '@material-ui/core/colors/red'
import pink from '@material-ui/core/colors/pink'

const theme = createMuiTheme({
  palette: {
    primary: {
      light: blue[300],
      main: blue[500],
      dark: blue[700],
    },
    secondary: {
      light: pink[300],
      main: pink[500],
      dark: pink[700],
    },
    error: red,
  },
  typography: {
    fontSize: 14,
  }
});

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
      <MuiThemeProvider theme={theme}>
        <div className={classes.appFrame}>
          <ChatHeader />
          <Sidebar chats={chats} />
          <Chat messages={messages} />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles)(PermanentDrawer);
