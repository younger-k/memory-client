import React, {ReactElement, useEffect, useState} from "react";
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import {Button, TextField} from "@material-ui/core";
import {baseCss} from "./Register.style";

interface Member {
  id: string;
  password: string;
}

const DefaultUser: Member = {
  id: '',
  password: '',
}

export const Register = (): ReactElement => {
  const [user, setUser] = useState<Member>(DefaultUser);
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [isValid, setIsValid] = useState<boolean>(false);

  const handleUser = (key: 'id'|'password', value: string) => {
    const newUser = {...user};
    newUser[key] = value;
    setUser(newUser);
  }

  const validateRegister = () => {
    if (!user.id) return setIsValid(false);
    if (!user.password) return setIsValid(false);
    if (user.password !== confirmPassword) return setIsValid(false);

    return setIsValid(true);
  }

  useEffect(() => {
    validateRegister();
  }, [user, confirmPassword]);

  const handleRegister = () => {
    alert('회원가입 버튼 클릭!');
  }

  return (
    <div className="register-container" css={baseCss}>
      <h1>Join</h1>
      <div className="register-form-wrapper">
        <div className="register-field-wrapper">
          <div className="register-field">
            <TextField
              style={{width: '100%'}}
              required
              label="아이디"
              onChange={(event) => {
                handleUser('id', event.target.value);
              }}
            />
          </div>
          <div className="register-field">
            <TextField
              style={{width: '100%'}}
              required
              label="비밀번호"
              type="password"
              autoComplete="current-password"
              onChange={(event) => {
                handleUser('password', event.target.value);
              }}
            />
          </div>
          <div className="register-field">
            <TextField
              style={{width: '100%'}}
              required
              label="비밀번호 확인"
              type="password"
              autoComplete="current-password"
              onChange={(event) => {
                setConfirmPassword(event.target.value);
              }}
            />
          </div>
        </div>
        <div className="register-button-wrapper">
          <Button
            style={{width: '100%'}}
            disabled={!isValid}
            variant="contained"
            color="primary"
            onClick={handleRegister}
          >
            JOIN
          </Button>
        </div>
      </div>
    </div>
  );
}