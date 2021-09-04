import React, {ReactElement, useEffect, useState, useRef} from "react";
/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx, css} from '@emotion/react';
import {Button, TextField} from "@material-ui/core";
import {baseCss} from "./Stocker.style";

export const Stocker2 = (): ReactElement => {


    const getHint = () => {
        alert("")
    }


    return (
        <div className="room-container" css={baseCss}>
            <h1>Stocker</h1>
            <div className="room-form-wrapper">
                <div className="room-context">
                    <div>
                        경찰이 오는 소리가 들리자 정신을 차렸다.<br/>
                        <br/>
                        쨍그랑<br/>
                        온 몸에 힘이 풀려 쥐고있던 칼이 떨어졌다.<br/>
                        칼에는 피가 묻어있었다.<br/>
                        <br/>
                        덜덜 떨면서 주위를 둘러보았다.<br/>
                        맞은편 여자는 팔을 움켜쥐고있었다 팔에는 피가 흐르고있었다.<br/>
                        <br/>
                        "저기..진수야 이건..."<br/>
                        "다가오지마!"<br/>
                        <br/>
                        겁에 질린표정으로 진수가 뒷걸음질쳤다. 처음보는 진수의 모습이었다.<br/>
                        왜 나를 그렇게 보는거야? 왜 나를 괴물보듯이 보는거야? 우리 사랑했잖아.<br/>
                        <br/>
                        진수는 뒤도 돌아보지 않고 도망쳤다.<br/>
                        <br/>
                        그제서야 내가 한 모든 일이 떠올랐다.<br/>
                        아 내가 사람을 찔렀구나..<br/>
                        <br/>
                        ...<br/>
                        <br/>
                        그 일이 벌어진 후 두달이 지났다.<br/>
                        <br/>
                        다행히 여자는 큰 상처를 입지 않았고 처벌을 바라지 않는다고 했다. 여자는 오히려 나를 걱정해주었다.<br/>
                        자신도 힘들었을 때 정신과의 도움을 받았다며 정신과 진료를 추천해주기도 했다.<br/>
                        <br/>
                        진수는 아무런 연락이 없었다.<br/>
                        <br/>
                        어디서부터 문제였을까 분명 우린 그 누구보다 사랑했었는데.<br/>
                        과거를 되짚어보니 그렇지만도 않았다.<br/>
                        일주일에 한번씩은 크게 다투고 헤어지자고 말했다.<br/>
                        항상 서로를 상처주는 말뿐이었다.<br/>
                        우린 그걸 사랑이라고 표현했다.<br/>
                        <br/>
                        너무 모순적인 모습에 웃음이 났다.<br/>
                        우리 사랑은 모순투성이었구나.<br/>
                        <br/>
                        우리는 항상 입을 꾹 다물고 말했다<br/>
                        싸우고 헐뜯으며 좋은 관계를 유지했다<br/>
                        서로를 붙잡으면서 잘가라고 말했다.<br/>
                        <br/>
                        우리는 정말 모순적이었다.<br/>

                        <br/>
                    </div>
                    <br/>

                    <span>너에게 하고 싶은 말은?</span>
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