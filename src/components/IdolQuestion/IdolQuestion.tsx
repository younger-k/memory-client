import React, {ReactElement} from "react";
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import {baseCss} from "./IdolQuestion.style";

export const IdolQuestion = (): ReactElement => {
  return (
    <div className="question-wrapper" css={baseCss}>
      문제를 작성할 컴포넌트
    </div>
  )
}