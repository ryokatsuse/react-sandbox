import React, { VFC } from 'react';
import { Header } from "../components/Header/Header"
import { Home } from "../pages/Home";

export const Layout: VFC = () => {
  return (
    <>
      <Header />
      <main>
        <Home />
      </main>
    </>
  )
}
