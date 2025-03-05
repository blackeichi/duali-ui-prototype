import { styled } from "styled-components";
import { Frame, ModalBox } from "../../Components/styles";
import { Button } from "../../Components/Samples/Button";
import { Input } from "../../Components/Samples/Input";
import { Table } from "../../Components/Table";
import { useState } from "react";
import { Overlay } from "../../Components/Overlay";
import { Select } from "../../Components/Samples/Select";

export const Accounts = () => {
  const [isDel, setIsDel] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  return (
    <Frame>
      <Overlay isOpen={isEdit} setIsOpen={setIsEdit}>
        <ModalBox
          style={{
            width: "500px",
            height: "300px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Input width="300px" height="40px" placeholder="이름" />
          <Input width="300px" height="40px" placeholder="비밀번호" />
          <Select width="300px" height="40px" placeholder="계정 유형" />
          <div className="flex gap-5">
            <Button
              height="40px"
              width="60px"
              text="취소"
              onClick={() => setIsEdit(false)}
            />
            <Button
              height="40px"
              width="60px"
              text="저장"
              onClick={() => setIsEdit(false)}
            />
          </div>
        </ModalBox>
      </Overlay>
      <Overlay isOpen={isDel} setIsOpen={setIsDel}>
        <ModalBox
          style={{
            width: "300px",
            height: "200px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div></div>
          <span>정말로 삭제하시겠습니까?</span>
          <div className="flex gap-5">
            <Button
              height="40px"
              width="60px"
              text="취소"
              onClick={() => setIsDel(false)}
            />
            <Button
              height="40px"
              width="60px"
              text="삭제"
              onClick={() => setIsDel(false)}
            />
          </div>
        </ModalBox>
      </Overlay>
      <ToolbarBox>
        <div className="flex items-center gap-[10px]">
          <Input height="40px" width="160px" placeholder="계정 유형" />
          <Input height="40px" width="160px" placeholder="이름" />
          <Button height="40px" width="60px" text="조회" />
        </div>
        <div className="flex items-center gap-[10px]">
          <Button
            height="40px"
            width="60px"
            text="추가"
            onClick={() => setIsEdit(true)}
          />
          <Button
            height="40px"
            width="60px"
            text="삭제"
            onClick={() => setIsDel(true)}
          />
        </div>
      </ToolbarBox>
      <Table headers={["이름", "계정 유형"]} gap />
      <TableBtns>
        <Button
          height="40px"
          width="60px"
          text="수정"
          onClick={() => setIsEdit(true)}
        />
        <Button
          height="40px"
          width="60px"
          text="삭제"
          onClick={() => setIsDel(true)}
        />
      </TableBtns>
    </Frame>
  );
};
const ToolbarBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
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
