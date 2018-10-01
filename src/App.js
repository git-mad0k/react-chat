import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import classnames  from 'classnames'
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import ExploreIcon from '@material-ui/icons/Explore';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import red from '@material-ui/core/colors/red';
import {chats, messages} from "./mock-data.json";
import titleInitilals from './utils/title-initials'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  appFrame: {
    height: '100%',
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
  },
  appBar: {
    width: `calc(100% - 320px)`,
  },
  'appBar-left': {
    marginLeft: 320,
  },
  'appBar-right': {
    marginRight: 320,
  },
  avatar: {
    backgroundColor: red[500],
  },
  drawerPaper: {
    position: 'relative',
    width: 320,
    height: '100%',
    overflow: 'hidden'
  },
  toolbar: {
    display: 'flex',
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    overflowX: 'auto'

  },
  input: {
    width: '100%',
    padding: '0 10px'
  },
  listChart: {
    height: `calc(100% - 56px)`,
    overflowY: 'scroll',
    flex: '1 1 auto'
  },
  bottom: {    
    width: '100%',
    height: '56px',
    display: 'flex',
    
    
  },
  messages: {
    display: 'flex',
    flexDirection: 'column'
  },
  messageWrapper: {
    display: 'flex',
    margin: '1rem 0.8rem',
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    alignItems: 'center'    
  },

  messageWrapperForMe: {
    alignSelf: 'flex-end',    
    flexDirection: 'row-reverse',     
  },
  
  message__container: {
     marginLeft: '1rem',
     padding: '0.5rem',
     fontSize: '0.875rem',  
     minWidth: '70px',
     maxWidth: '450px',
  },
  
  message__containerForMe: {    
    marginRight: '1rem',   
  },

  message__author: {
     color: 'rgb(96, 125, 139)',
     fontSize: '1em',
     fontWeight: '400' 
  },
  message__text: {    
    fontSize: '1em',
    fontWeight: '400' 
  },
  message__date:{
    color: 'rgb(96, 125, 139)',
    fontSize: '1em',
    fontWeight: '400' 
  },
  new__message: {
    position: 'fixed',
    bottom: 0,
    width: `calc(100% - 320px)`,
    left: 'auto',
    padding: '2rem',
    right: 0
  },
  userStatus: {
    alignSelf: 'center',
    display: 'flex',
    margin: '1rem 0.8rem',
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontSize: '0.875rem',
    fontWeight: '400',
    textAlign: 'center',
    flexDirection: 'column'     
  },
  user__name: {
    fontSize: '1em',
    color: "green",
  },
  user__status: {
    fontSize: '1em',
    color: '#000'
  },
  user__date_visit: {
    fontSize: '0.875em',
    color: 'rgb(96, 125, 139)',
  },
  new__chat: {
    position: 'absolute',
    right: '40px',
    bottom: '75px',
    left: 'auto'
   
  }
});

class PermanentDrawer extends React.Component {

  render() {
    const { classes } = this.props;

    return (      
        <div className={classes.appFrame}>
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
        <Drawer
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
        >
         
          <div className={classes.toolbar}>
          <TextField
            placeholder="Search charts..."
            className={classes.input}
            margin="normal"           
          />
          </div>
          <Divider />                  
          <List className={classes.listChart}>            
            {chats.map((chat,i) => (
               <ListItem
               key={i}
               button              
             >
               <Avatar aria-label="Recipe" className={classes.avatar}>               
               {titleInitilals(chat.name)}
              </Avatar>
               <ListItemText primary={chat.name} secondary={chat.date} />
             </ListItem> 
            ))}
          </List>
          <div className={classes.new__chat}>
            <Button variant="fab" color="primary" aria-label="Add" className={classes.button}>
              <AddIcon />
            </Button>
          </div>
          
          <BottomNavigation            
            showLabels
            className={classes.bottom}
             >
            <BottomNavigationAction label="My Charts" icon={<RestoreIcon />} />
            <BottomNavigationAction label="Explore" icon={<ExploreIcon />} />
  
      </BottomNavigation>     
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <div className={classes.messages}>
          {messages && messages.map((message, i) => {
            const isMessageForMe = message.sender === "me"
            console.log(isMessageForMe, message.sender)
            return (
            <div key={i} className={classnames(classes.messageWrapper, isMessageForMe && classes.messageWrapperForMe )}>
              <Avatar>              
              {titleInitilals(message.name)}
              </Avatar>
              <Paper className={classnames (classes.message__container, isMessageForMe && classes.message__containerForMe ) }>
                <div className={classes.message__author}>{message.name}</div>
                <div className={classes.message__text}>{message.content}</div>
                <div className={classes.message__date}>{message.date}</div>
              </Paper>
            </div>
          )})}
          
            
            
            <div className={classes.userStatus}>
              <div className={classes.user__name}>
                testuser <span className={classes.user__status}>joined</span> 
              </div>
              <div className={classes.user__date_visit}>
                2 days ago
              </div>
             </div>
          </div>
          
          <div className={classes.new__message}>            
              <Paper>
              <TextField
                id="standard-full-width"                
                style={{ padding: 8 }}
                
                placeholder="Type your message..."                
                fullWidth
                margin="normal" 
              />
              </Paper>
          </div>
        </main>
      </div>
    );
  }
}

export default withStyles(styles)(PermanentDrawer);
