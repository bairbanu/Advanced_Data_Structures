import chai, { expect } from 'chai';
import { TreeNode, BinarySearchTree } from '../src/treeNodeBST';

describe('TreeNode_BinarySearchTree()', () => {

  let bst;
  beforeEach(() => {
    bst = new BinarySearchTree();
  })

  it('expects TreeNode() to be a function', () => {
    expect(TreeNode).to.be.a('function')
  })

  it('expects TreeNode BST to insert value correctly', () => {
    expect(bst.getRoot().data).to.be.null;

    bst.insert(20);
    expect(bst.count()).to.equal(1);
    expect(bst.getRoot().data).to.equal(20);

    expect(bst.insert(20)).to.equal('Duplicates not allowed');
    bst.insert(10);
    bst.insert(8);
    bst.insert(19);
    bst.insert(30);
    bst.insert(25);
    bst.insert(32);
    expect(bst.getRoot().right.right.data).to.equal(32);
  })

  it('expects search for data to return return a node object', () => {
    bst.insert(20);
    bst.insert(10);
    bst.insert(8);
    bst.insert(19);
    bst.insert(30);
    bst.insert(25);
    bst.insert(32);

    expect(bst.search(19).data).to.equal(19);
    expect(bst.search(32).data).to.equal(32);
    expect(bst.search(3)).to.be.null;
  })

  it('expects a deletion to happen correctly', () => {
    bst.insert(20);
    bst.insert(10);
    bst.insert(8);
    bst.insert(19);
    bst.insert(30);
    bst.insert(25);
    bst.insert(32);
    bst.insert(21);
    bst.insert(27);
    bst.insert(23);

    bst.remove(21);
    expect(bst.search(21)).to.be.null;

    bst.remove(8);
    expect(bst.search(8)).to.be.null;

    bst.insert(24);
    bst.remove(20);
    expect(bst.search(20)).to.be.null;
  })

  it('expects the binary search tree to be traversed in-order', () => {
    bst.insert(20);
    bst.insert(10);
    bst.insert(8);
    bst.insert(19);
    bst.insert(30);
    bst.insert(25);
    bst.insert(32);
    bst.insert(21);
    bst.insert(27);
    bst.insert(23);

    let test = [];
    function addArray(data) {
      test.push(data);
    }

    bst.traverse(addArray);
    expect(test).to.eql([ 8, 10, 19, 20, 21, 23, 25, 27, 30, 32 ]);
  })

})
