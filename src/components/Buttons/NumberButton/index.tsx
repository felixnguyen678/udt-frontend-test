import React from 'react';
import { observer } from 'mobx-react-lite'
import { useStores } from '../../../stores'

export interface INumberButtonProps {
  num: number
}

function Index({num} : INumberButtonProps) {
  const {dataStore} = useStores();

  return (
    <button className="c-calculator__button" onClick={() => {
      dataStore.setExpression(dataStore.expression + num)
      console.log(dataStore.expression);
    }}>{num}</button>
  )
}

export default observer(Index);
