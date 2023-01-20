import { Box, Button, FormControl, Link, TextInput } from '@primer/react';

import AuthLayout from '../../layouts/AuthLayout';

const LoginScreen = () => {
  return (
    <AuthLayout title=" Sign in to Starnote">
      <Box
        borderRadius={2}
        borderColor="border.default"
        borderWidth={1}
        borderStyle="solid"
        p={3}
        display="flex"
        flexDirection={'column'}
        bg="canvas.subtle"
        sx={{
          width: '20rem',
        }}
      >
        <FormControl sx={{ marginTop: '1rem' }} required>
          <FormControl.Label>Username</FormControl.Label>
          <TextInput
            size={'medium'}
            aria-label="username"
            name="username"
            placeholder="Username"
            autoComplete="username"
            sx={{ width: '100%' }}
          />
        </FormControl>

        <FormControl sx={{ marginTop: '1rem' }} required>
          <FormControl.Label>Password</FormControl.Label>
          <TextInput
            aria-label="password"
            name="password"
            placeholder="Password"
            autoComplete="password"
            type={'password'}
            sx={{ width: '100%' }}
          />
        </FormControl>

        <Button variant="primary" sx={{ marginTop: '1rem' }}>
          Sign in
        </Button>
      </Box>
      <Box
        mt={2}
        sx={{
          width: '20rem',
        }}
        borderRadius={2}
        borderColor="border.default"
        borderWidth={1}
        borderStyle="solid"
        p={3}
      >
        New to Starnote? <Link href="./register">Create an account.</Link>
      </Box>
    </AuthLayout>
  );
};

export default LoginScreen;
