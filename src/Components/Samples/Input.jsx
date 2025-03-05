import { GLOBAL_STYLES } from "../../utils";

export const Input = ({ placeholder, width, height }) => {
  return (
    <input
      placeholder={placeholder}
      style={{
        width,
        height,
        backgroundColor: GLOBAL_STYLES.yellow,
        paddingLeft: "10px",
        fontSize: "13px",
      }}
    />
  );
};
