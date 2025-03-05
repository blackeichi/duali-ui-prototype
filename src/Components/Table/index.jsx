import { useState } from "react";
import { styled } from "styled-components";

export const Table = ({
  headers,
  gap,
  height = "100%",
  rightClickMenu,
  children,
}) => {
  const [open, setOpen] = useState(false);
  const [position, setPosion] = useState([0, 0]);
  return (
    <TableBox
      style={{
        height,
        overflow: "scroll",
      }}
      onClick={() => {
        if (rightClickMenu) {
          setOpen(false);
          setPosion([0, 0]);
        }
      }}
    >
      <TableHeader gap={gap}>
        {headers?.map((item) => (
          <span className="whitespace-nowrap" key={Math.random()}>
            {item}
          </span>
        ))}
      </TableHeader>
      <TableBody
        onContextMenu={(event) => {
          if (rightClickMenu) {
            event.preventDefault();
            setPosion([event.pageX, event.pageY]);
            setOpen(true);
          }
        }}
        onBlur={() => setOpen(false)}
      >
        {children}
      </TableBody>
      {open && (
        <div
          className="fixed z-50 bg-white p-4 flex flex-col gap-4"
          style={{
            left: position[0],
            top: position[1],
          }}
          onClick={(event) => event.stopPropagation()}
        >
          {rightClickMenu()}
        </div>
      )}
    </TableBox>
  );
};
const TableBox = styled.div`
  width: 100%;
  height: 100%;
  background-color: lightgray;
  flex-grow: 0;
`;
const TableHeader = styled.div`
  display: flex;
  justify-content: ${({ gap }) => (gap ? "flex-start" : "space-between")};
  align-items: center;
  gap: 50px;
  height: 40px;
  min-width: 100%;
  width: fit-content;
  background-color: gray;
  color: white;
  font-size: 13px;
  padding-right: 20px;
  padding-left: 10px;
`;
const TableBody = styled.div`
  width: 100%;
  height: calc(100% - 40px);
  overflow-y: scroll;
`;
