import Sidebar from '../../components/Sidebar/Sidebar';
import { Tag } from '../../components/Tag/Tag';

const InquiriesPage = () => {
  return (
    <div className='bg-[#212121] text-white font-inter'>
      <Sidebar>
        <div className='px-14 py-8 flex justify-between font-inter'>
          <div className='flex flex-col'>
            <div className='bg-white text-black flex flex-col p-4 rounded-3xl max-w-md'>
              <p>Is the meal packaging reusable/recyclable? </p>
              <div className='flex space-x-2 mt-4'>
                <Tag name='Sana Saeed' color='#A7FD99' />
                <Tag name='Pre-Sales' color='#FFAA9E' />
              </div>
            </div>
            <div></div>
          </div>
          <div>there</div>
        </div>
      </Sidebar>
    </div>
  );
};

export default InquiriesPage;
