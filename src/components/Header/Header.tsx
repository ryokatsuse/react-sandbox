import React, { VFC } from 'react';
import { useRecoilState, useRecoilValue } from "recoil"
import { css } from '@emotion/css'
import {textState, charCountState} from '../../atom/index'

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
  const [text, setText] = useRecoilState<string>(textState)
  const count = useRecoilValue(charCountState)

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  }

  return (
    <header className={StyledHeader}>
      <h1 className={StyledHeaderH1heading}>React SandBox</h1>
      <input type="text" value={text} onChange={onChange} />
      <div>{text}</div>
      <div>{count}</div>
    </header>
  )
}