import styled, { keyframes } from "styled-components";

const animate = keyframes`
  0%, 80%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1.0);
  }
`;

const LoaderContainer = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const Dot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: white;
  animation: ${animate} 1.4s infinite ease-in-out both;
  animation-delay: ${(props) => props.delay};
`;

const Loader = () => {
  return (
    <LoaderContainer>
      <Dot delay={"0s"} />
      <Dot delay={"0.2s"} />
      <Dot delay={"0.4s"} />
    </LoaderContainer>
  );
};

export default Loader;
