import React, { createContext, useState } from 'react'

const Context = createContext()
const {Provider, Consumer: ModalConsumer} = Context

const ModalProvider = ({children}) => {
  const [state, setState] = useState({})
  const modalActions = (name, boolean) => setState({...state, [name]: boolean})

  const value = {state, modalActions}
  return (
    <Provider value={value}>{children}</Provider>
  )
}

export {
  ModalProvider,
  ModalConsumer
}