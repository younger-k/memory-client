import { css } from '@emotion/react';

export const baseCss = css`
  position: fixed;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  height: 1px;
  z-index: 9999;
  margin: 0 auto;
  &.hide {
    .toast-box {
      visibility: hidden;
      opacity: 0;
      transition: visibility 0.5s cubic-bezier(0.96, -0.02, 0.58, 1), opacity 0.5s linear;
      -webkit-transition: visibility 0.5s cubic-bezier(0.96, -0.02, 0.58, 1), opacity 0.5s linear;
      -moz-transition: visibility 0.5s cubic-bezier(0.96, -0.02, 0.58, 1), opacity 0.5s linear;
      -o-transition: visibility 0.5s cubic-bezier(0.96, -0.02, 0.58, 1), opacity 0.5s linear;
    }
  }
  &.position {
    .toast-box {
      visibility: hidden;
      opacity: 0;
      top: -100px;
    }
  }

  &.top {
    top: 0;
    left: 0;
    right: 0;

    .toast-box {
      top: 50px;
    }
  }

  &.bottom {
    bottom: 0;
    left: 0;
    right: 0;

    .toast-box {
      top: -85px;
    }
  }

  .toast-box {
    visibility: visible;
    opacity: 1;
    transition: top 0.5s, visibility 0.5s linear, opacity 0.5s linear;
    -webkit-transition: top 0.5s, visibility 0.5s linear, opacity 0.5s linear;
    -moz-transition: top 0.5s, visibility 0.5s linear, opacity 0.5s linear;
    -o-transition: top 0.5s, visibility 0.5s linear, opacity 0.5s linear;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    min-width: 360px;
    padding: 12px;
    border-radius: 8px;
    background-color: #beecdb;
    font-size: 18px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #3d4046;
    z-index: 10;

    .icon-wrapper {
      width: 32px;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      background-color: #27c28a;
      margin-right: 12px;
    }

    .toast-message {
      line-height: 1.43;
    }

    &.fail {
      background-color: #ffccc0;
      .icon-wrapper {
        background-color: #e65c5c;
      }
    }
  }
}
`;