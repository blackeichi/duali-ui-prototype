import { GLOBAL_STYLES } from "../../utils";

export const Select = ({ placeholder, width, height }) => {
  return (
    <select
      id={Math.random()}
      style={{
        width,
        height,
        backgroundColor: GLOBAL_STYLES.red,
        paddingLeft: "10px",
        fontSize: "13px",
      }}
    >
      <option style={{ display: "none" }} value="0">
        {placeholder}
      </option>
      <option value="1">옵션1</option>
      <option value="2">옵션2</option>
      <option value="3">옵션3</option>
      <option value="4">옵션4</option>
      <option value="5">옵션5</option>
      <option value="6">옵션6</option>
      <option value="7">옵션7</option>
    </select>
  );
};
