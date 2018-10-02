import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


const styles = theme => ({

  appBar: {
    width: `calc(100% - 320px)`,
  },
  'appBar-left': {
    marginLeft: 320,
  },
  'appBar-right': {
    marginRight: 320,
  },
})

const ChatHeader = ({ classes }) => (
  <AppBar
    position="absolute"
    className={classes.appBar}
  >
    <Toolbar>
      <Typography variant="title" color="inherit" noWrap>
        React Chat
              </Typography>
    </Toolbar>
  </AppBar>
)

export default withStyles(styles)(ChatHeader)
