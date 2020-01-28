import { decorate, observable, computed } from "mobx";

class Store {
  // variables
  icecreams = [];
  orders = [];
}
decorate(Store, {
  // observable properties
  icecreams: observable
  // computed properties
});
const Store = new Store();
export default Store;
