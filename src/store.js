import { decorate, observable, computed } from "mobx";
import dataSource from "./data";

class Store {
  data = dataSource;
  // variables
  isChecked = false;
}
decorate(Store, {
  // observable properties
  data: observable,
  isChecked: observable
  // computed properties
});
let iceCreamStore = new Store();
export default iceCreamStore;
