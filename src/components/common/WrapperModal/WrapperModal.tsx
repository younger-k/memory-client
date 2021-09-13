import React, { ReactElement, useEffect } from 'react';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import { baseCss } from './WrapperModal.style';
import { Backdrop } from '../Backdrop/Backdrop';

export interface WrapperModalProps {
  isOpen: string | number | boolean;
  close: () => void;
  type?: string;
  handleClick?: () => void;
  children?: JSX.Element | JSX.Element[];
  position?: object;
}
export const WrapperModal = (props: WrapperModalProps): ReactElement => {
  const propsObj = props;
  useEffect(() => {
    if (propsObj.isOpen) {
      document.body.style.overflowY = 'scroll';
      document.body.style.width = '100%';
      document.body.style.position = 'fixed';
    } else {
      document.body.removeAttribute('style');
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.removeAttribute('style');
      document.body.style.overflow = 'unset';
    };
  }, [propsObj.isOpen]);

  return (
    <React.Fragment>
      {propsObj.isOpen && (
        <div className={`modal-wrap ${propsObj.type || ''}`} css={[baseCss]}>
          <Backdrop
            handleClick={propsObj.close}
            style={{
              zIndex: 99,
              backgroundColor: 'rgba(0, 0, 0, 0.6)',
            }}
          />
          <div className="modal-contents" style={props.position || {}}>
            {propsObj.children ? propsObj.children : <div />}
          </div>
        </div>
      )}
    </React.Fragment>
  );
};
