import { styled } from "styled-components";
import { Table } from "../../Components/Table";
import { Button } from "../../Components/Samples/Button";
import { Input } from "../../Components/Samples/Input";
import { useState } from "react";
import { Overlay } from "../../Components/Overlay";
import { Tree } from "../../Components/Samples/Tree";
import { ModalBox } from "../../Components/styles";

export const DeviceMonitoring = () => {
  const [open, setOpen] = useState(false);
  return (
    <DeviceMonitoringBox>
      <Overlay isOpen={open} setIsOpen={setOpen}>
        <ModalBox>
          <Input height="40px" width="200px" placeholder="식당목록" />
          <Tree width="100%" height="100%" text="식당 목록" />
        </ModalBox>
      </Overlay>
      <ToolbarBox>
        <FilterBox>
          <Button
            height="40px"
            width="80px"
            text="식당 목록"
            onClick={() => setOpen(true)}
          />
          <Input height="40px" width="200px" placeholder="운영모드" />
          <Input height="40px" width="200px" placeholder="연결상태" />
          <Button height="40px" width="60px" text="조회" />
        </FilterBox>
        <Button height="40px" width="60px" text="갱신" />
      </ToolbarBox>
      <Table
        headers={[
          "연결상태",
          "식당",
          "단말기 이름",
          "단말기 ID",
          "운영상태",
          "마지막 통신시간",
          "저장된 인증매체 수",
          "미전송 이벤트 수",
          "운영모드",
          "현재 메뉴 정책",
          "현재 단가 정책",
          "FW버전",
        ]}
      />
    </DeviceMonitoringBox>
  );
};

const DeviceMonitoringBox = styled.div`
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
const FilterBox = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;
