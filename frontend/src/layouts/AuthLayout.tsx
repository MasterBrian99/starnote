import { Box, Flash, Text } from '@primer/react';
import React from 'react';

import logoWhite from '../assets/logo_white.png';

interface Prop {
  children: React.ReactNode;
  title: string;
}
const AuthLayout = (prop: Prop) => {
  return (
    <Box
      sx={{
        maxHeight: '100%',
        minHeight: '100vh',
        width: '100%',
      }}
      p={2}
      display="flex"
      flexDirection={'column'}
      alignItems={'center'}
      bg="canvas.default"
    >
      <Box
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        flexDirection={'column'}
        pt={10}
      >
        <img src={logoWhite} alt="" />
        <Text fontSize={3} py={2}>
          {prop.title}
        </Text>
      </Box>
      {prop.children}

      <Box
        sx={{
          width: '20rem',
        }}
        my={2}
      >
        <Flash variant="warning">Starnote is not affiliated with Github.</Flash>
      </Box>
    </Box>
  );
};

export default AuthLayout;
