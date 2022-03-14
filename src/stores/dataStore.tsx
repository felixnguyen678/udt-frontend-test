import { makeAutoObservable } from 'mobx'
import {RootStore} from "./index";

class DataStore {
  rootStore: RootStore;
  expression: string = '0'
  currentArgument: number = 0;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore
    makeAutoObservable(this);
  }

  setExpression(expression: string): void {
    this.expression = expression;
  }

  setCurrentArgument(argument: number): void {
    this.currentArgument = argument;
  }


  clearAllData(): void {
    this.expression = '0';
    this.currentArgument = 0;
  }



  //actions...

}

export default DataStore;
