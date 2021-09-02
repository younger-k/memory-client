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
  .question-description {
    margin-bottom: 50px;
    .note {
      padding: 10px;
      line-height: 1.5;
      border: 1px solid #555;
      color: #555;
      width: 340px;
      margin-bottom: 12px;
    }
  }
  .question-explain {
    font-size: 14px;
    color: #555;
    margin-bottom: 8px;
  }
  .answer-form-wrapper {
    display: flex;
    width: 100%;
    .grid-wrapper {
      width: 300px;
      display:flex;
      border: 1px solid #333;
      flex-direction: column;
      .grid-row {
        display:flex;
        .grid-elem {
          display: flex;
          width: 30px;
          height: 30px;
          border: 1px solid #333;
          justify-content: center;
          &.color {
            background-color: #aaa;
          }
          .pos {
            width: 20px;
            height: 20px;
            border-radius: 15px;
            margin: auto 0;
            background-color: #cc0033;
          }
        }
      }
    }
    .image-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      margin-right: 20px;
      img {
        width: 80px;
        height: 80px;
      }
    }
    .button-wrapper {
      display:flex;
      flex-direction: column;
      justify-content: flex-end;
      margin-left: 20px;
    }
    .arrow-wrapper {
      .arrow-box {
        width: 30px;
        height: 30px;
        border: 1px solid black;
      }
    }
  }
`