import { styled } from "styled-components";
import { GLOBAL_STYLES } from "../../utils";

export const Tree = ({ width, height, text }) => {
  return (
    <TreeBox
      style={{
        width,
        height,
        backgroundColor: GLOBAL_STYLES.lightBlue,
      }}
    >
      {text}
    </TreeBox>
  );
};
const TreeBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;
