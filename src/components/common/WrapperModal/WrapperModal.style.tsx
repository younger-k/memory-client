import { css } from '@emotion/react';

export const baseCss = css`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  &.header {
    .modal-contents {
      left: 0;
      position: absolute;
      z-index: 100;
      top: 111px;
      padding: 0;
    }
  }
  .modal-contents {
    padding: 32px;
    border-radius: 8px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
    border: solid 1px #ededf2;
    background-color: #ffffff;
    overflow: auto;
    max-height: 700px;
    z-index: 100;
  }
`;
