import React, { memo, VFC, Dispatch } from 'react';
import { Action } from '../sampleReducer/SampleReducer';

type Props = {
  value: string
  index: number
  dispatch: Dispatch<Action>;
}

export const InputNumber: VFC<Props> = memo(
  props => {
    const { value, index, dispatch} = props
  
    return (
      <p>
        <input
          type="number"
          value={value}
          onChange={e =>
            dispatch({
              type: 'input',
              index,
              value: e.currentTarget.value
            })
          }
        />
        <button
          onClick={() =>
            dispatch({
              type: "check",
              index
            })
          }>check</button>
      </p>
    )
  }
)

InputNumber.displayName = 'InputNumber'