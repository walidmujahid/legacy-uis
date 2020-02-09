import React, { Component } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { CSSTransition } from "react-transition-group";

import "./modal.scss";

const modalRoot = document.querySelector("#modal-root");

class Modal extends Component {
  render() {
    const { children, onClose } = this.props;
    return ReactDOM.createPortal(
      <div>
        <CSSTransition
          transitionName="modal-container"
          transitionAppear
          transitionLeave
          transitionAppearTimeout={200}
          transitionLeaveTimeout={200}
          transitionEnterTimeout={200}
        >
          <div
            className="modal-container"
            onClick={onClose}
            onKeyDown={onClose}
            key="modal"
            role="button"
            tabIndex={0}
          />
        </CSSTransition>
        {children}
      </div>,
      modalRoot,
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default Modal;
