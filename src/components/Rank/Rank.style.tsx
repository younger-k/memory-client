import { css } from '@emotion/react';

export const baseCss = css`
  width: 80vw;
  height: auto;
  margin: auto;
  padding: 30px 0;
  h1 {
    margin-bottom: 20px;
  }
  .all-clear-rank-wrapper {
    .clear-title {
      font-size: 24px;
      font-weight: bold;
      margin-bottom: 10px;
    }
    .all-clear-info {
      display: flex;
      margin-bottom: 5px;
      .info-memberId {
        margin-right: 10px;
      }
    }
  }
`;