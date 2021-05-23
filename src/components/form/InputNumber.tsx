import React, { memo, VFC } from 'react';

type Props = {
  value: string
  index: number
  onChange: (index: number, value: string) => void;
  onCheck: (index: number) => void;
}

export const InputNumber: VFC<Props> = memo(
  props => {
    const { value, index, onChange, onCheck} = props
  
    return (
      <p>
        <input
          type="number"
          value={value}
          onChange={e => onChange(index, e.currentTarget.value)}
        />
        <button onClick={() => {onCheck(index)}}>check</button>
      </p>
    )
  }
)

InputNumber.displayName = 'InputNumber'