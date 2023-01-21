import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button, FormControl, Link, TextInput } from '@primer/react';
import { AxiosError } from 'axios';
import { useSignIn } from 'react-auth-kit';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';

import { registerUser } from '../../api/auth';
import { CustomAxiosError } from '../../http/httpClient';
import AuthLayout from '../../layouts/AuthLayout';

type FormInputs = {
  email: string;
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
const SignupScreen = () => {
  const signIn = useSignIn();

  const navigate = useNavigate();

  const registerMutation = useMutation(registerUser, {
    onSuccess: (data) => {
      console.log(data);

      if (
        signIn({
          token: data.data ? data.data.access_token : '',
          expiresIn: 600,
          tokenType: 'Bearer',
          authState: data.data,
        })
      ) {
        // Redirect or do-something
        navigate('/', { replace: true });
        location.reload();
      }
    },
    onError: (err: AxiosError<CustomAxiosError>) => {
      console.log(err.response?.data.message);
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: FormInputs) => {
    console.log(data);
    registerMutation.mutate({
      data: {
        email: data.email,
        username: data.username,
        password: data.password,
      },
    });
  };
  return (
    <AuthLayout title=" Sign up to Starnote">
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
          <FormControl sx={{ marginTop: '1rem' }}>
            <FormControl.Label>Email</FormControl.Label>
            <TextInput
              size={'medium'}
              aria-label="email"
              placeholder="Email"
              autoComplete="email"
              sx={{ width: '100%' }}
              {...register('email', { required: true })}
            />
            {errors.email ? (
              <FormControl.Validation variant="error">
                {errors.email.message}
              </FormControl.Validation>
            ) : (
              <></>
            )}
          </FormControl>
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
              sx={{ width: '100%' }}
              {...register('password', { required: true })}
            />
            {errors.password ? (
              <FormControl.Validation variant="error">
                {errors.password.message}
              </FormControl.Validation>
            ) : (
              <></>
            )}
          </FormControl>

          <Button variant="primary" sx={{ marginTop: '1rem' }}>
            Sign up
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
        Already have an Account? <Link href="./login">Login.</Link>
      </Box>
    </AuthLayout>
  );
};

export default SignupScreen;
