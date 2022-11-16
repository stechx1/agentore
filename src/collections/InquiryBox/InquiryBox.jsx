import { Tag, AddButton } from '../../components';

export const InquiryBox = ({ para, tags }) => {
  return (
    <div className='bg-white text-black flex flex-col p-5 pr-16 rounded-3xl max-w-2xl justify-between'>
      <p>{para}</p>
      <div className='flex space-x-2 mt-4 items-center'>
        {tags.map((tag) => (
          <Tag name={tag.name} color={tag.color} key={tag.id} />
        ))}
        <AddButton />
      </div>
    </div>
  );
};
