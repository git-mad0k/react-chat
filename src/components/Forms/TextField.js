import React from 'react';
import TextField from '@material-ui/core/TextField';

export default ({
  input,
  label,
  meta: { touched, error },
  ...custom
}) => (
  <TextField
    label={label}
    helperText={touched && error}
    error={!!(touched && error)}
    {...input}
    {...custom}
  />
);
