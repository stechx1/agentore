/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Button } from '../../components/Button/Button';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [accessCode, setAccessCode] = useState('');
  const router = useRouter();
  return (
    <div className='h-screen bg-[#212121] flex justify-center items-center'>
      <Head>
        <title>Login - Agentore</title>
      </Head>
      <div className='bg-[#111111] text-white rounded-xl px-32 py-20 relative'>
        <img
          src='/icons/man-icon.png'
          alt='man-icon'
          className='absolute top-[-30px] left-7 '
        />
        <h2 className='text-3xl mb-8'>Login</h2>
        <form>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id='email-address'
            name='email'
            type='email'
            autoComplete='email'
            required
            className='appearance-none rounded-full relative block
                  w-full px-3 py-2 border border-gray-300
                  placeholder-gray-500 text-gray-900 
                  focus:outline-none focus:ring-primary
                  focus:border-primary focus:z-10 sm:text-sm mb-3'
            placeholder='Access Email'
          />

          <input
            id='code'
            name='code'
            value={accessCode}
            onChange={(e) => setAccessCode(e.target.value)}
            type='password'
            required
            className='appearance-none rounded-full relative block
                  w-full px-3 py-2 border border-gray-300
                  placeholder-gray-500 text-gray-900
                  focus:outline-none focus:ring-primary
                  focus:border-primary focus:z-10 sm:text-sm'
            placeholder='Access Code'
          />
          <div
            className='cursor-pointer'
            onClick={() => router.push('/forgot-code')}
          >
            <p className='text-sm mt-3 ml-2 font-light underline'>
              Forgot Access Code?
            </p>
          </div>

          <div className='flex flex-col space-y-4 md:flex-row md:space-y-0 space-x-2 mt-4 items-center'>
            <Button onClick={() => router.push('/signup')} type={'secondary'}>
              Register an agent
            </Button>
            <Button onClick={() => router.push('/welcome')}>Access</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
