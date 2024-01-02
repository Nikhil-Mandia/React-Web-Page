import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

export default function Avatars() {
  return (
    

    <Stack>
      <Avatar
        sx={{ width: 56, height: 56 }}
         alt="Remy Sharp"
          src="/static/images/avatar/1.jpg" /> 
    </Stack>
  );
}