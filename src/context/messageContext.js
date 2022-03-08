import React, { createContext, Component } from 'react'
import { message } from 'antd'

export const MessageContext = createContext();

class MessageContextProvider extends Component {
  openSuccessMsg = (msg) => {
    message.success(msg)
  }
  openErrorMsg = (msg) => {
    message.error(msg)
  }
  openWarningMsg = (msg) => {
    message.warning(msg)
  }

  render() {
    return (
      <MessageContext.Provider
        value={{ openSuccessMsg: this.openSuccessMsg, openErrorMsg: this.openErrorMsg, openWarningMsg: this.openWarningMsg }}
      >
        {this.props.children}
      </MessageContext.Provider>
    )
  }
}

export default MessageContextProvider