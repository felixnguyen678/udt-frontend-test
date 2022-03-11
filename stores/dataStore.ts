import { RootStore } from "./index";
import { makeObservable } from "mobx";

class DataStore {
  rootStore: RootStore;
  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeObservable(this);
  }

  //actions
}

export default DataStore;
