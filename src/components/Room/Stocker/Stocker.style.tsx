import { css } from '@emotion/react';

export const baseCss = css`
  height: auto;
  margin: auto;
  padding: 30px 0;
  background: #121212;
  color: #bbb;
  
  h1 {
    text-align: center;
    margin: auto;
  }
  .room-form-wrapper {
    display: flex;
    flex-direction: column;
    .room-context {
      padding: 30px 0;
      margin: auto;
      display: flex;
      flex-direction: column;
     
    }
    .room-field-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: row;
      color: #bbb;
      .room-field {
        width: 20em;
        padding: 10px 0;
        .answer-field {
          font: inherit;
          width: 95%;
          border: 0;
          height: 1.1876em;
          margin: 0;
          display: block;
          padding: 6px 6px 7px;
          min-width: 0;
          background: none;
          box-sizing: content-box;
          letter-spacing: inherit;
          background: #bbb;
        }
      }
      .room-button-wrapper {
      }
    }
  }
`