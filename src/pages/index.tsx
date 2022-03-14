import React from "react";
import {Provider} from 'mobx-react';
import {rootStore} from '../stores';
import {NumberButton} from '../components/Buttons'
import { observer } from 'mobx-react-lite'
import { useStores } from '../stores'
import {OperatorButton} from '../components/Buttons'
import {EOperator} from '../constants/enums'
import {CalculateButton} from '../components/Buttons'

// import {hot} from "react-hot-loader";
// import "../styles/Home.module.css"
const ReactDOMServer = require("react-dom/server");

const Home = () => {
  const {dataStore} = useStores();
  return (
    <Provider {...rootStore}>
      <div className="c-calculator">
        <div className="c-calculator__screen">
          <span className="c-screen__number">{dataStore.restOfExpression + dataStore.currentArgument}</span>
        </div>
        <div className="c-calculator__keypad">
          <button className="c-calculator__button--third">AC</button>
          <button className="c-calculator__button--third">+/-</button>
          <button className="c-calculator__button--third">%</button>
          <OperatorButton operator={EOperator.DIVISION}>/</OperatorButton>
          <NumberButton num={7}/>
          <NumberButton num={8}/>
          <NumberButton num={9}/>
          <OperatorButton operator={EOperator.MULTIPLICATION}>*</OperatorButton>
          <NumberButton num={4}/>
          <NumberButton num={5}/>
          <NumberButton num={6}/>
          <OperatorButton operator={EOperator.SUBTRACTION}>-</OperatorButton>
          <NumberButton num={1}/>
          <NumberButton num={2}/>
          <NumberButton num={3}/>
          <OperatorButton operator={EOperator.ADDITION}>+</OperatorButton>
          <NumberButton num={0}/>
          <button className="c-calculator__button">,</button>
          <CalculateButton>=</CalculateButton>
        </div>
      </div>
    </Provider>
  );
};

const HomeHTML: string = ReactDOMServer.renderToString(<Home />);

export default observer(Home);
