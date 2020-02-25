import React from 'react'
import { ModalConsumer } from './ModalContext'

export default () => {
  const open = ({name, children}) => {
    return <ModalConsumer>
      {
        ({modalActions}) => <button className="modal-open" onClick={() => modalActions(name, true)}>{children}</button>
      }
    </ModalConsumer>
  }
  const close = ({name, children}) => {
    return <ModalConsumer>
      {
        ({modalActions}) => <button className="modal-close" onClick={() => modalActions(name, false)}>{children}</button>
      }
    </ModalConsumer>
  }
  const content = ({name, children}) => {
    return <ModalConsumer>
      {
        ({state, modalActions}) => 
          state[name] && <div className="modal-overlay" onClick={() => modalActions(name, false)}>{children}</div>
      }
    </ModalConsumer>
  }
  return {
    open,
    close,
    content
  }
}

