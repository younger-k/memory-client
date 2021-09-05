import React, {ReactElement, useEffect, useState} from "react";
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import {baseCss} from "./Room6.style";
import _ from "lodash";
import {Button} from "@material-ui/core";
import {useDataStore} from "../../store/StoreProvider";
import {Header} from "../common/Header/Header";

const defaultGrid = [
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
];

const answerGrid = [
  [1, 1, 1, 1, 1, 1, 2, 2, 1, 0],
  [1, 0, 0, 0, 0, 0, 1, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 1, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 1, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 1, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 1, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0]
]

interface Position {
  row: number;
  col: number;
}

export const Room6 = (): ReactElement => {
  const [grid, setGrid] = useState<number[][]>(defaultGrid);
  const [position, setPosition] = useState<Position>({row: 9, col: 0});
  const [hint, setHint] = useState<boolean>(false);
  const { toastStore } = useDataStore();

  const movePosition = (nextPos: Position) => {
    const _grid: number[][] = _.cloneDeep(grid);
    _grid[nextPos.row][nextPos.col] += 1;
    setGrid(_grid);
    setPosition(nextPos);
  }

  const handleArrowCommand = (command: string) => {
    const nextPosition: Position = {...position};
    switch (command) {
      case 'ArrowUp':
        if (position.row > 0) {
          nextPosition.row = position.row - 1;
          movePosition(nextPosition);
        }
        break;
      case 'ArrowDown':
        if (position.row < 9) {
          nextPosition.row = position.row + 1;
          movePosition(nextPosition);
        }
        break;
      case 'ArrowRight':
        if (position.col < 9) {
          nextPosition.col = position.col + 1;
          movePosition(nextPosition);
        }
        break;
      case 'ArrowLeft':
        if (position.col > 0) {
          nextPosition.col = position.col - 1;
          movePosition(nextPosition);
        }
        break;
      default:
        break;
    }
  }

  const handleArrowKeyDown = (event: KeyboardEvent) => {
    handleArrowCommand(event.key);
  }

  useEffect(() => {
    window.addEventListener("keydown", handleArrowKeyDown);
    return () => window.removeEventListener("keydown", handleArrowKeyDown);
  }, [position])

  const submitAnswer = () => {
    let isCorrect = true;

    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        if (answerGrid[i][j] !== grid[i][j]) {
          isCorrect = false;
          break;
        }
      }
      if (!isCorrect) break;
    }

    if (isCorrect) {
      // 1. 정답이라면 clear info 등록
      // 2. 등록이 완료되면 다음문제로 이동
      toastStore.showToast('success', '정답입니다', 4000);
    } else {
      // 오답정보 전송
      toastStore.showToast('fail', '오답입니다', 4000);
    }
  }

  return (
    <div className="question-wrapper" css={baseCss}>
      <Header text="Room 6" />
      <div className="question-description">
        방의 중앙에 위치한 탁자에는 알 수 없는 쪽지와 지도가 놓여 있었다.<br />
        잠시 쉴 생각으로 쇼파에 앉자 거실장 위에 놓여진 TV가 켜졌다.<br /><br />

        시청자 여러분 안녕하십니까. 오늘의 {hint ? <b>NEWS</b>: '뉴스'}입니다.<br /><br />

        첫 번째 소식입니다. 도쿄 올림픽에서 한국 여자양궁 대표팀이 단체전에서 금메달을 획득하며 올림픽 9연패 신화를 이어갔습니다.<br /><br />

        두 번째 소식입니다.  제8호 태풍 기억이 빠르게 북상하고 있습니다. 기억은 우리나라 남쪽 해상을 지나면서 경상권 해안과 강원 영동에 많은 폭우를 뿌릴 전망입니다.<br /><br />

        세 번째 소식입니다. 연일 코스피가 고공행진을 이어가고 있습니다. 이번주 코스피는 전주대비 2%가량 상승하며 장을 마감했습니다.<br /><br />

        마지막 소식입니다. 유명 케이팝 5인조 그룹 메모리즈의 멤버 정연진씨가 자살시도를 한 것으로 밝혀졌습니다. 정씨는 평소 악성 댓글에 시달려...<br /><br />

        집중해서 뉴스를 보고 있었는데 갑자기 TV가 꺼졌다. 다시 켜봐도 소용이 없었다. 별 수 없이 탁자 위의 쪽지를 마저 펼쳐 읽어보았다.<br /><br />

        <div className="note">
          길안내는 잘 받으셨죠?<br />
          제가 있는 곳으로 찾아오실 수 있으리라 믿어요.<br />
          지도도 함께 동봉해드렸어요. 기다리고 있을게요.<br />
        </div>

        '길안내...? 언제...? 어떻게 찾아간담...'<br />

        나는 우선 동봉된 지도를 살펴보았다.<br />
      </div>
      <div className="question-explain">
        * 방향키로 위치를 이동시킬 수 있습니다.
      </div>
      <div className="answer-form-wrapper">
        <div className="image-wrapper">
          <img src="assets/image/compass.png" alt="compass" />
        </div>
        <div className="grid-wrapper">
          {grid.map((column: number[], rowIdx) => {
            return (
              <div className="grid-row">
                {column.map((elem: number, colIdx) => {
                  return (
                    <div className={`grid-elem ${grid[rowIdx][colIdx] > 0 ? 'color' : ''}`}>
                      {position.row === rowIdx && position.col === colIdx && (
                        <div className="pos" />
                      )}
                    </div>
                  )
                })}
              </div>
            )
          })}
        </div>
        <div className="button-wrapper">
          <Button
            style={{ height: '40px', margin: '8px 0' }}
            variant="contained"
            onClick={() => {
              setHint(true);
            }}
          >
            힌트
          </Button>
          <Button
            style={{ height: '40px', margin: '8px 0' }}
            variant="contained"
            onClick={() => {
              setGrid(defaultGrid);
              setPosition({row: 9, col: 0})
            }}
          >
            초기화
          </Button>
          <Button
            style={{ height: '40px' }}
            variant="contained"
            color="primary"
            onClick={submitAnswer}
          >
            제출
          </Button>
        </div>
        <div className="flex column end">
          <div className="arrow-wrapper flex">
            <div className="flex column end">
              <div className="arrow-left arrow-box" onClick={() => handleArrowCommand('ArrowLeft')}></div>
            </div>
            <div className="arrow-up-and-down flex column">
              <div className="arrow-up arrow-box" onClick={() => handleArrowCommand('ArrowUp')}></div>
              <div className="arrow-down arrow-box" onClick={() => handleArrowCommand('ArrowDown')}></div>
            </div>
            <div className="flex column end">
              <div className="arrow-right arrow-box" onClick={() => handleArrowCommand('ArrowRight')}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}