/* eslint-disable @next/next/no-img-element */
export const Button = ({ paddingX, type, onClick, children }) => {
  if (type === 'secondary') {
    return (
      <div
        onClick={onClick}
        className='text-primary border border-primary rounded-full px-5 py-2 flex space-x-2 hover:cursor-pointer hover:bg-primary hover:text-black'
      >
        {children}
      </div>
    );
  } else {
    return (
      <div
        onClick={onClick}
        className={`bg-primary text-black px-5 py-2 rounded-full flex ${
          paddingX ? `space-x-${paddingX}` : 'space-x-14'
        }  items-center hover:cursor-pointer hover:bg-primary`}
      >
        <button>{children}</button>
        <img width={20} height={20} src='/icons/arrow-icon.png' alt='arrow' />
      </div>
    );
  }
};
