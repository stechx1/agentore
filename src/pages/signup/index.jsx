/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Button } from '../../components/Button/Button';

const SignUpPage = () => {
  const [email, setEmail] = useState('');
  const [accessCode, setAccessCode] = useState('');
  const [companyName, setCompanyName] = useState('');
  const router = useRouter();
  return (
    <div className='h-screen bg-[#212121] flex justify-center items-center'>
      <Head>
        <title>Sign Up - Agentore</title>
      </Head>
      <div className='bg-[#111111] text-white rounded-xl px-32 md:px-32 py-20 relative max-w-[740px]'>
        <img
          src='/icons/man-icon.png'
          alt='man-icon'
          className='absolute top-[-30px] left-7 '
        />
        <h2 className='text-3xl mb-8'>Sign up</h2>
        <form>
          <input
            id='email-address'
            name='email'
            type='email'
            autoComplete='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className='sm:max-w-[330px] appearance-none rounded-full relative block
                  w-full px-3 py-2 border border-gray-300
                  placeholder-gray-500 text-gray-900 
                  focus:outline-none focus:ring-primary
                  focus:border-primary focus:z-10 sm:text-sm mb-3'
            placeholder='Access Name (Email)'
          />

          <input
            id='code'
            name='code'
            type='password'
            value={accessCode}
            onChange={(e) => setAccessCode(e.target.value)}
            required
            className='sm:max-w-[330px] appearance-none rounded-full relative block
                  w-full px-3 py-2 border border-gray-300
                  placeholder-gray-500 text-gray-900
                  focus:outline-none focus:ring-primary
                  focus:border-primary focus:z-10 sm:text-sm mb-3'
            placeholder='Access Code (Password)'
          />

          <input
            id='code'
            name='code'
            type='password'
            required
            className='sm:max-w-[330px] appearance-none rounded-full relative block
                  w-full px-3 py-2 border border-gray-300
                  placeholder-gray-500 text-gray-900
                  focus:outline-none focus:ring-primary
                  focus:border-primary focus:z-10 sm:text-sm mb-3'
            placeholder='Confirm Access Code'
          />

          <input
            id='companyName'
            name='companyName'
            type='text'
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            required
            className='sm:max-w-[330px] appearance-none rounded-full relative block
                  w-full px-3 py-2 border border-gray-300
                  placeholder-gray-500 text-gray-900
                  focus:outline-none focus:ring-primary
                  focus:border-primary focus:z-10 sm:text-sm'
            placeholder='Company Name'
          />

          <div className='flex flex-col space-y-4 md:flex-row md:space-y-0 space-x-2 mt-4 items-center'>
            <Button onClick={() => router.push('/login')} type={'secondary'}>
              Already a member?
            </Button>
            <Button onClick={() => router.push('/welcome')}>Access</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
