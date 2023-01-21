import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button, FormControl, Link, TextInput } from '@primer/react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import AuthLayout from '../../layouts/AuthLayout';

type FormInputs = {
  username: string;
  password: string;
};

const schema = yup
  .object({
    username: yup
      .string()
      .required()
      .matches(/^\S+$/, { message: 'Username should not contain spaces' }),
    password: yup.string().required(),
  })
  .required();
const LoginScreen = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: FormInputs) => console.log(data);
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
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl sx={{ marginTop: '1rem' }} required>
            <FormControl.Label>Username</FormControl.Label>
            <TextInput
              size={'medium'}
              aria-label="username"
              placeholder="Username"
              autoComplete="username"
              sx={{ width: '100%' }}
              {...register('username', { required: true })}
            />

            {errors.username ? (
              <FormControl.Validation variant="error">
                {errors.username.message}
              </FormControl.Validation>
            ) : (
              <></>
            )}
          </FormControl>

          <FormControl sx={{ marginTop: '1rem' }} required>
            <FormControl.Label>Password</FormControl.Label>
            <TextInput
              aria-label="password"
              placeholder="Password"
              autoComplete="password"
              type={'password'}
              {...register('password', { required: true })}
              sx={{ width: '100%' }}
            />
            {errors.password ? (
              <FormControl.Validation variant="error">
                {errors.password.message}
              </FormControl.Validation>
            ) : (
              <></>
            )}
          </FormControl>

          <Button variant="primary" sx={{ marginTop: '1rem' }} type={'submit'}>
            Sign in
          </Button>
        </form>
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
