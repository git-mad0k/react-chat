import React from "react";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AvatarProfile from "./AvatarProfile"
import ChatMenu from './ChatMenu';
import ProfileMenu from './ProfileMenu'

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

const ChatHeader = ({ classes, logOutHandler, leaveChat, activeChat, deleteChat, editUser, activeUser }) => {
  return (
  <AppBar position="absolute" className={classes.appBar}>
    <Toolbar>      
        {activeChat ? (
          <React.Fragment>
            <AvatarProfile name={activeChat.title} />
            <Typography variant="title" className={classes.chatName} noWrap>
              {activeChat.title}
              {activeUser.isChatMember && <ChatMenu leaveChat={() => leaveChat(activeChat._id)} 
                        deleteChat={() => deleteChat(activeChat._id)} 
                        activeUser={activeUser} />}
            </Typography>
          </React.Fragment>) : (
            <React.Fragment>
              <AvatarProfile name={"React Chat"} color={"red"} />
              <Typography variant="title" className={classes.chatName} noWrap>
                React Chat                
              </Typography>
            </React.Fragment>)} 
        <ProfileMenu logOutHandler={logOutHandler} editUser={editUser} activeUser={activeUser} />         
    </Toolbar>
  </AppBar>
)};
 
export default withStyles(styles)(ChatHeader);
