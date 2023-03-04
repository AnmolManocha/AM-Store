import React from 'react'
import { Alert } from 'react-bootstrap'

function Message({ variant, children }) {
  return (
    <Alert transition={false} variant={variant}>
      {children}
    </Alert>
  )
}

Message.defaultProps = {
  variant: 'info',
}

export default Message
