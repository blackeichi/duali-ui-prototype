import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { styled } from "styled-components";

export const CheckBoxComponent = ({ id, label }) => {
  return (
    <CheckBoxContainer>
      <BoxOfCheckBox>
        <input
          type="checkbox"
          onChange={(event) => {
            setValue(event.target.checked);
          }}
          id={id}
          style={{ display: "none" }}
        />
        <StyledCheckBox
          htmlFor={id}
          onClick={(event) => {
            event.stopPropagation();
          }}
        >
          <CheckBoxIcon>
            <FontAwesomeIcon icon={faCheck} />
          </CheckBoxIcon>
        </StyledCheckBox>
      </BoxOfCheckBox>
      {label && <StyledLabel htmlFor={id}>{label}</StyledLabel>}
    </CheckBoxContainer>
  );
};

const CheckBoxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: fit-content;
`;
const BoxOfCheckBox = styled.div`
  padding-left: 1px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
`;
const StyledCheckBox = styled.label`
  accent-color: black;
  cursor: pointer;
  width: 20px;
  height: 20px;
  z-index: 1;
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;
const CheckBoxIcon = styled(motion.div)`
  width: 100%;
  height: 100%;
  background-color: lightgray;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const StyledLabel = styled.label`
  font-size: 12px;
  font-weight: bold;
  color: black;
  cursor: pointer;
`;
