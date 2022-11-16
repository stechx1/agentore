import { InquiryBox } from '../../collections';
import Sidebar from '../../components/Sidebar/Sidebar';

const InquiriesPage = () => {
  const tagsInquiry1 = [
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
  ];

  const tagsInquiry2 = [
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
  ];
  return (
    <div className='bg-[#212121] text-white font-inter'>
      <Sidebar>
        <div className='px-14 py-8 flex justify-between font-inter'>
          <div className='flex flex-col space-y-4'>
            {/* inquiry box*/}
            <InquiryBox
              para='Is the meal packaging reusable/recyclable?'
              tags={tagsInquiry1}
            />
            <InquiryBox
              para='thanks Mo! and those reusable cooler bags can be returned to be used for future meal drop offs? '
              tags={tagsInquiry2}
            />
            <div></div>
          </div>
          <div>there</div>
        </div>
      </Sidebar>
    </div>
  );
};

export default InquiriesPage;
