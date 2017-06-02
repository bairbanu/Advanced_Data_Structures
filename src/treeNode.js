export default class TreeNode {
  constructor({data = null, left = null, right = null}) {
    this.data = data;
    this.left = left;
    this.right = right;
  }

  setData(data) {
    this.data = data;
  }

  getData() {
    return this.data;
  }

  getLeft() {
    return this.left;
  }

  getRight() {
    return this.right;
  }

  setLeft(data) {
    this.left = data;
    return this.left;
  }

  setRight(data) {
    this.right = data;
    return this.right;
  }
}
