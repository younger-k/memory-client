import React, {ReactElement, useEffect, useState, useRef} from "react";
/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx, css} from '@emotion/react';
import {Button, TextField} from "@material-ui/core";
import {baseCss} from "./Stocker.style";

export const Stocker1 = (): ReactElement => {


    const getHint = () => {
        alert("내 주소는 어떻게 알았지?")
    }


    return (
        <div className="room-container" css={baseCss}>
            <h1>Stocker</h1>
            <div className="room-form-wrapper">
                <div className="room-context">
                    <div>
                        똑똑<br/>
                        <br/>
                        문을 두드리는 소리가 들렸다<br/>
                        "집에 있지? 잠깐만 이야기하자 잠깐만"<br/>
                        <br/>
                        두 번이나 옮긴 집이었지만 그애는 주소를 알고 바로 찾아왔다.<br/>
                        애써 안들리는 척하며 핸드폰을 집어들었지만 이내 핸드폰을 덮어버렸다.<br/>
                        <br/>
                        익숙한 번호로 전화가 왔기때문이다.<br/>
                        네번째로 바꾼 핸드폰번호였다.<br/>
                        <br/>
                        나직히 한숨을 쉬었다. 노크하는 소리가 점점 커졌다. 전화도 반복해서 울려댔다.<br/>
                        밖에서 내 이름을 부르다가 큰소리로 엉엉울기 시작했다.<br/>
                        베개로 귀를 막아봤지만 생생하게 목소리가 들려왔다.<br/>
                        <br/>
                        울음이 곧 멎었다.<br/>
                        <br/>
                        "역시 그년때문인거지? 바람날 줄 알았어"<br/>
                        죽여버릴거야 씨발 씨발.. 욕짓거리를 하는 목소리가 점차 사라졌다.<br/>
                        <br/>
                        적막이 길게 유지됐다.<br/>
                        <br/>
                        침을 꼴깍 삼켰다. 침소리가 유독 크게 느껴졌다. 온 신경이 발바닥으로 쏠린 채 조용히 현관으로 다가갔다.<br/>
                        나는 긴장하며 현관 외시경에 눈을 가져댔다.<br/>
                        복도는 텅 비어있었다.<br/>

                    </div>
                    <br/>

                    <span> ... 지금 어디에 있는거지?</span>
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