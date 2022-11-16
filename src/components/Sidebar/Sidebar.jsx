/* eslint-disable @next/next/no-img-element */
import React from 'react';

export default function Sidebar({ children }) {
  return (
    <div className='flex'>
      <div className='flex flex-col h-screen p-3 bg-[#111111] text-white shadow w-60 justify-between'>
        <div className='space-y-3'>
          <div className='flex items-center'>
            <img src="/icons/man-icon.png" alt="logo" />
          </div>
          <div className='flex-1'>
            <ul className='pt-2 pb-4 space-y-1 text-sm'>
              <li className='rounded-sm'>
                <a
                  href='#'
                  className='flex items-center p-2 space-x-3 rounded-md'
                >
                  <img src='/icons/inquiries.svg' alt='inquries icon' />
                  <span>Inquiries</span>
                </a>
              </li>

              {/* <li className='rounded-sm'>
                <a
                  href='#'
                  className='flex items-center p-2 space-x-3 rounded-md'
                >
                  <img src='/icons/settings.svg' alt='settings' />
                  <span>Settings</span>
                </a>
              </li> */}
            </ul>
          </div>
        </div>
        <div className='mb-5'>
          <a href='#' className='flex items-center p-2 space-x-3 rounded-md'>
            <img src='/icons/settings.svg' alt='settings' />
            <span>Settings</span>
          </a>
        </div>
      </div>
      {children}
      {/* <div className='container mx-auto mt-12'>
        <div className='grid grid-cols-1 gap-6 mb-6 lg:grid-cols-3'>
          <div className='w-full px-4 py-5 bg-white rounded-lg shadow'>
            <div className='text-sm font-medium text-gray-500 truncate'>
              Total users
            </div>
            <div className='mt-1 text-3xl font-semibold text-gray-900'>
              12,00
            </div>
          </div>
          <div className='w-full px-4 py-5 bg-white rounded-lg shadow'>
            <div className='text-sm font-medium text-gray-500 truncate'>
              Total Profit
            </div>
            <div className='mt-1 text-3xl font-semibold text-gray-900'>
              $ 450k
            </div>
          </div>
          <div className='w-full px-4 py-5 bg-white rounded-lg shadow'>
            <div className='text-sm font-medium text-gray-500 truncate'>
              Total Orders
            </div>
            <div className='mt-1 text-3xl font-semibold text-gray-900'>20k</div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
