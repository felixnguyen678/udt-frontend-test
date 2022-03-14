import { makeAutoObservable } from 'mobx'
import {RootStore} from "./index";
import {trimNumber} from "./../utils/common"

class DataStore {
  rootStore: RootStore;
  restOfExpression: string = ''
  currentArgument: number = 0;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore
    makeAutoObservable(this);
  }

  setRestOfExpression(restOfExpression: string): void {
    this.restOfExpression = restOfExpression;
  }

  setCurrentArgument(argument: number): void {
    this.currentArgument = trimNumber(argument);
  }


  clearAllData(): void {
    this.restOfExpression = '';
    this.currentArgument = 0;
  }



  //actions...

}

export default DataStore;
