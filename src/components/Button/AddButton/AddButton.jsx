/* eslint-disable @next/next/no-img-element */
export const AddButton = ({ revert, onClick }) => {
  return (
    <div onClick={onClick}
      className={`${
        revert ? 'bg-[#D9D9D9] text-black' : 'bg-black text-white'
      } font-inter flex items-center px-4 pr-20 py-1 rounded-xl space-x-2`}
    >
      <img
        src={`${revert ? '/icons/add-black.svg' : '/icons/plus.svg'}`}
        alt='plus'
      />
      <p>Add</p>
    </div>
  );
};
