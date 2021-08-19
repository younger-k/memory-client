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
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0]
]

interface Position {
  row: number;
  col: number;
}

export const IdolQuestion = (): ReactElement => {
  const [grid, setGrid] = useState<number[][]>(defaultAnswer);
  const [position, setPosition] = useState<Position>({row: 9, col: 0});

  const handleArrowKey = (event: KeyboardEvent) => {
    const nextPosition: Position = {...position};
    switch (event.key) {
      case 'ArrowUp':
        if (position.row > 0) nextPosition.row = position.row - 1;
        setPosition(nextPosition);
        break;
      case 'ArrowDown':
        if (position.row < 9) nextPosition.row = position.row + 1;
        setPosition(nextPosition);
        break;
      case 'ArrowRight':
        if (position.col < 9)  nextPosition.col = position.col + 1;
        setPosition(nextPosition);
        break;
      case 'ArrowLeft':
        if (position.col > 0)  nextPosition.col = position.col - 1;
        setPosition(nextPosition);
        break;
      default:
        break;
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", handleArrowKey);
    return () => window.removeEventListener("keydown", handleArrowKey);
  }, [position])

  return (
    <div className="question-wrapper" css={baseCss}>
      <div className="grid-wrapper">
        {grid.map((column: number[], rowIdx) => {
          return (
            <div className="grid-row">
              {column.map((elem: number, colIdx) => {
                return (
                  <div className={`grid-elem ${grid[rowIdx][colIdx] > 0 ? 'color' : ''}`}>
                    {position.row === rowIdx && position.col === colIdx && (
                      <div>POS</div>
                    )}
                  </div>
                )
              })}
            </div>
          )
        })}
      </div>
    </div>
  )
}