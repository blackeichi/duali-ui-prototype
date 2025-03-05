import { styled } from "styled-components";
import { GLOBAL_STYLES } from "../../utils";

export const Button = ({ width, height, text, onClick }) => {
  return (
    <StyledButton
      width={width}
      height={height}
      onClick={onClick}
      style={{
        backgroundColor: GLOBAL_STYLES.blue,
      }}
    >
      {text}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  cursor: pointer;
  border-radius: 3px;
  position: relative;
  outline: none;
  font-size: 13px;
`;
