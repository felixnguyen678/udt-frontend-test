import React from 'react';
import { observer } from 'mobx-react-lite'
import { useStores } from '../../../stores'
import { concatNumbers} from '../../../utils/common'
import {EOperator} from '../../../constants/enums'

export interface ICalculateButtonProps {
  children: React.ReactNode;
}


const CalculateButton = (props: ICalculateButtonProps) => {
  const {dataStore} = useStores();

  return (
    <button className="c-calculator__button--secondary" onClick={() => {
      const expression = dataStore.restOfExpression + dataStore.currentArgument
      const result = dataStore.restOfExpression;
      console.log(result);
      dataStore.setRestOfExpression(result);
      dataStore.setCurrentArgument(Number(result));

    }}>{props.children}</button>
  )
}

export default observer(CalculateButton);
