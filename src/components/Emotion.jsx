/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

export const Emotion = () => {
  const containerStyle = css`
    border: solid 2px #3f3f3f;
    border-radius: 20px;
    padding: 8px;
    margin: 8px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  `;
  const titleStyle = css({
    margin: 0,
    color: "#3d88fd"
  });

  return (
    <div css={containerStyle}>
      <p css={titleStyle}>- Emotion -</p>
      <SButton>eee</SButton>
    </div>
  );
};

const SButton = styled.button`
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
