import React, { VFC } from 'react';
import { css } from '@emotion/css'

const StyledHeader = css({
  color: 'red',
  background: '#333'
})

export const Header: VFC = () => {
  return (
    <header className={StyledHeader}>
      <h1>React SandBox</h1>
    </header>
  )
}