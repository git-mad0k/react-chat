import React from 'react';

import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { withStyles } from '@material-ui/core/styles';


const styles = () => ({
  newChatWrapper: {
    position: 'absolute',
    right: '40px',
    bottom: '75px',
    left: 'auto',
  },
});

const NewChat = ({ classes, handleOpen, disabled }) => (
  <div className={classes.newChatWrapper}>
    <Button
      variant="fab"
      color="secondary"
      aria-label="Add"
      onClick={handleOpen}
      disabled={disabled}
    >
      <AddIcon />
    </Button>
  </div>
);

export default withStyles(styles)(NewChat);
