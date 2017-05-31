const LinkedList = require('dbly-linked-list');

export default class HashTable {
  constructor() {
    this.data = {};
    this.count = 0;
  }

  put(key, value) {
    if (!this.data.hasOwnProperty(key)) {
      const list = new LinkedList();
      list.insert(value);
      this.data[key] = list;
      this.count++;
    }
    else {
      this.data[key].insert(value);
      this.count++;
    }
  }

  get(key) {
    if (this.data[key] !== undefined) return this.data[key].toArray();
    else return 'Key not found';
  }

  contains(key) {
    return this.data.hasOwnProperty(key);
  }

  remove(key) {
    delete this.data[key];
    this.count--;
  }

  size() {
    return this.count;
  }

  static hash(key) {
    return `${key}`;
  }

  iterate(callback) {
    for (let key in this.data) {
      let value = this.data[key].toArray();
      callback(key, value);
    }
  }
}
