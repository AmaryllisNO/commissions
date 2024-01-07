import React, { useState } from 'react';
import { useAtom } from 'jotai';
import { authAtom } from '@/data/atoms/authAtom';
import { useRouter } from 'next/router';
import { Button, Input } from '@nextui-org/react';
import { EyeSlashFilledIcon } from '@/assets/EyeSlashFilledIcon';
import { EyeFilledIcon } from '@/assets/EyeFilledIcon';

const Login: React.FC = () => {
  const router = useRouter();
  const [auth, setAuth] = useAtom(authAtom);
  const [passwordInput, setPasswordInput] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  const loginUser = async (passwordInput: string) => {
    const password: string = 'handball123'; // Replace with your password

    if (passwordInput === password) {
      setAuth({ isLoggedIn: true, user: { name: 'Admin' } });
      router.push('/');
    } else {
      alert('Oopsie! Wrong password!');
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    loginUser(passwordInput);
  };

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <main className='p-4 flex items-center justify-center h-screen'>
      <div>
        {auth.isLoggedIn ? (
          <p>Welcome, {auth?.user?.name}!</p>
        ) : (
          <>
            <form onSubmit={handleLogin}>
              <Input
                label='Password'
                variant='bordered'
                placeholder='Enter your password'
                size='lg'
                onChange={(e) => {
                  setPasswordInput(e.target.value);
                  console.log(e.target.value);
                }}
                endContent={
                  <button
                    className='focus:outline-none text-base'
                    type='button'
                    onClick={toggleVisibility}
                  >
                    {isVisible ? (
                      <EyeSlashFilledIcon className='text-2xl text-default-400 pointer-events-none' />
                    ) : (
                      <EyeFilledIcon className='text-2xl text-default-400 pointer-events-none' />
                    )}
                  </button>
                }
                type={isVisible ? 'text' : 'password'}
                className='max-w-xs mb-2 text-base'
              />
              <Button type='submit'>Log In</Button>
            </form>
          </>
        )}
      </div>
    </main>
  );
};

export default Login;
