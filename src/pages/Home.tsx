import React, { VFC, useState, useCallback } from 'react';
import { SampleReducer } from '../components/sampleReducer/SampleReducer';
// import { ChildItem } from '../components/memoSample/ChildItem';
import { ChildItem2 } from '../components/memoSample/ChildItem2';
import { ChildItem3 } from '../components/memoSample/ChildItem3';
import { RecoilSample } from '../components/recoilSample/RecoilSample';
import { Dialog } from '../components/dialog/Dialog';

export const Home: VFC = () => {
  console.log('render Home')
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)
  const [count3, setCount3] = useState(0)
  const [isModalOpen, seIsModaltOpen] = useState(false);

  // useCallbackで関数をメモ化することで等価となり再レンダリングされない
  // 以下はuseCallbackの注意点
  // React.memo化していないコンポーネントにuseCallbackでコールバック関数を渡している
  // useCallbackでメモ化したコールバック関数をそれを生成したコンポーネント自身で使っている
  const handleClick = useCallback(() => {
    console.log('click')
  }, [])

  const openModal = () => {
    seIsModaltOpen(true)
  }

  const closeModal = () => {
    seIsModaltOpen(false)
  }
  return (
    <>
      <SampleReducer />
      <button onClick={() => setCount1(count1 + 1)}>カウントアップHome</button>
      <button onClick={() => setCount2(count2 + 1)}>カウントアップ子コンポーネント</button>
      <button onClick={() => setCount3(count3 + 1)}>Increment count</button>
      <p>Home: {count1}</p>
      {/* <ChildItem count={count2} /> */}
      <ChildItem2 handleClick={handleClick} />
      <ChildItem3 />
      <button onClick={openModal}>Open Modal</button>
      <RecoilSample />
      <Dialog
        isOpen={isModalOpen}
        title="モーダル">
          <button onClick={closeModal}>閉じる</button>
          <div>モーダルコンテンツ</div>
        </Dialog>
    </>
  )
}