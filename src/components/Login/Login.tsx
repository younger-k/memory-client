import React, {ReactElement, useState} from "react";
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';

import {Button, TextField} from "@material-ui/core";
import {baseCss} from "./Login.style";

export const Login = (): ReactElement => {
  // states
  const [userId, setUserId] = useState<string>('');
  const [userPassword, setUserPassword] = useState<string>('');

  // functions
  const handleLogin = () => {
    alert(`유저 아이디 : ${userId} / 비밀번호 : ${userPassword}`)
  }

  return (
    <div className="login-container" css={baseCss}>
      <h1>Login</h1>
      <div className="login-form-wrapper">
        <div className="login-field-wrapper">
          <div className="login-field">
            <TextField
              label="아이디"
              onChange={(event) => {
                setUserId(event.target.value);
              }}
            />
          </div>
          <div className="login-field">
            <TextField
              label="비밀번호"
              type="password"
              autoComplete="current-password"
              onChange={(event) => {
                setUserPassword(event.target.value);
              }}
            />
          </div>
        </div>
        <div className="login-button-wrapper">
          <Button variant="contained" color="primary" onClick={handleLogin}>
            LOGIN
          </Button>
        </div>
      </div>
    </div>
  );
}