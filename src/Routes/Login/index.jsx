import { styled } from "styled-components";
import { CheckBoxComponent } from "../../Components/CheckBoxComponent";
import { Button } from "../../Components/Samples/Button";
import { useNavigate } from "react-router";
import { Input } from "../../Components/Samples/Input";

export const Login = () => {
  const navigate = useNavigate();
  return (
    <LoginWrapper>
      <div />
      <LoginBox onSubmit={() => navigate("/")}>
        <TitleBox>
          <Logo>
            <img src="/test.webp" className="w-28 mb-2" />
          </Logo>
          <LoginTitle style={{ paddingLeft: "5px", paddingBottom: "5px" }}>
            로그인
          </LoginTitle>
        </TitleBox>
        <Hr />
        <Input width="400px" height="58px" placeholder="이메일" />
        <Input width="400px" height="58px" placeholder="비밀번호" />
        <ButtonBox>
          <Button text="로그인" width="400px" height="53px" />
          <div className="flex justify-between items-center">
            <CheckBoxComponent id="rememberMe" label="ID 기억하기" />
          </div>
        </ButtonBox>
      </LoginBox>
      <div />
    </LoginWrapper>
  );
};

const LoginWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
const LoginBox = styled.form`
  width: 400px;
  height: 550px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
const Logo = styled.div`
  font-size: 16px;
  font-weight: bold;
  display: flex;
  align-items: flex-end;
`;
const LoginTitle = styled.div`
  font-size: 25px;
  font-weight: bold;
  text-transform: uppercase;
`;

const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 10px;
  gap: 25px;
`;

const Hr = styled.div`
  width: 100%;
  height: 3px;
  background-color: ${({ theme }) => theme.grayColor};
  margin: 10px 0;
  box-shadow: ${(props) => props.theme.shadow};
`;
