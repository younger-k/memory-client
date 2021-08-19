import { css } from '@emotion/react';

export const baseCss = css`
  width: 80vw;
  height: auto;
  margin: auto;
  padding: 30px 0;
  .grid-wrapper {
    width: 300px;
    display:flex;
    border: 1px solid #333;
    flex-direction: column;
    .grid-row {
      display:flex;
      .grid-elem {
        width: 30px;
        height: 30px;
        border: 1px solid #333;
        &.color {
          background-color: #333;
        }
      }
    }
  }
`