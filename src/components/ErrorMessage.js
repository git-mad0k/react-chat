import React from 'react';
import PropTypes from 'prop-types';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

class ErrorMessage extends React.Component {
  static propTypes = {
    error: PropTypes.instanceOf(Error),
    closeSneckBar: PropTypes.func.isRequired,
  };

  static defaultProps = {
    error: null,
  };

  static getDerivedStateFromProps(props) {
    if (props.error) {
      return { open: true };
    }
    return null;
  }
  state = {
    open: false,
  };

  render() {
    const { error, closeSneckBar } = this.props;
    const { open } = this.state;
    if (!error) {
      return null;
    }

    return (
      <div>
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={open}
          autoHideDuration={6000}
          onClose={this.handleClose}
          message={error.message}
          action={[
            <IconButton key="close" aria-label="Close" color="inherit" onClick={closeSneckBar}>
              <CloseIcon />
            </IconButton>,
          ]}
        />
      </div>
    );
  }
}

export default ErrorMessage;
