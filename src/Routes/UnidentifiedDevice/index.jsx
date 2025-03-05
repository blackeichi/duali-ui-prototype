import { styled } from "styled-components";
import { Frame, ModalBox } from "../../Components/styles";
import { Input } from "../../Components/Samples/Input";
import { Button } from "../../Components/Samples/Button";
import { Table } from "../../Components/Table";
import { useState } from "react";
import { Overlay } from "../../Components/Overlay";
import { AutoComplete } from "../../Components/Samples/AutoComplete";

export const UnidentifiedDevice = () => {
  const [isAdd, setIsAdd] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  return (
    <Frame>
      <Overlay isOpen={isAdd} setIsOpen={setIsAdd}>
        <ModalBox
          style={{
            width: "400px",
            height: "200px",
            alignItems: "center",
            justifyContent: "center",
            gap: "40px",
          }}
        >
          <AutoComplete placeholder="식당 이름" width="300px" height="40px" />
          <div className="flex gap-4 justify-center">
            <Button
              height="40px"
              width="60px"
              text="취소"
              onClick={() => setIsAdd(false)}
            />
            <Button
              height="40px"
              width="60px"
              text="추가"
              onClick={() => setIsAdd(false)}
            />
          </div>
        </ModalBox>
      </Overlay>
      <Overlay isOpen={isDelete} setIsOpen={setIsDelete}>
        <ModalBox
          style={{
            width: "400px",
            height: "200px",
            alignItems: "center",
            justifyContent: "center",
            gap: "40px",
          }}
        >
          <span>정말로 삭제하시겠습니까?</span>
          <div className="flex gap-4 justify-center">
            <Button
              height="40px"
              width="60px"
              text="취소"
              onClick={() => setIsDelete(false)}
            />
            <Button
              height="40px"
              width="60px"
              text="삭제"
              onClick={() => setIsDelete(false)}
            />
          </div>
        </ModalBox>
      </Overlay>
      <ToolbarBox>
        <div className="flex gap-3 items-center">
          <Input height="40px" width="200px" placeholder="단말기 유형" />
          <Input height="40px" width="200px" placeholder="미확인 유형" />
          <Input height="40px" width="200px" placeholder="검색" />
          <Button height="40px" width="60px" text="조회" />
        </div>
        <div className="flex gap-3 items-center">
          <Button
            height="40px"
            width="60px"
            text="추가"
            onClick={() => setIsAdd(true)}
          />
          <Button
            height="40px"
            width="60px"
            text="삭제"
            onClick={() => setIsDelete(true)}
          />
        </div>
      </ToolbarBox>
      <Table headers={["RID", "단말기유형", "MAC", "미확인 유형"]} gap />
      <TableBtns>
        <Button
          height="40px"
          width="60px"
          text="추가"
          onClick={() => setIsAdd(true)}
        />
        <Button
          height="40px"
          width="60px"
          text="삭제"
          onClick={() => setIsDelete(true)}
        />
      </TableBtns>
    </Frame>
  );
};

const ToolbarBox = styled.div`
  display: flex;
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
