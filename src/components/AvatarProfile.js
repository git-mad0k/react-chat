import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import titleInitilals from '../utils/title-initials';
import getColor from '../utils/color-from';


const AvatarProfile = ({ name, color }) => (
  <Avatar style={{ backgroundColor: color || getColor(name) }}>
    {titleInitilals(name)}
  </Avatar>);

export default AvatarProfile;
