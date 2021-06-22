import React, { VFC } from 'react';

type Props = {
  handleClick: () => void
}

const Child: VFC<Props> = props => {
  console.log("render Child");
  return <button onClick={props.handleClick}>Child</button>;
};

export const ChildItem2 =  React.memo(Child)