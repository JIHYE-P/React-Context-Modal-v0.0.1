import React from 'react'
import { ModalProvider } from './components/ModalContext';
import ModalControl from './components/ModalControl';
import ModalConent from './components/ModalContent';

const Modal = ModalControl()

function App() {
  return <>
    <ModalProvider>
      <Modal.open name="modal-1">Modal 1</Modal.open>
      <Modal.content name="modal-1">
        <ModalConent>Modal-1 Content
          <Modal.close name="modal-1">❌</Modal.close>
        </ModalConent>
      </Modal.content>
    </ModalProvider>

    <ModalProvider>
      <Modal.open name="modal-2">Modal 2</Modal.open>
      <Modal.content name="modal-2">
        <ModalConent>Modal-2 Content
          <Modal.close name="modal-2">❌</Modal.close>
        </ModalConent>
      </Modal.content>
    </ModalProvider>
    
    <ModalProvider>
      <Modal.open name="modal-3">Modal 3</Modal.open>
      <Modal.content name="modal-3">
        <ModalConent>Modal-3 Content
          <Modal.close name="modal-3">❌</Modal.close>
        </ModalConent>
      </Modal.content>
    </ModalProvider>
  </>
}

export default App;
