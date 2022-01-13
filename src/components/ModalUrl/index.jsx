/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';

const ModalUrl = (props) => {
  const closeOnEscapeKeyDown = (e) => {
    if ((e.charCode || e.keyCode) === 27) {
      props.onClose();
    }
  };

  return ReactDOM.createPortal(
    <CSSTransition
      in={props.show}
      unmountOnExit
      timeout={{ enter: 0, exit: 300 }}
    >
      <div
        aria-hidden="true"
        className="fixed left-0 top-0 right-0 bottom-0 flex items-center justify-center opacity-0 pointer-events-none bg-black opacity-50 transition-all ease-out duration-300"
        onKeyDown={closeOnEscapeKeyDown}
        onClick={props.onClose}
      >
        <div
          aria-hidden="true"
          className="bg-white w-[500px] transition-all ease-out duration-300 transform translate-y-[-200px]"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-2">
            <h4 className="m-0">{props.title}</h4>
          </div>
          <div className="p-2 border-y border-solid border-[#eee]">
            {props.children}
          </div>
          <div className="p-2">
            <button type="button" onClick={props.onClose} className="button">
              Close
            </button>
          </div>
        </div>
      </div>
    </CSSTransition>,
    document.getElementById('root'),
  );
};

export default ModalUrl;
