import styled from "styled-components";
import { useState, useRef, useEffect } from "react";

const Container = styled.div`
  background: var(--color-background);
  margin: 20px;
  position: relative;
  height: ${(props) => props.height};
  transition: height 0.2s ease-in-out;
  border-bottom: 2px solid var(--color-text-dm);
  box-shadow: var(--box-shadow-dm);
  overflow-y: hidden;
`;

const Button = styled.button`
  width: 100%;
  height: 40px;
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  align-items: center;
  color: var(--color-accent);
  font-size: 20px;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: var(--color-background-hover-dm);
  }
`;

const DropBox = ({ contentName, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState("25px");
  const contentRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setHeight(isOpen ? `${contentRef.current.scrollHeight}px` : "40px");
  }, [isOpen]);

  return (
    <Container ref={contentRef} height={height}>
      <Button onClick={toggleMenu}>
        {contentName} {isOpen ? <spna>▲</spna> : <spna>▼</spna>}
      </Button>
      {children}
    </Container>
  );
};

export default DropBox;
