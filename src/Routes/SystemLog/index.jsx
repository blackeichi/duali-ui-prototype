import { styled } from "styled-components";
import { Frame, ModalBox } from "../../Components/styles";
import { DateTimeComponent } from "../../Components/Samples/DateTime";
import { Button } from "../../Components/Samples/Button";
import { Input } from "../../Components/Samples/Input";
import { Table } from "../../Components/Table";
import { Select } from "../../Components/Samples/Select";
import { useState } from "react";
import { Overlay } from "../../Components/Overlay";

export const SystemLog = () => {
  const [open, setOpen] = useState(false);
  return (
    <Frame>
      <Overlay isOpen={open} setIsOpen={setOpen}>
        <ModalBox
          style={{
            width: "300px",
            height: "200px",
          }}
        >
          <span>상세 내용</span>
        </ModalBox>
      </Overlay>
      <ToolbarBox>
        <DateTimeComponent height="40px" width="160px" placeholder="시작시간" />
        <DateTimeComponent height="40px" width="160px" placeholder="종료시간" />
        <Select width="160px" height="40px" placeholder="유형" />
        <Select width="160px" height="40px" placeholder="세부 유형" />
        <Input height="40px" width="160px" placeholder="검색" />
        <Button height="40px" width="60px" text="조회" />
      </ToolbarBox>
      <Table
        headers={["발생 시간", "계정", "유형", "세부 유형", "메시지", "상세"]}
      />
      <TableBtns>
        <Button
          height="40px"
          width="70px"
          text="상세 보기"
          onClick={() => setOpen(true)}
        />
      </TableBtns>
    </Frame>
  );
};

const ToolbarBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const TableBtns = styled.div`
  position: fixed;
  z-index: 10;
  display: flex;
  align-items: center;
  gap: 20px;
  right: 30px;
  top: 200px;
`;
