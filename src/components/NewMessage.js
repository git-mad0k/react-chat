import React from 'react'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

const styles = theme => ({
  newMessage: {
    position: 'fixed',
    bottom: 0,
    width: `calc(100% - 320px)`,
    left: 'auto',
    padding: '2rem',
    right: 0
  },
})

class NewMessage extends React.Component {
  state = {
    value: '',
  }

  handleValueChange = (event) => {
    this.setState({
      value: event.target.value,
    });
  }

  handleKeyPress = (event) => {
    const { value } = this.state;
    const { onSendMessage } = this.props
  
    if (event.key === 'Enter' && value) {
      onSendMessage(value)     
      
      this.setState({
        value: ''
      }) 
    }     
  }

  render() {
    const { classes, showJoinBtn, onJoinChat, disabled} = this.props
    const { value } = this.state

    return (
      <div className={classes.newMessage}>
        <Paper>
          {!showJoinBtn ? (<TextField
            id="standard-full-width"
            style={{ padding: 8 }}
            placeholder="Type your message..."
            fullWidth
            margin="normal"
            disabled={disabled}
            value={value}
            onChange={this.handleValueChange}
            onKeyPress={this.handleKeyPress}
          />) : (<Button
            fullWidth
            variant="raised"
            color="primary"
            disabled={disabled}
            onClick={onJoinChat}
            >  Join
            </Button>)}
        </Paper>
      </div>
    )
  }
}

export default withStyles(styles)(NewMessage)
