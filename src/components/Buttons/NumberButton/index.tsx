import React from 'react';
import { observer } from 'mobx-react-lite'
import { useStores } from '../../../stores'
import { concatNumbers} from '../../../utils/common'

export interface INumberButtonProps {
  num: number;
}

const NumberButton = ({num} : INumberButtonProps) => {
  const {dataStore} = useStores();

  return (
    <button className="c-calculator__button" onClick={() => {
      dataStore.setCurrentArgument(concatNumbers(dataStore.currentArgument, num));
    }}>{num}</button>
  )
}

export default observer(NumberButton);
