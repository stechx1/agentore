/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Button } from '../../components/Button/Button';

const ForgotCodePage = () => {
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
        <h2 className='text-3xl mb-8'>Forgot Access Code</h2>
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

          <div className='flex space-x-2 mt-4'>
            <Button onClick={() => router.push('/login')} type={'secondary'}>
              Back
            </Button>
            <Button>Submit</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotCodePage;
