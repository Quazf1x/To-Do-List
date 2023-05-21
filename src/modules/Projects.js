export let projectList = [
  {
    name: 'Default Project',
    date: '21-05-2023',
    description: 'lol :3',
    priority: 'Medium',
    tasks: []
  }
];

export default class project {

  constructor(name, description, date, priority){
    this._name = name;
    this._date = date;
    this._description = description;
    this.priority = priority;
    this.tasks = [];
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }
}