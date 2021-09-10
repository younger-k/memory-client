import React, {ReactElement, useEffect, useState} from "react";
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import {baseCss} from "./Room7.style";
import _ from "lodash";
import {Button} from "@material-ui/core";
import {useDataStore} from "../../store/StoreProvider";
import {Header} from "../common/Header/Header";
import {useHistory} from "react-router-dom";

export const Room7 = (): ReactElement => {
  const { toastStore } = useDataStore();
  const history = useHistory();
  const [hint, setHint] = useState<boolean>(false);

  const submitAnswer = () => {
    let isCorrect = true;

    if (isCorrect) {
      // 1. 정답이라면 clear info 등록
      // 2. 등록이 완료되면 다음문제로 이동
      toastStore.showToast('success', '정답입니다', 4000);
      history.push('/room8');
    } else {
      // 오답정보 전송
      toastStore.showToast('fail', '오답입니다', 4000);
    }
  }

  return (
    <div className="question-wrapper" css={baseCss}>
      <Header text="Room 7" />
      <div className="question-description">
        문제작성
      </div>
      <div className="question-explain">
        * 문제 설명
      </div>
      <div className="answer-form-wrapper">
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
            style={{ height: '40px' }}
            variant="contained"
            color="primary"
            onClick={submitAnswer}
          >
            제출
          </Button>
        </div>
      </div>
    </div>
  )
}