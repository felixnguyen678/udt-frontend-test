import { useContext, createContext } from 'react'
import DataStore from "./dataStore";

export class RootStore {
  dataStore: DataStore

  constructor() {
    this.dataStore = new DataStore(this)
  }
}

export const rootStore = new RootStore()

const storeContext = createContext(rootStore)

export const useStores = () => {
  return useContext(storeContext)
}
