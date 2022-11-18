import { transparent } from "tailwindcss/colors";

export const Tag = ({ color, bgColor, name, offlabel }) => {
  if (offlabel) {
    return (
      <div
        style={{
          color: color,
          border: `1px solid ${color}`,
          backgroundColor: bgColor,
        }}
        className={`px-4 py-1 rounded-xl bg-transparent`}
      >
        <p>{name}</p>
      </div>
    );
  } else {
    return (
      <div
        style={{ background: color }}
        className={`px-4 py-1 rounded-xl text-black`}
      >
        <p>{name}</p>
      </div>
    );
  }
};
