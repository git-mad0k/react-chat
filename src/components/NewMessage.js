import React from 'react'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  new__message: {
    position: 'fixed',
    bottom: 0,
    width: `calc(100% - 320px)`,
    left: 'auto',
    padding: '2rem',
    right: 0
  },
})

const NewMessage = ({ classes }) => (
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
)

export default withStyles(styles)(NewMessage)
