import { makeAutoObservable } from 'mobx'
import {RootStore} from "./index";

class DataStore {
  rootStore: RootStore;
  constructor(rootStore: RootStore) {
    this.rootStore = rootStore
    makeAutoObservable(this);
  }

  //actions...

}

export default DataStore;
