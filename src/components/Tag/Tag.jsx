export const Tag = ({ color, name }) => {
  return (
    <div style={{background: color}} className={`px-4 py-1 rounded-xl`}>
      <p>{name}</p>
    </div>
  );
};
