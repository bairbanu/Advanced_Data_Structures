class Node {
  constructor(data = null) {
    this.data = data;
    this.left = null;
    this.right = null;
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
}

export default class BinarySearchTree {
  constructor() {
    this.root = new Node();
    this.size = 0;
  }

  insert(data) {
    if (this.size === 0) {
      this.root.setData(data);
      this.size++;
    }
    else {
      const entry = makeEntry(data, this.root);
      if (entry === 'Duplicates not allowed') return entry;
    }
  }

  search(data) {
    return searchResult(data, this.root);
  }

  remove(data) {
    let deleteNode = this.search(data);

    if(deleteNode.left === null && deleteNode.right === null) {
      processNoChildDeletion(data, this.root);
    }
    else if (deleteNode.left === null || deleteNode.right === null) {
      if (deleteNode.left !== null) {
        deleteNode.data = deleteNode.left.data;
        deleteNode.left = null;
      }
      else {
        deleteNode.data = deleteNode.right.data;
        deleteNode.right = null;
      }
    }
    else {
      processTwoChildDeletion(deleteNode);
    }
  }

  traverse(callback) {
    executeTraversal(this.root, callback);
  }

  count() {
    return this.size;
  }

  getRoot() {
    return this.root;
  }
}

function makeEntry(data, node) {
  if (data === node.data) {
    return 'Duplicates not allowed';
  }
  else if (node.left === null && data < node.data) {
    const entry = new Node(data);
    node.left = entry;
  }
  else if (node.right === null && data > node.data) {
    const entry = new Node(data);
    node.right = entry;
  }
  else if (data < node.data) {
    makeEntry(data, node.left);
  }
  else {
    makeEntry(data, node.right);
  }
}

function searchResult(data, node) {
  if (node === null) return null;
  if (data === node.data) return node;
  else if (data < node.data) return searchResult(data, node.left);
  else return searchResult(data, node.right);
}

function processNoChildDeletion(data, node) {
  let currentNode = node;
  let previousNode;

  while (data !== currentNode.data) {
    if (data < currentNode.data) {
      previousNode = currentNode;
      currentNode = currentNode.left;
    }
    else {
      previousNode = currentNode;
      currentNode = currentNode.right;
    }
  }

  if (data === previousNode.left.data) previousNode.left = null;
  else previousNode.right = null;
}

function processTwoChildDeletion(node) {
  const goRight = node.right;
  let goLeft = goRight.left;
  let inOrderSuccessor;

  while (goLeft !== null) {
    inOrderSuccessor = goLeft;
    goLeft = goLeft.left;
  }

  node.data = inOrderSuccessor.data;

  if (inOrderSuccessor.left !== null) {
    inOrderSuccessor.data = inOrderSuccessor.left.data;
    inOrderSuccessor.left = null;
  }
  else if (inOrderSuccessor.right !== null) {
    inOrderSuccessor.data = inOrderSuccessor.right.data;
    inOrderSuccessor.right = null;
  }
}

function executeTraversal(node, callback) {
  if (node === null) return;
  executeTraversal(node.left, callback);
  callback(node.data);
  executeTraversal(node.right, callback);
}
