import React, {ReactElement, useEffect, useState} from "react";
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import Moment from "moment";

import {baseCss} from "./Rank.style";
import {RankApi} from "../../service/api/Rank";

interface ClearInfo {
  id: number,
  memberId: string,
  roomId: string,
  spendTime: number,
  createdDate: string,
}

export const Rank = (): ReactElement => {
  const [allClearInfos, setAllClearInfos] = useState<ClearInfo[]>([]);

  const getClearTop10 = () => {
    RankApi.clearTop10().then(({data}) => {
      const clearInfos: ClearInfo[] = data.data.infos;
      setAllClearInfos(clearInfos);
    }).catch((err) => {
      console.log(err);
    });
  }
  useEffect(() => {
    getClearTop10();
  }, [])

  return (
    <div className="rank-container" css={baseCss}>
      <h1>Rank</h1>
      <div className="all-clear-rank-wrapper">
        <div className="clear-title">명예의 전당</div>
        {allClearInfos.map((clearInfo, idx) => {
          return (
            <div key={clearInfo.id} className="all-clear-info">
              <div className="info-memberId">{idx + 1}위 {clearInfo.memberId}</div>
              <div className="info-date">{Moment(clearInfo.createdDate).format("YYYY년 MM월 DD일")}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}