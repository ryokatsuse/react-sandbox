import React, { useState, VFC } from 'react';
import { InputNumber } from '../form/InputNumber';
import { sum } from '../../utills/utilles';
import { css } from '@emotion/css'

const StyledSampleReducer = css({
  margin: '50px'
})

export const SampleReducer: VFC = () => {
  const [values, setValues] = useState(['0', '0', '0', '0'])
  const [message, setMessage] = useState('')
  console.log(values)
  return (
    <div className={StyledSampleReducer}>
      {values.map((value, i) => {
        return (
          <InputNumber
            key={i}
            value={value}
            onChange={v =>
              setValues(current => {
                const result = [...current]
                result[i] = v
                return result
              })
            }
            onCheck={() => {
              const total = sum(values)
              const ratio = Number(value) / total
              setMessage(
                `${value}は${total}の${(ratio * 100).toFixed(1)}%です`
              )
            }}
          />
        )
      })}
      <p>合計は{sum(values)}</p>
      <p>{message}</p>
    </div>
  )
}