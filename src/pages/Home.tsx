import React, { VFC, useState } from 'react';
import { SampleReducer } from '../components/sampleReducer/SampleReducer';
import { ChildItem } from '../components/memoSample/Child';

export const Home: VFC = () => {
  console.log('render Home')
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)
  return (
    <>
      <SampleReducer />
      <button onClick={() => setCount1(count1 + 1)}>カウントアップHome</button>
      <button onClick={() => setCount2(count2 + 1)}>カウントアップ子コンポーネント</button>
      <p>Home: {count1}</p>
      <ChildItem count={count2} />
    </>
  )
}
