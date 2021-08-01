import React, { FC, ReactNode, useEffect } from 'react';
import Modal from 'react-modal';

interface Props {
  isOpen: boolean
  close?(event: React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element>): void
  title: string
  children?: ReactNode;
}


export const Dialog: FC<Props> = props => {
  const {close, title, isOpen, children} = props

  return (
    <Modal
      appElement={document.getElementById('root') as HTMLElement}
      isOpen={isOpen}
      onRequestClose={close}
      contentLabel={title}
      ariaHideApp={process.env.NODE_ENV !== 'test'}
    >
      <div>{children}</div>
    </Modal>
  )
}
