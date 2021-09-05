import React, {ReactElement, useEffect, useState, useRef} from "react";
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import {Button, TextField} from "@material-ui/core";
import {baseCss} from "./Room1.style";

export const Room1 = (): ReactElement => {

  const [isValid, setIsValid] = useState<boolean>(true);
  const [hintActivator, setHintActivator] = useState<string>('question');

  const getHint = () => {
    if (isValid) {
      setIsValid(false);
      setHintActivator('hint');
    }
  }

  return (
    <div className="room-container" css={baseCss}>
      <h1>Room1</h1>
      <div className="room-form-wrapper">
        <div className="room-context">
          <span>반복되는 일상을 마치고 나는 흔들리는 전철에 몸을 맡겼다.</span>
          <span>북적대는 전철 안에서 목까지 올라온 욕지기를 참으며 간신히 버티고</span>
          <span>전철에서 내린 해방감에 깊게 숨을 들이 쉰 후 집으로 향했다.</span>
          <span>가벼운 발걸음으로 아파트에 도착해 엘리베이터를 기다리고 있었던 나는</span>
          <span>갑자기 덮쳐온 탈력감과 타는 듯 한 갈증에 지끈거리는 머리를 손으로 짚었다.</span>
          <span>때마침 도착한 엘리베이터를 타고 집에 도착해서</span>
          <span>타는 목을 달래기 위해 물 한잔을 마시고 천천히 침대로 쓰러졌다.</span>
          <span>마치 수면제라도 먹은 것처럼 쏟아지는 잠을 참을 수 없었다.</span>
          <span>자꾸만 감기는 눈에 결국 나는 졸음을 참지 못하고 잠에 빠져들었다.</span>
          <span>어느정도 몽롱한 기운이 스쳐지나가고 눈을 떠 보니 익숙한 풍경이 눈에 들어왔다.</span>
          <span>가장 먼저 눈에 들어 오는 건 횡단보도 앞에 서있는 나의 모습이었다.</span>
          <span>나는 하늘에 떠오른 채 나 자신을 보고 있었다. 그리고 보이는 것은 한 남자였다.</span>
          <span>횡단보도 건너편에 서 있는 남자는 반가운 얼굴로 나에게 손을 흔들었다.</span>
          <span>매번 꾸는 꿈이지만 그의 얼굴을 볼 때면 가슴이 두근거렸다.</span>
          <span>하지만 이 꿈은...</span><br />

          <span className={hintActivator+"-1"}>노을 진 주황 빛 하늘과 부드러운 봄 바람</span>
          <span className={hintActivator+"-2"}>어색한 몸짓과 등 뒤에 숨긴 노란색 튤립 다발</span>
          <span className={hintActivator+"-3"}>초록색 보행 신호등과 달려오는 발걸음</span>
          <span className={hintActivator+"-4"}>남색 스포츠카와 찢어질듯한 비명</span>
          <span className={hintActivator+"-5"}>붉은 색 피와 흩어져버린 꽃다발</span>
          <span className={hintActivator+"-6"}>찰랑이는 긴 머리와 파랗게 질린 얼굴</span>
          <span className={hintActivator+"-7"}>흐려지는 동공과 뒹구는 보라색 반지 케이스</span><br />

          <span>아무리 소리질러 그를 막아봐도 결국 꿈은 그대로 이어진다.</span>
          <span>같은 기대 같은 시도 같은 결말</span>
          <span>아린 마음을 다스리며, 그를 품에 안은채</span>
          <span>나는 그날의 아픈 기억을 반복해서 되뇌이기 시작했다.</span><br />

          <span>Q. 그날의 기억은?</span>
        </div>
        <div className="room-field-wrapper">
          <div className="room-field">
            <input className="answer-field"
            />
          </div>
          <div className="room-button-wrapper">
            <Button
                variant="contained"
                color="primary"
                style={{margin: '0 3px 0 0'}}
            >
              입력
            </Button>
            <Button
                variant="contained"
                color="primary"
                onClick={getHint}
            >
              힌트
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}