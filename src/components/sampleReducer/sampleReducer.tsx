import React, { useState, useCallback, VFC } from 'react';
import { InputNumber } from '../form/InputNumber';
import { sum } from '../../utills/utilles';
import { css } from '@emotion/css'

const StyledSampleReducer = css({
  margin: '50px'
})



export const SampleReducer: VFC = () => {
  const [values, setValues] = useState(['0', '0', '0', '0'])
  const [message, setMessage] = useState('')

  const onChange = useCallback((index: number, value: string) => {
    setValues(values => {
      const newValues = [...values]
      newValues[index] = value
      return newValues
    })
  }, [])

  const onCheck = useCallback(
    (index: number) => {
      const total = sum(values);
      const ratio = Number(values[index]) / total;
      setMessage(
        `${values[index]}は${total}の${(ratio * 100).toFixed(1)}%です`
      );
    },
    [values]
  );

  console.log(values)
  return (
    <div className={StyledSampleReducer}>
      {values.map((value, i) => {
        return (
          <InputNumber
            key={i}
            index={i}
            value={value}
            onChange={onChange}
            onCheck={onCheck}
          />
        )
      })}
      <p>合計は{sum(values)}</p>
      <p>{message}</p>
    </div>
  )
}