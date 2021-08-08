import React, { useState, VFC } from 'react';
import { useRecoilValue, useSetRecoilState, useResetRecoilState } from "recoil"
import {textState, namesState} from '../../atom/index'

export const RecoilSample: VFC = () => {
  const [name, setName] = useState('')
  const test = useRecoilValue(textState)
  const setNamesState = useSetRecoilState(namesState);

  const resetList = useResetRecoilState(namesState);

  return (
    <>
    <h1>RecoilSample</h1>
      {/* useRecoilValueで参照だけしている */}
      <div>useRecoilValueで参照だけしている:{test}</div>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={() => setNamesState(names => [...names, name])}>Add Name</button>
      <button onClick={resetList}>Reset</button>
      <p></p>
    </>
  )
}