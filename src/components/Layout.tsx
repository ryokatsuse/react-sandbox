import React from 'react';
import Hello from '../pages/Hello';
import GlobalHeader from "./GlobalHeader"

// type Props = {}

const Layout: React.FC = () => {
  return (
    <>
      <GlobalHeader></GlobalHeader>
      <main>
        <Hello />
      </main>
    </>
  )
}

export default Layout