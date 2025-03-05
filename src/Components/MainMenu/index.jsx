import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router";
import { styled } from "styled-components";

export const MainMenu = ({ text, subMenus }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <MainMenuBox
      onHoverStart={() => setIsOpen(true)}
      onHoverEnd={() => setIsOpen(false)}
    >
      <span>{text}</span>
      {isOpen && (
        <SubMenuBox>
          {subMenus.map((item) => (
            <span
              key={Math.random()}
              className="text-sm font-normal whitespace-nowrap cursor-pointer"
              onClick={() => navigate(item.url)}
            >
              {item.text}
            </span>
          ))}
        </SubMenuBox>
      )}
    </MainMenuBox>
  );
};

const MainMenuBox = styled(motion.div)`
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
`;
const SubMenuBox = styled.div`
  position: absolute;
  top: 69px;
  padding: 20px;
  border: 1px solid lightgray;
  border-radius: 10px;
  border-top-right-radius: 0;
  border-top-left-radius: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: white;
`;
