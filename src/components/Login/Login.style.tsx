import { css } from '@emotion/react';

export const baseCss = css`
  width: 80vw;
  height: auto;
  margin: auto;
  padding: 30px 0;
  h1 {
    margin: 0;
  }
  .login-form-wrapper {
    display: flex;
    .login-field-wrapper {
      width: auto;
      height: auto;
      display: flex;
      flex-direction: column;
      .login-field {
        padding: 10px 0;
      }
    }
    .login-button-wrapper {
      display: flex;
      margin-left: 20px;
      align-items: center;
    }
  }
`