import React from "react";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AvatarProfile from "./AvatarProfile" 
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";


const styles = theme => ({
  appBar: {
    width: `calc(100% - 320px)`
  },
  "appBar-left": {
    marginLeft: 320
  },
  "appBar-right": {
    marginRight: 320
  },
  chatName: {
    paddingLeft: "1rem",
    color: "inherit",
    flexGrow: 1
  },
});

const ChatHeader = ({ classes }) => (
  <AppBar position="absolute" className={classes.appBar}>
    <Toolbar>
      <AvatarProfile name={"React Chat"} color={"red"} />
      <Typography variant="title" className={classes.chatName} noWrap>
        React Chat
      </Typography>
      <div>
        <IconButton          
          aria-haspopup="true"          
          color="inherit"
        >
          <AccountCircle />
        </IconButton>        
      </div>
    </Toolbar>
  </AppBar>
);

export default withStyles(styles)(ChatHeader);
