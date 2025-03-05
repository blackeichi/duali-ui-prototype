import { styled } from "styled-components";
import { Table } from "../../Components/Table";
import { Input } from "../../Components/Samples/Input";
import { Button } from "../../Components/Samples/Button";
import { MultiSelect } from "../../Components/Samples/MultiSelect";
import { Overlay } from "../../Components/Overlay";
import { useState } from "react";
import { ModalBox } from "../../Components/styles";
import { Tree } from "../../Components/Samples/Tree";
import { useNavigate } from "react-router";
import { CheckBoxComponent } from "../../Components/CheckBoxComponent";
import { DateTimeComponent } from "../../Components/Samples/DateTime";
import { DateComponent } from "../../Components/Samples/Date";

export const Device = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [isTransmit, setIsTransmit] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [isRecovery, setIsRecovery] = useState(false);
  const [recoveryCheck, setRecoveryCheck] = useState(false);
  const [openReview, setOpenReview] = useState(0);
  return (
    <DeviceBox>
      <Overlay isOpen={openReview} setIsOpen={setOpenReview}>
        <ModalBox
          style={{
            width: "1100px",
          }}
        >
          <div className="flex justify-between">
            <span>단말기 이름</span>
            <DateComponent height="30px" />
          </div>
          {openReview === 1 ? (
            <Table headers={["", "", "DB", "", "단말기", ""]} height="580px">
              <div className="w-full flex flex-col p-3 py-5 gap-10">
                <span>메뉴정책번호</span>
                <span>메뉴정책명</span>
                <span>적용시작일</span>
                <span>외부업체코드</span>
                <span>메뉴이미지URL</span>
                <span>조식 메뉴유형</span>
                <span>조식 메뉴</span>
                <span>중식 메뉴유형</span>
                <span>중식 메뉴</span>
                <span>석식 메뉴유형</span>
                <span>석식 메뉴</span>
                <span>야식 메뉴유형</span>
                <span>야식 메뉴</span>
              </div>
            </Table>
          ) : openReview === 2 ? (
            <Table headers={["", "", "DB", "", "단말기", ""]} height="580px">
              <div className="w-full flex flex-col p-3 py-5 gap-10">
                <span>예외메뉴 정책번호</span>
                <span>예외메뉴정책명</span>
                <span>적용시작일</span>
                <span>외부업체코드</span>
                <span>메뉴이미지 URL</span>
                <span>조식 메뉴유형</span>
                <span>조식 메뉴</span>
                <span>중식 메뉴유형</span>
                <span>중식 메뉴</span>
                <span>석식 메뉴유형</span>
                <span>석식 메뉴</span>
                <span>야식 메뉴유형</span>
                <span>야식 메뉴</span>
              </div>
            </Table>
          ) : openReview === 3 ? (
            <Table headers={["", "", "DB", "", "단말기", ""]} height="580px">
              <div className="w-full flex flex-col p-3 py-5 gap-10">
                <span>적용일자</span>
                <span>스케줄</span>
              </div>
            </Table>
          ) : openReview === 4 ? (
            <Table headers={["", "", "DB", "", "단말기", ""]} height="580px">
              <div className="w-full flex flex-col p-3 py-5 gap-10">
                <span>메뉴정책번호</span>
                <span>정책 구분</span>
                <span>외부업체코드</span>
                <span>조식 메뉴유형</span>
                <span>조식 메뉴</span>
                <span>중식 메뉴유형</span>
                <span>중식 메뉴</span>
                <span>석식 메뉴유형</span>
                <span>석식 메뉴</span>
                <span>야식 메뉴유형</span>
                <span>야식 메뉴</span>
              </div>
            </Table>
          ) : null}
        </ModalBox>
      </Overlay>
      <Overlay isOpen={open} setIsOpen={setOpen}>
        <ModalBox>
          <Input height="40px" width="200px" placeholder="식당목록" />
          <Tree width="100%" height="100%" text="식당 목록" />
        </ModalBox>
      </Overlay>
      <Overlay isOpen={isRecovery} setIsOpen={setIsRecovery}>
        <ModalBox
          style={{
            alignItems: "center",
            justifyContent: "center",
            width: "1300px",
            height: "700px",
          }}
        >
          <Overlay isOpen={recoveryCheck} setIsOpen={setRecoveryCheck}>
            <ModalBox
              style={{
                alignItems: "center",
                justifyContent: "center",
                width: "400px",
                height: "230px",
              }}
            >
              <span>
                이벤트 복구가 진행되는 동안 서버에 부하가 발생할 수 있습니다.
                그래도 진행하시겠습니까?
              </span>
              <div className="flex gap-6 mt-7">
                <Button
                  height="40px"
                  width="80px"
                  text="취소"
                  onClick={() => setRecoveryCheck(false)}
                />
                <Button
                  height="40px"
                  width="80px"
                  text="복구"
                  onClick={() => setRecoveryCheck(false)}
                />
              </div>
            </ModalBox>
          </Overlay>
          <div className="flex flex-col w-full gap-5 h-full relative">
            <ToolbarBox>
              <div className="flex items-center gap-[10px]">
                <DateTimeComponent
                  width="200px"
                  height="40px"
                  placeholder="시작시간"
                />
                <DateTimeComponent
                  width="200px"
                  height="40px"
                  placeholder="종료시간"
                />
                <Button height="40px" width="40px" text="조회" />
              </div>
              <div className="flex items-center gap-[10px]">
                <Button
                  height="40px"
                  width="50px"
                  text="복구"
                  onClick={() => setRecoveryCheck(true)}
                />
                <Button height="40px" width="50px" text="중지" />
                <Button height="40px" width="50px" text="초기화" />
              </div>
            </ToolbarBox>
            <Table
              headers={[
                "식당",
                "단말기 이름",
                "단말기 ID",
                "데이터베이스의 카운트",
                "단말기에서의 카운트",
                "단말기에 처음 등록된 이벤트 날짜",
                "단말기 DB의 모든 이벤트 카운트",
                "진행상황",
                "",
              ]}
              gap
            />
            <div className="absolute right-3 top-28">
              <Button
                height="40px"
                width="50px"
                text="복구"
                onClick={() => setRecoveryCheck(true)}
              />
            </div>
          </div>

          <div className="flex gap-6 mt-5">
            <Button
              height="40px"
              width="80px"
              text="취소"
              onClick={() => setIsRecovery(false)}
            />
            <Button
              height="40px"
              width="80px"
              text="업데이트"
              onClick={() => setIsRecovery(false)}
            />
          </div>
        </ModalBox>
      </Overlay>
      <Overlay isOpen={isUpdate} setIsOpen={setIsUpdate}>
        <ModalBox
          style={{
            alignItems: "center",
            justifyContent: "center",
            width: "700px",
            height: "500px",
          }}
        >
          <div className="flex flex-col w-full px-5 gap-5 h-full relative">
            <span className="font-bold text-xl">iTouch30A</span>
            <Table headers={["이름", "설명", "", "", "파일 경로"]} />
            <div className="absolute left-8 top-28 w-[560px] flex flex-col gap-7">
              <div className="flex justify-between items-center">
                <span>iTouch30A</span>
                <Button height="40px" width="80px" text="파일 찾기" />
              </div>
              <div className="flex justify-between items-center">
                <span>softwareSDK</span>
                <Button height="40px" width="80px" text="파일 찾기" />
              </div>
              <div className="flex justify-between items-center">
                <span>nfcModule</span>
                <Button height="40px" width="80px" text="파일 찾기" />
              </div>
            </div>
          </div>

          <div className="flex gap-6 mt-5">
            <Button
              height="40px"
              width="80px"
              text="취소"
              onClick={() => setIsUpdate(false)}
            />
            <Button
              height="40px"
              width="80px"
              text="업데이트"
              onClick={() => setIsUpdate(false)}
            />
          </div>
        </ModalBox>
      </Overlay>
      <Overlay isOpen={isTransmit} setIsOpen={setIsTransmit}>
        <ModalBox
          style={{
            alignItems: "center",
            justifyContent: "center",
            width: "400px",
            height: "500px",
          }}
        >
          <div className="flex flex-col w-full px-12 gap-5">
            <CheckBoxComponent label="단말기 설정 전송" />
            <CheckBoxComponent label="메뉴 정책 전송" />
            <CheckBoxComponent label="예외메뉴정책 전송" />
            <CheckBoxComponent label="가격정책 전송" />
            <CheckBoxComponent label="스케줄 전송" />
            <CheckBoxComponent label="사용자 전송" />
          </div>
          <div className="flex gap-6 mt-14">
            <Button
              height="40px"
              width="80px"
              text="취소"
              onClick={() => setIsTransmit(false)}
            />
            <Button
              height="40px"
              width="80px"
              text="전송"
              onClick={() => setIsTransmit(false)}
            />
          </div>
        </ModalBox>
      </Overlay>
      <Overlay isOpen={isDelete} setIsOpen={setIsDelete}>
        <ModalBox
          style={{
            alignItems: "center",
            justifyContent: "center",
            width: "300px",
            height: "250px",
          }}
        >
          <span>정말로 삭제하시겠습니까?</span>
          <div className="flex gap-6 mt-10">
            <Button
              height="40px"
              width="80px"
              text="취소"
              onClick={() => setIsDelete(false)}
            />
            <Button
              height="40px"
              width="80px"
              text="삭제"
              onClick={() => setIsDelete(false)}
            />
          </div>
        </ModalBox>
      </Overlay>
      <ToolbarBox>
        <div className="flex items-center gap-[10px]">
          <Button
            height="40px"
            width="80px"
            text="식당 목록"
            onClick={() => setOpen(true)}
          />
          <Input height="40px" width="160px" placeholder="검색" />
          <MultiSelect placeholder="운영모드" width="160px" height="40px" />
          <MultiSelect placeholder="연결상태" width="160px" height="40px" />
          <MultiSelect placeholder="단말기 종류" width="160px" height="40px" />
          <MultiSelect placeholder="운영여부" width="160px" height="40px" />
          <Button height="40px" width="40px" text="조회" />
        </div>
        <div className="flex items-center gap-[10px]">
          <Button
            height="40px"
            width="40px"
            text="추가"
            onClick={() => navigate("/device-add")}
          />
          <Button
            height="40px"
            width="40px"
            text="삭제"
            onClick={() => setIsDelete(true)}
          />
          <Button
            height="40px"
            width="50px"
            text="업데이트"
            onClick={() => setIsUpdate(true)}
          />
          <Button
            height="40px"
            width="40px"
            text="복구"
            onClick={() => setIsRecovery(true)}
          />
          <Button height="40px" width="45px" text="재부팅" />
          <Button
            height="40px"
            width="40px"
            text="전송"
            onClick={() => setIsTransmit(true)}
          />
          <Button height="40px" width="40px" text="중지" />
          <Button height="40px" width="60px" text="전송초기화" />
          <Button height="40px" width="50px" text="갱신" />
        </div>
      </ToolbarBox>
      <Table
        headers={[
          "식당명",
          "단말기 이름",
          "단말기 ID",
          "작동모드",
          "F/W 버전",
          "단말기 종류",
          "연결 상태",
          "운영모드",
          "운영여부",
          "진행상태",
        ]}
        gap
        rightClickMenu={() => (
          <>
            <span className="cursor-pointer" onClick={() => setOpenReview(1)}>
              메뉴정책조회
            </span>
            <span className="cursor-pointer" onClick={() => setOpenReview(2)}>
              예외메뉴정책 조회
            </span>
            <span className="cursor-pointer" onClick={() => setOpenReview(3)}>
              스케쥴 조회
            </span>
            <span className="cursor-pointer" onClick={() => setOpenReview(4)}>
              메뉴 비교 조회
            </span>
          </>
        )}
      />
      <TableBtns>
        <Button
          height="40px"
          width="40px"
          text="수정"
          onClick={() => navigate("/device-edit")}
        />
        <Button
          height="40px"
          width="40px"
          text="전송"
          onClick={() => setIsTransmit(true)}
        />
        <Button height="40px" width="45px" text="재부팅" />
        <Button height="40px" width="60px" text="히스토리" />
        <Button
          height="40px"
          width="60px"
          text="업데이트"
          onClick={() => setIsUpdate(true)}
        />
        <Button
          height="40px"
          width="40px"
          text="복구"
          onClick={() => setIsRecovery(true)}
        />
      </TableBtns>
    </DeviceBox>
  );
};

const DeviceBox = styled.div`
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

const TableBtns = styled.div`
  position: fixed;
  z-index: 10;
  display: flex;
  align-items: center;
  gap: 10px;
  right: 30px;
  top: 200px;
`;
