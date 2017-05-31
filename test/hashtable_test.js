import chai, { expect } from 'chai';
import HashTable from '../src/hashtable';


describe('HashTable()', () => {

  let ht;
  beforeEach(() => {
    ht = new HashTable();
  })


  it('expects HashTable() to be a function', () => {
    expect(HashTable).to.be.a('function')
  })

  it('pushes an element to the right key on the HashTable', () => {
    ht.put('hi', 'world');
    ht.put('hi', 'excellent');
    ht.put('hisdf', 'exsdf');

    expect(ht.get('hisdf')).to.eql([ 'exsdf' ]);
    expect(ht.get('hi')).to.eql([ 'world', 'excellent' ]);
  })

  it('expects key to be found in the HashTable', () => {
    ht.put('hello', 'world');
    expect(ht.contains('hello')).to.be.true;
    expect(ht.contains('hell')).to.be.false;
  })

  it('expects key to be successfully deleted from HashTable', () => {
    ht.put('hello', 'world');
    ht.put('hello', 'great!');
    expect(ht.get('hello')).to.eql([ 'world', 'great!' ]);
    ht.remove('hello');
    expect(ht.get('hello')).to.equal('Key not found');
  })

  it('expects a hash to be return for a key', () => {
    expect(HashTable.hash('stoked')).to.equal('stoked');
  })

  it('expects a callback function to called with each key value pair', () => {
    ht.put('hi', 'yo');
    ht.put('hi', 'my friend!');
    ht.put('hello', 'world!');

    let print = '';
    function callback(k, v) {
      print += ` ${k}: ${v}`;
    }

    ht.iterate(callback);
    expect(print).to.equal(' hi: yo,my friend! hello: world!');
  })

})
