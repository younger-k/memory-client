import React, {ReactElement, useState} from "react";
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import {baseCss} from "./Rank.style";

export const Rank = (): ReactElement => {
  return (
    <div className="rank-container" css={baseCss}>
      <h1>Rank</h1>
    </div>
  )
}