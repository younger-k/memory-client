import { css } from '@emotion/react';

export const baseCss = css`
  width: 80vw;
  height: auto;
  margin: auto;
  padding: 30px 0;
  .flex {
    display: flex;
    &.column {
      flex-direction: column;
    }
    &.end {
      justify-content: flex-end;
    }
  }
  
`