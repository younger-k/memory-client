import React, {ReactElement, useEffect, useState} from "react";
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import {baseCss} from "./IdolQuestion.style";

const defaultAnswer = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
]

interface Position {
  x: number;
  y: number;
}

export const IdolQuestion = (): ReactElement => {
  const [answer, setAnswer] = useState<number[][]>(defaultAnswer);
  const [position, setPosition] = useState<Position>({x: 10, y: 0})

  const handleArrowKey = (event: KeyboardEvent) => {
    console.log(event.key);
  }

  useEffect(() => {
    window.addEventListener("keydown", handleArrowKey)
  }, [])

  return (
    <div className="question-wrapper" css={baseCss}>

    </div>
  )
}