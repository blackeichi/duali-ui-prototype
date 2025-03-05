import { GLOBAL_STYLES } from "../../utils";

export const DateTimeComponent = ({ width, height, placeholder }) => {
  return (
    <div className="relative">
      <input
        type="datetime-local"
        style={{
          width,
          height,
          backgroundColor: GLOBAL_STYLES.darkGreen,
          paddingLeft: "10px",
          fontSize: "13px",
        }}
      />
      {placeholder && (
        <span className="absolute left-1 -top-3 font-bold bg-white text-xs">
          {placeholder}
        </span>
      )}
    </div>
  );
};
