import React from 'react';
import { observer } from 'mobx-react-lite'
import { useStores } from '../../../stores'
import { concatNumbers} from '../../../utils/common'
import {EOperator} from '../../../constants/enums'

export interface IOperatorButtonProps {
  operator: EOperator;
  children: React.ReactNode;
}


const OperatorButton = (props: IOperatorButtonProps) => {
  const {dataStore} = useStores();

  return (
    <button className="c-calculator__button--secondary" onClick={() => {
      dataStore.setRestOfExpression(dataStore.restOfExpression + dataStore.currentArgument + props.operator);
      dataStore.setCurrentArgument(0);
    }}>{props.children}</button>
  )
}

export default observer(OperatorButton);
