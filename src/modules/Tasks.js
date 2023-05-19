export default class task {
  constructor(name, date, priority){
    this._name = name;
    this._date = date;
    this.priority = priority;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }
}