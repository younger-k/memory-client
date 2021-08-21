import React, {ReactElement, useEffect, useState} from "react";
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import {baseCss} from "./Toast.style";
import {Icon} from "@material-ui/core";

export interface ToastProps {
  status: 'fail' | 'success';
  message: string;
}

export const Toast = (props: ToastProps): ReactElement => {
  return (
    <div className="toast-wrapper" css={baseCss}>
      <div className="toast-box top">
        <Icon children="error" />
        <div className="toast-message">{props.message}</div>
      </div>
    </div>
  );
}