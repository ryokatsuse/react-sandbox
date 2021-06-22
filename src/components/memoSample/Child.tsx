import React, { VFC } from 'react';

type Props = {
  count: number
}

const Child: VFC<Props> = props => {
  console.log("render Child");
  return <p>Child: {props.count}</p>;
};

export const ChildItem =  React.memo(Child)