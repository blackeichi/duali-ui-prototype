import { Table } from "../../Components/Table";
import { Button } from "../../Components/Samples/Button";

export const Monitoring = () => {
  return (
    <div className="w-full h-full flex gap-4 p-5">
      <div className="w-1/2 h-full flex flex-col gap-4 overflow-hidden">
        <div className="flex-shrink-0 flex gap-3 items-center">
          <span>정상 이벤트</span>
          <Button text="초기화 버튼" height="30px" width="100px" />
        </div>
        <Table
          headers={[
            "이벤트 발생시간",
            "이벤트 유형",
            "식사 유형",
            "식당이름",
            "단말기 이름",
            "사용자 이름",
            "회사코드",
            "사원번호",
            "식사 건수",
          ]}
        />
      </div>
      <div className="w-1/2 h-full flex flex-col gap-4 overflow-hidden">
        <div className="flex-shrink-0 flex gap-3 items-center">
          <span>에러 이벤트</span>
          <Button text="초기화 버튼" height="30px" width="100px" />
        </div>
        <Table
          headers={[
            "이벤트 발생시간",
            "이벤트 유형",
            "식사 유형",
            "식당이름",
            "단말기 이름",
            "사용자 이름",
            "회사코드",
            "사원번호",
            "식사 건수",
          ]}
        />
      </div>
    </div>
  );
};
