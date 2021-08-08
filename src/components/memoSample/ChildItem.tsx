import React, { VFC } from 'react';

type Props = {
  count: number
}

const Child: VFC<Props> = props => {
  // レンダリングコストが高いものをメモ化することで不要な再レンダリングをさせないようにする
  let i = 0;
  while (i < 1000000000) i++;
  console.log("render Child");
  return <p>Child: {props.count}</p>;
};

export const ChildItem =  React.memo(Child)