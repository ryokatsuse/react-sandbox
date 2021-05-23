import React, { VFC } from 'react';
import { css } from '@emotion/css'

const StyledHeader = css({
  maxWidth: 'calc(980px + 10%)',
  padding: '10px',
  margin: '0 auto',
  height: '80px',
})

const StyledHeaderH1heading = css({
  margin: '0',
  padding: '0'
})

export const Header: VFC = () => {
  return (
    <header className={StyledHeader}>
      <h1 className={StyledHeaderH1heading}>React SandBox</h1>
    </header>
  )
}