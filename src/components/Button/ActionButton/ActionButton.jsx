/* eslint-disable @next/next/no-img-element */
export const ActionButton = ({ children, color, iconSrc }) => {
  return (
    <div
      style={{ background: color }}
      className='flex justify-between text-black px-5 py-2 rounded-full items-center w-full space-x-6'
    >
      <p>{children}</p>
      <img width={20} height={20} src={iconSrc} alt='arrow icon' />
    </div>
  );
};
