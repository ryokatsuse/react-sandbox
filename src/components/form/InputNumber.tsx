import React, { memo, VFC } from 'react';

type Props = {
  value: string
  onChange: (value: string) => void
  onCheck: () => void
}

export const InputNumber: VFC<Props> = memo(
  props => {
    const { value, onChange, onCheck} = props
  
    return (
      <p>
        <input
          type="number"
          value={value}
          onChange={e => onChange(e.currentTarget.value)}
        />
        <button onClick={onCheck}>check</button>
      </p>
    )
  }
)

InputNumber.displayName = 'InputNumber'
