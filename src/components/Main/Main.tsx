import React, { ReactElement } from "react";
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';

import {baseCss} from "./main.style";

export const Main = (): ReactElement => {
  return (
    <div className='main-container' css={baseCss}>
      <h1>Hello Memory~!</h1>
    </div>
  );
}