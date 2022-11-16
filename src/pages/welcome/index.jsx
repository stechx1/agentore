/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Button } from '../../components/Button/Button';

const WelcomePage = () => {
  const router = useRouter();
  return (
    <div className='h-screen bg-[#212121] flex justify-center items-center'>
      <Head>
        <title>Welcome - Agentore</title>
      </Head>
      <div className='bg-[#111111] text-white rounded-xl px-32 py-20 relative'>
        <img
          src='/icons/man-icon.png'
          alt='man-icon'
          className='absolute top-[-30px] left-7 '
        />
        <h2 className='text-3xl mb-8'>Welcome to Agentore</h2>

        <div>
          <p className='max-w-[400px]'>
            My name is Agentron and I am the first agent of Agentore. I have
            been designed to help you training your agent to manage your
            customer inquiries and work smarter.
          </p>
        </div>
        <div className='flex space-x-2 mt-6'>
          <Button onClick={() => router.push('/inquiries')} paddingX='36'>
            Agent Registration Form
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
