import { useEffect, useState } from "react";
import { ThemeProvider, createGlobalStyle, styled } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { MainMenu } from "./Components/MainMenu";
import "./index.css";
import { Route, Routes, useLocation, useNavigate } from "react-router";
import { Monitoring } from "./Routes/Monitoring";
import { Login } from "./Routes/Login";
import { GLOBAL_STYLES } from "./utils";
import { User } from "./Routes/User";
import { DeviceMonitoring } from "./Routes/DeviceMonitoring";
import { HelmetComponent } from "./Components/HelmetComponent";
import { Device } from "./Routes/Device";
import { DeviceAdd } from "./Routes/DeviceAdd";
import { DeviceEdit } from "./Routes/DeviceEdit";
import { UnidentifiedDevice } from "./Routes/UnidentifiedDevice";
import { SystemLog } from "./Routes/SystemLog";
import { EventProcedure } from "./Routes/EventProcedure";
import { ReportPage } from "./Routes/ReportPage";
import { Accounts } from "./Routes/Accounts";

const GlobalStyles = createGlobalStyle` 
  html, div, span, body{
    margin: 0;
    padding: 0;
    border: 0;
    font-family : "NotoSans";
    box-sizing : border-box;
  }
`;

function App() {
  const [isTop, setIsTop] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("DeMasterPro");
  const { pathname } = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (pathname === "/user") {
      setTitle("사용자");
    } else if (pathname === "/") {
      setTitle("모니터링");
    } else if (pathname === "/device-monitoring") {
      setTitle("단말기 모니터링");
    } else if (pathname === "/login") {
      setTitle("로그인");
    }
  }, [pathname]);
  return (
    <ThemeProvider theme={GLOBAL_STYLES}>
      <GlobalStyles />
      <HelmetComponent title={title} />
      {pathname !== "/login" && (
        <AppHeader isTop={isTop}>
          <motion.img
            className="w-48 cursor-pointer"
            src="/test.webp"
            onHoverStart={() => setIsOpen(true)}
            onHoverEnd={() => setIsOpen(false)}
            onClick={() => navigate("/")}
          />
          {isOpen && (
            <img
              className="w-[800px] fixed left-8 top-[70px]"
              src="/ComponentInfo.png"
            />
          )}
          <div className="flex justify-center items-center gap-4 font-bold text-slate-700 text-lg h-full">
            <MainMenu
              text="모니터링"
              subMenus={[
                { text: "모니터링", url: "/" },
                // { text: "단말기 모니터링", url: "/device-monitoring" },
              ]}
            />
            <MainMenu
              text="사용자"
              subMenus={[{ text: "사용자", url: "/user" }]}
            />
            <MainMenu
              text="단말기"
              subMenus={[
                { text: "단말기", url: "/device" },
                { text: "미등록 단말기", url: "/unidentified-device" },
              ]}
            />
            <MainMenu
              text="리포트"
              subMenus={[
                { text: "리포트", url: "/report" },
                { text: "시스템 로그", url: "/system-log" },
                { text: "이벤트 프로시저", url: "/event-procedure" },
              ]}
            />
            <MainMenu
              text="시스템"
              subMenus={[{ text: "계정", url: "/accounts" }]}
            />
          </div>
          <div className="flex gap-4 items-center text-sm text-slate-500 w-48 justify-end">
            <span>blackeichi</span>
            <FontAwesomeIcon
              icon={faRightFromBracket}
              size="lg"
              onClick={() => navigate("/login")}
              style={{
                cursor: "pointer",
              }}
            />
          </div>
        </AppHeader>
      )}
      <AppContainer>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Monitoring />} />
          <Route path="/device-monitoring" element={<DeviceMonitoring />} />
          <Route path="/user" element={<User />} />
          {/* <Route path="/user-detail" element={<UserDetail />} /> */}
          <Route path="/device" element={<Device />} />
          <Route path="/device-add" element={<DeviceAdd />} />
          <Route path="/device-edit" element={<DeviceEdit />} />
          <Route path="/unidentified-device" element={<UnidentifiedDevice />} />
          <Route path="/report" element={<ReportPage />} />
          <Route path="/system-log" element={<SystemLog />} />
          <Route path="/event-procedure" element={<EventProcedure />} />
          <Route path="/accounts" element={<Accounts />} />
        </Routes>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  padding-top: 70px;
`;
const AppHeader = styled(motion.div)`
  width: 100%;
  height: 70px;
  display: flex;
  position: fixed;
  padding: 0px 30px;
  align-items: center;
  justify-content: space-between;
  border-bottom: ${(props) => (props.isTop ? "1px solid lightgray" : "none")};
  z-index: 100;
  background-color: white;
`;
