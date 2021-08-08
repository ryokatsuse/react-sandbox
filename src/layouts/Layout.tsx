import React, { VFC } from 'react';
import { Header } from "../components/Header/Header"
import { Home } from "../pages/Home";
import { css } from '@emotion/css'
import {
  RecoilRoot
} from 'recoil';

const StyledLayout = css({
  maxWidth: 'calc(980px + 10%)',
  padding: '10px',
  margin: '0 auto',
})

export const Layout: VFC = () => {
  return (
    <RecoilRoot>
      <Header />
      <main className={StyledLayout}>
        <Home />
      </main>
    </RecoilRoot>
  )
}
