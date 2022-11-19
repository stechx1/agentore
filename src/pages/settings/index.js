import { useState } from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import slack from '../../../public/icons/slack.png';
import zoho from '../../../public/icons/zoho.png';

import Image from 'next/image';

const SettingsPage = () => {
  const [activeState, setActiveState] = useState('profile');
  return (
    <div className='bg-[#212121] text-white font-inter'>
      <Sidebar>
        <div className='tabMain px-14 py-8 flex justify-between font-inter space-x-8'>
          <ul className='flex flex-wrap text-sm font-medium text-center text-gray-500 border-gray-200 dark:border-gray-700 dark:text-gray-400'>
            <li className='mr-2' onClick={() => setActiveState('profile')}>
              <a
                href='#'
                aria-current='page'
                className={`profileTab ${
                  activeState == 'profile'
                    ? ' text-black bg-lime-300 rounded-lg p-4 inline-block'
                    : ' inline-block p-4 font-semibold rounded-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300'
                }`}
              >
                Profile
              </a>
            </li>
            <li className='mr-2' onClick={() => setActiveState('plans')}>
              <a
                href='#'
                className={`plansTab ${
                  activeState == 'plans'
                    ? ' text-black bg-lime-300 rounded-lg p-4 inline-block'
                    : ' inline-block p-4 font-semibold rounded-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300'
                }`}
              >
                Plan & Billings
              </a>
            </li>
            <li className='mr-2' onClick={() => setActiveState('integrations')}>
              <a
                href='#'
                className={`integrationsTab ${
                  activeState == 'integrations'
                    ? ' text-black bg-lime-300 rounded-lg p-4 inline-block'
                    : ' inline-block p-4 font-semibold rounded-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300'
                }`}
              >
                Integrations
              </a>
            </li>
          </ul>
        </div>
        <div
          className={`${activeState == 'plans' ? '' : 'hidden'} plans px-14`}
        >
          <div
            className='mini-banner bg-slate-100 text-black flex justify-between p-4 rounded-2xl '
            style={{ width: '400px' }}
          >
            <div className='flex gap-x-5'>
              <span>Plan Name</span>
              <span>03/14/2023</span>
            </div>
            <div>$299/m</div>
          </div>
          <div
            className='bg-red-300 w-25 pl-3 text-black rounded-md mt-4 ml-4 cursor-pointer'
            style={{ width: '120px' }}
          >
            Cancel
          </div>
          <div className='mt-9 flex flex-col gap-y-3'>
            <h4>Previous Orders</h4>
            <div
              className='mini-banner bg-neutral-900 border-gray-200 flex justify-between p-4 rounded-2xl text-white'
              style={{ width: '400px' }}
            >
              <span>02/14/2023</span>
              <span>$299/m</span>
            </div>
            <div
              className='mini-banner bg-neutral-900 border-gray-200 flex justify-between p-4 rounded-2xl text-white px-14'
              style={{ width: '400px' }}
            >
              <span>01/14/2023</span>
              <span>$299/m</span>
            </div>
          </div>
        </div>
        <div className={`${activeState == 'profile' ? '' : 'hidden'} profile px-14`}>
          <div
            className='mini-banner bg-slate-100 text-black flex justify-between p-4 rounded-2xl'
            style={{ width: '400px' }}
          >
            <span>Company Name</span>
            <svg
              class='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M5 13l4 4L19 7'
              ></path>
            </svg>
          </div>
        </div>
        <div
          className={`${
            activeState == 'integrations' ? '' : 'hidden'
          } flex flex-col justify-between px-14`}
          style={{ height: '74vh' }}
        >
          <div className=' flex flex-col gap-y-10'>
            <div>
              <div
                className='mini-banner bg-slate-100 text-black flex justify-between p-4 rounded-2xl '
                style={{ width: '400px' }}
              >
                <div className='flex gap-x-5 justify-center align-middle'>
                  <Image
                    src={slack}
                    alt='icon'
                    style={{ height: '30px', width: '30px' }}
                  />
                  <span>Workspace</span>
                  <div>Channel</div>
                </div>
              </div>
              <div
                className='bg-red-300 w-25 pl-3 text-black rounded-2xl mt-4 ml-4 cursor-pointer'
                style={{ width: '120px' }}
              >
                Disconnect
              </div>
            </div>
            <div>
              <div
                className='mini-banner bg-slate-100 text-black flex justify-between p-4 rounded-2xl'
                style={{ width: '400px' }}
              >
                <div className='flex gap-x-5 justify-center align-middle'>
                  <Image
                    src={slack}
                    alt='icon'
                    style={{ height: '30px', width: '30px' }}
                  />
                  <span>Workspace</span>
                  <div>Channel</div>
                </div>
              </div>
              <div
                className='bg-red-300 w-25 pl-3 text-black rounded-2xl mt-4 ml-4 cursor-pointer'
                style={{ width: '120px' }}
              >
                Disconnect
              </div>
            </div>
          </div>
          <div className='flex gap-x-5'>
            <Image
              src={slack}
              alt='image'
              style={{ height: '45px', width: '45px' }}
              className='bg-slate-300 p-2 rounded-full'
            />
            <Image
              src={zoho}
              alt='image'
              style={{ height: '45px', width: '45px' }}
              className='bg-slate-300 p-2 rounded-full'
            />
          </div>
        </div>
      </Sidebar>
    </div>
  );
};

export default SettingsPage;
