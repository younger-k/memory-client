import React, { ReactElement } from "react";

import {Link} from "react-router-dom";

export const Main = (): ReactElement => {
  return (
    <div>
      <h1>메인 페이지지롱~</h1>
      <ul>
        <li>
          <Link to='/login'>로그인 ㄱㄱㄱㄱ</Link>
        </li>
        <li>
          <Link to='/register'>회원가입 ㄱㄱㄱㄱ</Link>
        </li>
      </ul>
    </div>
  );
}