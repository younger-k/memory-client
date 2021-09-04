import React, {ReactElement, useEffect, useState} from "react";
import axios from "axios";
import {Col, Row} from "react-bootstrap";
import {baseCss} from "../Board/BoardList.style";

export interface Board {
    id: number,
    boardKind: string,
    boardHeader: string,
    boardTitle: string,
    boardContent: string,
    boardCreateDate: number,
    boardLastModifiedDate: number,
}

export const BoardList = (): ReactElement => {
    const [boardList, setBoardList] = useState<Array<Board>>([]);

    useEffect(() => {
        getBoardList();
    }, []);

    const getBoardList = async () => {
        await axios.get('http://localhost:8080/board/read/all?pageNum=0').then(({data}) => {
            // RankApi.clearTop10().then(({data}) => {
            const boardList: Board[] = data.data;
            console.log(boardList);
            setBoardList(boardList)
        }).catch((err) => {
            console.log(err);
        });
    }
    return (
        <div css = {baseCss}>
            <h1>Board</h1>
            <div>
                <div>총 게시물 수{boardList.length}</div>
                {boardList && boardList.map((board, idx) => {
                    return (


                        <div key={board.id}>

                            <Row className="py-2 board">
                                <Col> {board.boardTitle}</Col>
                                <Col xs="auto" sm="auto"> {board.boardCreateDate}</Col>
                            </Row>

                        </div>
                    )
                })}
            </div>
        </div>
    );

};

