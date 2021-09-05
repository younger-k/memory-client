import React, {ReactElement, useEffect, useState} from "react";
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import {baseCss} from "./Toast.style";
import {Icon} from "@material-ui/core";
import {CheckCircle, Error} from "@material-ui/icons";

export interface ToastProps {
  status: 'fail' | 'success';
  message: string;
  time: number;
  closeCallback: () => void;
}

export const Toast = (props: ToastProps): ReactElement => {
  const [hide, setHide] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setHide(true);
    }, props.time);
    setTimeout(() => {
      props.closeCallback();
    }, props.time + 500);
  }, []);

  return (
    <div className={`toast-wrapper top ${hide && 'hide'}`} css={baseCss}>
      <div className={`toast-box ${props.status}`}>
        {props.status === 'fail' ? <Error color="error" /> : <CheckCircle color="inherit" />}
        <div className="toast-message">{props.message}</div>
      </div>
    </div>
  );
}