import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GLOBAL_STYLES } from "../../utils";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { CheckBoxComponent } from "../CheckBoxComponent";
import { useState } from "react";

export const MultiAutoComplete = ({ placeholder, width, height }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      style={{
        width,
      }}
      className="relative"
    >
      <input
        id={Math.random()}
        style={{
          width: "100%",
          height,
          backgroundColor: GLOBAL_STYLES.whiteBlue,
          paddingLeft: "10px",
          fontSize: "13px",
        }}
        onFocus={() => setIsOpen(true)}
        onBlur={() => setIsOpen(false)}
        value={placeholder}
      />
      {isOpen && (
        <div
          className="absolute left-0 w-full flex flex-col p-2 py-4 gap-5"
          style={{
            backgroundColor: GLOBAL_STYLES.whiteBlue,
          }}
        >
          <CheckBoxComponent id={Math.random()} label="옵션1" />
          <CheckBoxComponent id={Math.random()} label="옵션2" />
          <CheckBoxComponent id={Math.random()} label="옵션3" />
          <CheckBoxComponent id={Math.random()} label="옵션4" />
          <CheckBoxComponent id={Math.random()} label="옵션5" />
        </div>
      )}
      <div className="absolute right-0 top-2">
        <FontAwesomeIcon size="sm" icon={faAngleDown} />
      </div>
    </div>
  );
};
