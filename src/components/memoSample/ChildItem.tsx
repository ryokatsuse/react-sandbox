import React, { VFC } from 'react';
import { useRecoilState } from "recoil"
import {textState} from '../../atom/index'

type Props = {
  count: number
}

const Child: VFC<Props> = props => {
  const [text, setText] = useRecoilState<string>(textState)

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  }
  // レンダリングコストが高いものをメモ化することで不要な再レンダリングをさせないようにする
  let i = 0;
  while (i < 1000000000) i++;
  console.log("render Child");
  return (
    <>
      <p>Child: {props.count}</p>
      <input type="text" value={text} onChange={onChange} />
    </>
  );
};

export const ChildItem =  React.memo(Child)