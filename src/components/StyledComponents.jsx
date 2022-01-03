/**
 * Styled Components を試す
 */
import styled from "styled-components";

export const StyledComponents = () => {
  return (
    <Container>
      <Title>- Styled Components -</Title>
      <Button>ddd</Button>
    </Container>
  );
};

const Container = styled.div`
  border: solid 2px #3f3f3f;
  border-radius: 20px;
  padding: 8px;
  margin: 8px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Title = styled.p`
  margin: 0;
  color: #3d88fd;
`;

const Button = styled.button`
  background-color: #aad3d1;
  border: none;
  padding: 8px;
  border-radius: 8px;
  &:hover {
    background-color: #3d88fd;
    color: #fff;
    cursor: pointer;
  }
`;
