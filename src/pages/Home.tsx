import React, { VFC, useState } from 'react';
import { SampleReducer } from '../components/sampleReducer/SampleReducer';
import { ChildItem } from '../components/memoSample/ChildItem';
import { ChildItem2 } from '../components/memoSample/ChildItem2';

export const Home: VFC = () => {
  console.log('render Home')
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)
  const [count3, setCount3] = useState(0)

  // いくら子コンポーネントでメモ化しても関数はコンポーネントが再レンダリングされる度に再生成される
  // ここでは関数の内容が同じでも前のhandleClickとは異なるオブジェクトとなり等価ではなくなる
  // 結果として再レンダリングされてしまう
  const handleClick = () => {
    console.log('click')
  }
  return (
    <>
      <SampleReducer />
      <button onClick={() => setCount1(count1 + 1)}>カウントアップHome</button>
      <button onClick={() => setCount2(count2 + 1)}>カウントアップ子コンポーネント</button>
      <button onClick={() => setCount3(count3 + 1)}>Increment count</button>
      <p>Home: {count1}</p>
      <ChildItem count={count2} />
      <ChildItem2 handleClick={handleClick} />
    </>
  )
}
