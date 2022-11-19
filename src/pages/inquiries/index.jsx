import { InquiryBox } from '../../collections';
import React, { useState } from 'react';
import {
  ActionButton,
  AddButton,
  Button,
  // DatePicker,
  Tag,
} from '../../components';
import Sidebar from '../../components/Sidebar/Sidebar';
import { CompactPicker } from 'react-color';

const InquiriesPage = () => {
  const [active, setActive] = useState(false);
  const [color, setColor] = useState('#ccc');
  const [childActive, setChildActive] = useState(false);
  const [newDropdownValue, setNewDropdownValue] = useState('');

  const [tagsInquiry1, setTagsInquiry1] = useState([
    {
      id: 1,
      name: 'Packaging',
      color: '#A7FD99',
    },
    {
      id: 2,
      name: 'Pre-Sales',
      color: '#FFAA9E',
    },
  ]);

  const [dropdownTags1, setDropdownTags1] = useState([
    {
      id: 1,
      name: 'Packaging',
      color: '#A7FD99',
    },
    {
      id: 2,
      name: 'Pre-Sales',
      color: '#FFAA9E',
    },
  ]);

  const [tagsInquiry2, setTagsInquiry2] = useState([
    {
      id: 1,
      name: 'Packaging',
      color: '#A7FD99',
    },
    {
      id: 2,
      name: 'Pre-Sales',
      color: '#FFAA9E',
    },
    {
      id: 3,
      name: 'Website Bug',
      color: '#9EFFF9',
    },
  ]);

  const [dropdownTags2, setDropdownTags2] = useState([
    {
      id: 1,
      name: 'Packaging',
      color: '#A7FD99',
    },
    {
      id: 2,
      name: 'Pre-Sales',
      color: '#FFAA9E',
    },
    {
      id: 3,
      name: 'Website Bug',
      color: '#9EFFF9',
    },
  ]);

  const [tagsInquiry3, setTagsInquiry3] = useState([
    {
      id: 1,
      name: 'Website Bug (2)',
      color: '#9EFFF9',
      offlabel: false,
    },
    {
      id: 2,
      name: 'Pre-Sales (201)',
      color: '#FFAA9E',
      offlabel: false,
    },
    {
      id: 3,
      name: 'Packaging (15)',
      color: '#A7FD99',
      offlabel: false,
    },
    {
      id: 4,
      name: 'Off Label Filter (67)',
      color: '#A7FD99',
      offlabel: true,
    },
  ]);

  const [dropdownTags3, setDropdownTags3] = useState([
    {
      id: 1,
      name: 'Website Bug (2)',
      color: '#9EFFF9',
      offlabel: false,
    },
    {
      id: 2,
      name: 'Pre-Sales (201)',
      color: '#FFAA9E',
      offlabel: false,
    },
    {
      id: 3,
      name: 'Packaging (15)',
      color: '#A7FD99',
      offlabel: false,
    },
    {
      id: 4,
      name: 'Off Label Filter (67)',
      color: '#A7FD99',
      offlabel: true,
    },
  ]);

  const addOnTagsInquiry3 = (tag) => {
    setTagsInquiry3([
      ...tagsInquiry3,
      {
        id: tagsInquiry3.length + 1,
        name: tag.name,
        color: tag.color,
        offlabel: tag?.offlabel | false,
      },
    ]);
    setActive(false);
  };

  const onAddNewDropdownValue = (e) => {
    if (newDropdownValue && e.key == 'Enter') {
      setDropdownTags3([
        ...dropdownTags3,
        { id: dropdownTags3.length + 1, name: newDropdownValue, color: color },
      ]);
      setNewDropdownValue('');
      setChildActive(false);
    }
  };

  return (
    <div className='bg-[#212121] text-white font-inter'>
      <Sidebar>
        <div className='px-14 py-8 flex justify-between font-inter space-x-8 inquiryMain'>
          <div className='flex flex-col space-y-4'>
            {/* inquiry box*/}
            <InquiryBox
              para='Is the meal packaging reusable/recyclable?'
              tags={tagsInquiry1}
              setTags={setTagsInquiry1}
              dropdown={dropdownTags1}
              setDropdown={setDropdownTags1}
            />
            <InquiryBox
              para='thanks Mo! and those reusable cooler bags can be returned to be used for future meal drop offs? '
              tags={tagsInquiry2}
              setTags={setTagsInquiry2}
              dropdown={dropdownTags2}
              setDropdown={setDropdownTags2}
            />
          </div>
          <div className='flex flex-col space-y-8'>
            <div className='flex flex-col space-y-4'>
              <ActionButton iconSrc={'/icons/arrow-icon.png'} color='#37F1E6'>
                Train Your Agent
              </ActionButton>
              <ActionButton iconSrc={'/icons/warning.svg'} color='#F1A737'>
                There are (21) inqueries to review
              </ActionButton>
            </div>

            <div className='flex flex-col space-y-4'>
              <h2 className='text-2xl font-bold'>Filter</h2>

              <div
                date-rangepicker
                className='flex items-center dateRangePicker'
              >
                <div class='relative'>
                  <input
                    type='date'
                    id='start'
                    name='start'
                    className='text-black'
                    style={{ borderRadius: '1rem' }}
                  />
                </div>
                <span class='mx-4 text-gray-500'>to</span>
                <div class='relative'>
                  <input
                    type='date'
                    id='end'
                    name='end'
                    className='text-black'
                    style={{ borderRadius: '1rem' }}
                  />
                </div>
              </div>
              <div className='grid grid-cols-2 gap-3'>
                {tagsInquiry3?.map((item) => (
                  <Tag
                    key={Math.random()}
                    name={item?.name}
                    color={item?.color}
                    offlabel={item?.offlabel}
                  />
                ))}
              </div>
              <div className='flex items-center relative'>
                <AddButton
                  revert
                  onClick={() => {
                    setActive((state) => !state);
                    if (childActive == true) {
                      setChildActive(false);
                    }
                  }}
                />
                <div
                  id='dropdown'
                  className={`${
                    active == true ? null : 'hidden'
                  } z-10 w-44 bg-white p-0.5 rounded divide-y divide-gray-100 shadow dark:bg-gray-700 absolute top-9`}
                >
                  <ul
                    className='py-1 text-sm text-gray-700 dark:text-gray-200'
                    aria-labelledby='dropdownDefault'
                  >
                    {dropdownTags3?.map((tag) => {
                      return (
                        <li key={Math.random()}
                          className='m-1 cursor-pointer'
                          onClick={() => addOnTagsInquiry3(tag)}
                        >
                          <Tag 
                            name={tag?.name}
                            color={tag?.color}
                            key={tag?.id}
                            offlabel={tag?.offlabel}
                          />
                        </li>
                      );
                    })}
                    <li
                      className='m-1 cursor-pointer'
                      onClick={() => setChildActive((state) => !state)}
                    >
                      <Tag
                        name='Add a new label'
                        color='white'
                        offlabel='black'
                        bgColor='black'
                      />
                    </li>
                  </ul>
                </div>
                <div
                  className={`${
                    childActive == true ? null : 'hidden'
                  } z-50 flex flex-col absolute top-10`}
                >
                  <input
                    type='text'
                    name='package'
                    className='rounded-sm p-2 text-black'
                    placeholder='write and enter'
                    style={{ borderRadius: '5px' }}
                    onChange={(e) => setNewDropdownValue(e.target.value)}
                    onKeyUp={onAddNewDropdownValue}
                    id='new-dropdown-item'
                    value={newDropdownValue}
                  />
                  <CompactPicker
                    color={color}
                    onChangeComplete={(color) => setColor(color.hex)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Sidebar>
    </div>
  );
};

export default InquiriesPage;
