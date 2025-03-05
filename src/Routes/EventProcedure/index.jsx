import { styled } from "styled-components";
import { Frame } from "../../Components/styles";
import { Table } from "../../Components/Table";
import { DateTimeComponent } from "../../Components/Samples/DateTime";
import { Button } from "../../Components/Samples/Button";
import { Input } from "../../Components/Samples/Input";
import { MultiAutoComplete } from "../../Components/Samples/MultiAutoComplete";
import { Select } from "../../Components/Samples/Select";
import { MultiSelect } from "../../Components/Samples/MultiSelect";

export const EventProcedure = () => {
  return (
    <Frame>
      <ToolbarBox>
        <div className="flex gap-[10px] items-center">
          <DateTimeComponent
            height="40px"
            width="160px"
            placeholder="시작시간"
          />
          <DateTimeComponent
            height="40px"
            width="160px"
            placeholder="종료시간"
          />
          <MultiAutoComplete
            width="160px"
            height="40px"
            placeholder="단말기 정보"
          />
          <MultiAutoComplete
            width="160px"
            height="40px"
            placeholder="이벤트 유형"
          />
          <Input height="40px" width="160px" placeholder="반환 메시지" />
          <Input height="40px" width="160px" placeholder="매체발급번호" />
        </div>
        <div className="flex gap-[10px] items-center">
          <MultiSelect width="160px" height="40px" placeholder="식사 유형" />
          <MultiSelect
            width="160px"
            height="40px"
            placeholder="인증매체 유형"
          />
          <MultiSelect
            width="160px"
            height="40px"
            placeholder="메뉴 정책 구분"
          />
          <Select width="160px" height="40px" placeholder="반환 코드" />
          <Input height="40px" width="160px" placeholder="사용자이름" />
          <Input height="40px" width="160px" placeholder="카드ID" />
          <Button height="40px" width="60px" text="조회" />
        </div>
      </ToolbarBox>
      <Table
        headers={[
          "이벤트 발생 시간",
          "이벤트 유형",
          "RID",
          "단말기 이름",
          "반환 코드",
          "반환 메시지",
          "마지막 전송시간",
          "식당 이름",
          "식사 유형",
          "메뉴 구분 코드",
          "식사 건수",
          "메뉴단가",
          "메뉴구분",
          "메뉴정책번호",
          "메뉴정책명",
          "인증매체유형",
          "토큰일련번호",
          "오프라인식사여부",
          "매체발급번호",
          "카드상태",
          "카드ID",
          "회사코드",
          "사원코드",
          "사원번호",
          "사용자 이름",
          "식사일자",
        ]}
      />
    </Frame>
  );
};
const ToolbarBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
`;
const TableBtns = styled.div`
  position: fixed;
  z-index: 10;
  display: flex;
  align-items: center;
  gap: 20px;
  right: 30px;
  top: 250px;
`;
