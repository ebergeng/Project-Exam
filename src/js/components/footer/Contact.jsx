import styled from "styled-components";

const Wrapper = styled.div`
  min-width: 200px;
  text-align: center;
  color: white;
`;

const Contact = () => {
  return (
    <Wrapper>
      <h3>Contact</h3>
      <p>55 56 57 58</p>
      <p>Holydaze@noroff.no</p>
    </Wrapper>
  );
};

export default Contact;
