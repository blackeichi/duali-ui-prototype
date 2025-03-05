import { styled } from "styled-components";
import { Table } from "../../Components/Table";
import { Frame } from "../../Components/styles";
import { Input } from "../../Components/Samples/Input";
import { Button } from "../../Components/Samples/Button";
import { DateTimeComponent } from "../../Components/Samples/DateTime";
import { MultiAutoComplete } from "../../Components/Samples/MultiAutoComplete";
import { MultiSelect } from "../../Components/Samples/MultiSelect";

export const ReportPage = () => {
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
          <MultiSelect width="160px" height="40px" placeholder="식사유형" />
        </div>
        <div className="flex gap-[10px] items-center">
          <MultiSelect width="160px" height="40px" placeholder="인증매체유형" />
          <MultiSelect width="160px" height="40px" placeholder="메뉴정책구분" />
          <Input height="40px" width="160px" placeholder="사용자 이름" />
          <Input height="40px" width="160px" placeholder="카드ID" />
          <Input height="40px" width="160px" placeholder="매체발급번호" />
          <Button height="40px" width="60px" text="조회" />
        </div>
      </ToolbarBox>
      <Table
        headers={[
          "이벤트발생시간",
          "이벤트유형",
          "RID",
          "단말기이름",
          "식당이름",
          "식사유형",
          "메뉴구분코드",
          "식사건수",
          "메뉴단가",
          "예외일련번호",
          "메뉴정책번호",
          "메뉴정책명",
          "인증매체유형",
          "토큰일련번호",
          "오프라인식사여부",
          "매체발급번호",
          "카드상태",
          "카드ID",
          "회사코드",
          "사원번호",
          "사용자이름",
          "식사일자",
        ]}
        gap
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
