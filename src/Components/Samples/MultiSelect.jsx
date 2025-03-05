import { useState } from "react";
import { GLOBAL_STYLES } from "../../utils";
import { CheckBoxComponent } from "../CheckBoxComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

export const MultiSelect = ({ placeholder, width, height }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative">
      <input
        id={Math.random()}
        type="reset"
        style={{
          width,
          height,
          backgroundColor: GLOBAL_STYLES.orange,
          paddingRight: `calc(${width} - 70px)`,
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
            backgroundColor: GLOBAL_STYLES.orange,
          }}
        >
          <CheckBoxComponent id={Math.random()} label="옵션1" />
          <CheckBoxComponent id={Math.random()} label="옵션2" />
          <CheckBoxComponent id={Math.random()} label="옵션3" />
          <CheckBoxComponent id={Math.random()} label="옵션4" />
          <CheckBoxComponent id={Math.random()} label="옵션5" />
        </div>
      )}
      <div className="absolute right-0 top-3">
        <FontAwesomeIcon size="sm" icon={faAngleDown} />
      </div>
    </div>
  );
};
