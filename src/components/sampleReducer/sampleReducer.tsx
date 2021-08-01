import React, { VFC, useReducer } from 'react';
import { InputNumber } from '../form/InputNumber';
import { sum } from '../../utills/utilles';
import { css } from '@emotion/css'

const StyledSampleReducer = css({
  margin: '50px'
})

type State = {
  values: string[]
  message: string
}

export type Action =
  | {
      type: 'input'
      index: number
      value: string
    }
  | {
      type: 'check'
      index: number
    }

const reducer =(state: State, action: Action) => {
  switch (action.type) {
    case 'input': {
      const newValues = [...state.values]
      newValues[action.index] = action.value
      return {
        ...state,
        values: newValues
      }
    }
    case 'check': {
      const total = sum(state.values);
      const ratio = Number(state.values[action.index]) / total;
      return {
        ...state,
        message: `${state.values[action.index]}は${total}の${(
          ratio * 100
        ).toFixed(1)}%です`
      }
    }
  }
}
export const SampleReducer: VFC = () => {
  const [{values, message}, dispatch] = useReducer(reducer, {
    values: ["0", "0", "0", "0"],
    message: ""
  });

  return (
    <div className={StyledSampleReducer}>
      {values.map((value, i) => {
        return (
          <InputNumber
            key={i}
            index={i}
            value={value}
            dispatch={dispatch}
          />
        )
      })}
      <p>合計は{sum(values)}</p>
      <p>{message}</p>
    </div>
  )
}