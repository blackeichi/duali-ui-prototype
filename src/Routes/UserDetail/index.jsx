import { styled } from "styled-components";
import { Table } from "../../Components/Table";
import { Input } from "../../Components/Samples/Input";
import { Button } from "../../Components/Samples/Button";
import { useNavigate } from "react-router";
import { useState } from "react";
import { Overlay } from "../../Components/Overlay";
import { ModalBox } from "../../Components/styles";
import { Select } from "../../Components/Samples/Select";
import { AutoComplete } from "../../Components/Samples/AutoComplete";
import { DateComponent } from "../../Components/Samples/Date";

export const UserDetail = () => {
  const navigate = useNavigate();
  const [checkTransmit, setCheckTransmit] = useState(false);
  const [checkExept, setCheckExept] = useState(false);
  return (
    <UserDetailBox>
      <Overlay isOpen={checkTransmit} setIsOpen={setCheckTransmit}>
        <UserModal>
          <div className="flex justify-between">
            <Select placeholder="매체일련번호" height="40px" width="200px" />
            <div className="flex items-center gap-1">
              <AutoComplete placeholder="단말기" height="40px" width="170px" />
              <Button height="40px" width="60px" text="조회" />
            </div>
          </div>
          <Table headers={["", "DB 조회", "단말기 조회"]} height="560px">
            <div className="w-full flex flex-col p-3 py-5 gap-10">
              <span>매체유형</span>
              <span>카드유형</span>
              <span>카드번호</span>
              <span>유효시작일</span>
              <span>유효종료일</span>
              <span>매체상태</span>
              <span>베이스매체 여부</span>
              <span>식사가능여부</span>
              <span>부서카드여부</span>
              <span>식사권한</span>
            </div>
          </Table>
        </UserModal>
      </Overlay>
      <Overlay isOpen={checkExept} setIsOpen={setCheckExept}>
        <UserModal
          style={{
            width: "500px",
            height: "600px",
          }}
        >
          <div className="flex items-center gap-3">
            <DateComponent height="40px" width="170px" placeholder="날짜" />
            <Button height="40px" width="60px" text="조회" />
          </div>
          <Table headers={["", "", "DB 조회", ""]} height="470px">
            <div className="w-full flex flex-col p-3 py-5 gap-10">
              <span>예외일련번호</span>
              <span>적용시작일</span>
              <span>적용종료일</span>
              <span>식사권한</span>
            </div>
          </Table>
        </UserModal>
      </Overlay>
      <ToolbarBox>
        <div className="flex items-center gap-[10px]">
          <Input height="40px" width="200px" placeholder="회사코드" />
          <Input height="40px" width="200px" placeholder="부서명" />
          <Input height="40px" width="200px" placeholder="사번" />
          <Input height="40px" width="200px" placeholder="성명" />
        </div>
        <div className="flex items-center gap-[10px]">
          <Button height="40px" width="100px" text="단말기 전송" />
          <Button
            height="40px"
            width="140px"
            text="단말기 전송여부 확인"
            onClick={() => setCheckTransmit(true)}
          />
          <Button
            height="40px"
            width="130px"
            text="예외식사 권한 확인"
            onClick={() => setCheckExept(true)}
          />
        </div>
      </ToolbarBox>
      <Table
        headers={[
          "매체발급번호",
          "카드유형",
          "카드유형명",
          "카드번호",
          "유효시작일",
          "유효종료일",
          "매체상태",
          "베이스 매체 여부",
          "식사가능여부",
          "부서카드여부",
          "식사권한",
        ]}
      />
      <Button
        height="40px"
        width="130px"
        text="뒤로"
        onClick={() => navigate("/user")}
      />
    </UserDetailBox>
  );
};

const UserDetailBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
`;
const ToolbarBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const UserModal = styled(ModalBox)`
  width: 600px;
`;
