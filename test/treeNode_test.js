import chai, { expect } from 'chai';
import TreeNode from '../src/treeNode';

describe('TreeNode()', () => {

  it('expects TreeNode() to be a function', () => {
    expect(TreeNode).to.be.a('function')
  })

  it('expects to get correct data from TreeNode', () => {
    const leastNode = new TreeNode({data: 3});
    expect(leastNode.getData()).to.eql(3);
  })

  it('expects to get left node or return null', () => {
    const leastNode = new TreeNode({data: 3});
    expect(leastNode.getLeft()).to.be.null;
  })

  it('expects set left node correctly', () => {
    const leastNode = new TreeNode({data: 3});
    const node = new TreeNode({data: 5});
    node.setLeft(leastNode);
    expect(node.getLeft()).to.eql({ data: 3, left: null, right: null });
  })

  it('expects to get right node or return null', () => {
    const leastNode = new TreeNode({data: 3});
    expect(leastNode.getRight()).to.be.null;
  })

  it('expects set right node correctly', () => {
    const leastNode = new TreeNode({data: 3});
    const node = new TreeNode({data: 5});
    node.setRight(leastNode);
    expect(node.getRight()).to.eql({ data: 3, left: null, right: null });
  })

})
