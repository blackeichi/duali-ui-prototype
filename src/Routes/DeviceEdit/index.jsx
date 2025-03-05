import { useNavigate } from "react-router";
import { Frame } from "../../Components/styles";
import { Input } from "../../Components/Samples/Input";
import { AutoComplete } from "../../Components/Samples/AutoComplete";
import { Slider } from "../../Components/Samples/Slider";
import { Select } from "../../Components/Samples/Select";
import { Switch } from "../../Components/Samples/Switch";
import { Button } from "../../Components/Samples/Button";

export const DeviceEdit = () => {
  const navigate = useNavigate();
  return (
    <Frame
      style={{
        justifyContent: "center",
        alignItems: "center",
        gap: "28px",
      }}
    >
      <div className="flex w-[920px] gap-7">
        <Input height="50px" width="450px" placeholder="ID" />
        <Input height="50px" width="450px" placeholder="단말기 표시 메시지 1" />
      </div>
      <div className="flex w-[920px] gap-7">
        <Input height="50px" width="450px" placeholder="이름" />
        <Input height="50px" width="450px" placeholder="단말기 표시 메시지 2" />
      </div>
      <div className="flex w-[920px] gap-7">
        <AutoComplete height="50px" width="450px" placeholder="식당 이름" />
        <Slider placeholder="볼륨 크기" width="450px" />
      </div>
      <div className="flex w-[920px] gap-7">
        <Select height="50px" width="450px" placeholder="종류" />
        <Input height="50px" width="450px" placeholder="IP" />
      </div>
      <div className="flex w-[920px] gap-7">
        <Select height="50px" width="450px" placeholder="운영모드" />
        <Input height="50px" width="450px" placeholder="MAC" />
      </div>
      <div className="flex w-[920px] gap-7">
        <Switch placeholder="운영여부" />
      </div>
      <div className="flex gap-6 mt-10">
        <Button
          height="50px"
          width="100px"
          text="취소"
          onClick={() => navigate("/device")}
        />
        <Button
          height="50px"
          width="100px"
          text="수정"
          onClick={() => navigate("/device")}
        />
      </div>
    </Frame>
  );
};
