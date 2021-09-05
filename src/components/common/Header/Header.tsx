import React from 'react';

/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import {baseCss} from "./Header.style";

export interface HeaderProps {
  text: string;
  align?: 'left' | 'center' | 'right';
}

export const Header = (props: HeaderProps) => {
  return (
    <div className={`header-wrapper ${props.align || 'left'}`} css={baseCss}>
      {props.text}
    </div>
  )
}