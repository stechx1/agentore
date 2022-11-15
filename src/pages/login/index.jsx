import Head from 'next/head';
import Link from 'next/link';
import { Button } from '../../components/Button/Button';

const LoginPage = () => {
  return (
    <div className='h-screen bg-[#212121] flex justify-center items-center'>
      <Head>
        <title>Login - Agentore</title>
      </Head>
      <div className='bg-[#111111] text-white rounded-xl px-32 py-20'>
        <h2 className='text-3xl mb-8'>Login</h2>
        <form>
          <input
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
            id='email-address'
            name='email'
            type='email'
            autoComplete='email'
            required
            className='appearance-none rounded-full relative block
                  w-full px-3 py-2 border border-gray-300
                  placeholder-gray-500 text-gray-900
                  focus:outline-none focus:ring-primary
                  focus:border-primary focus:z-10 sm:text-sm'
            placeholder='Access Code'
          />
          <div onClick={() => ''}>
            <p className='text-sm mt-3 ml-2 font-light underline'>
              Forgot Access Code?
            </p>
          </div>

          <div className='flex space-x-2 mt-4'>
            <Button type={"secondary"}>Register an agent</Button>
            <Button>Access</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
