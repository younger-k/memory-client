import { css } from '@emotion/react';

export const baseCss = css`
  width: 80vw;
  height: auto;
  margin: auto;
  padding: 30px 0;
  h1 {
    margin: 0;
  }
  .register-form-wrapper {
    width: 300px;
    display: flex;
    flex-direction: column;
    .register-field-wrapper {
      display: flex;
      flex-direction: column;
      .register-field {
        padding: 10px 0;
      }
    }
    .register-button-wrapper {
      display: flex;
      margin-top: 20px;
    }
  }
`