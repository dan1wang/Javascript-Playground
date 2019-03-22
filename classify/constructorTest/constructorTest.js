/**
 * Test the output of various Javascript engine
 */

var _log = '';

function log(msg) { _log += msg + '\n'; }
function print() { if (typeof Logger === 'object') {Logger.log(_log);} else {console.log(_log);} }

function Obj() { return this; }

function constructorTest(obj) {
  if ((obj === null) || (obj === undefined)) return;
  log('typeof obj\n>  ' + typeof(obj));
  if (obj.constructor) {
    log('obj.constructor\n>  ' + obj.constructor)
  } else {
    log('obj.constructor\n>  undefined')
  }
  if ((obj.constructor) && (obj.constructor.name)) {
    log('obj.constructor.name\n>  ' + obj.constructor.name)
  } else {
    log('obj.constructor.name\n>  undefined')
  }
  log('Object.prototype.toString.call(obj)\n>  ' + Object.prototype.toString.call(obj));
}

function test() {

  var obj;
  log('------------------start------------------');

  obj = new Obj();
  log('obj = new Obj();');
  constructorTest(obj);

  log('\n-----------------------------------------\n');

  obj = new function() { return this; };
  log('obj = function() { return this; };');
  constructorTest(obj);

  log('-------------------end-------------------');

  print();
}

test();
