# Object.constructor Test

Output of `object.constructor` and `typeof object` in various JavaScript engines.

## Node.js 10
```JavaScript
obj = new Obj();
typeof obj; // object
obj.constructor; // function Obj() { return this; }
obj.constructor.name; // Obj
Object.prototype.toString.call(obj); // [object Object]

obj = function() { return this; };
typeof obj; // object
obj.constructor; // function() { return this; }
obj.constructor.name; // undefined
Object.prototype.toString.call(obj); // [object Object]
```

## Chrome 72
```JavaScript
obj = new Obj();
typeof obj; // object
obj.constructor; // function Obj() { return this; }
obj.constructor.name; // Obj
Object.prototype.toString.call(obj); // [object Object]

obj = function() { return this; };
typeof obj; // object
obj.constructor; // function() { return this; }
obj.constructor.name; // undefined
Object.prototype.toString.call(obj); // [object Object]
```

## Internet Explorer 11
```JavaScript
obj = new Obj();
typeof obj; // object
obj.constructor; // function Obj() { return this; }
obj.constructor.name; // undefined
Object.prototype.toString.call(obj); // [object Object]

obj = function() { return this; };
typeof obj; // object
obj.constructor; // function() { return this; }
obj.constructor.name; // undefined
Object.prototype.toString.call(obj); // [object Object]
```

## Google Apps Script
```JavaScript
obj = new Obj();
typeof obj; // object
obj.constructor;
//
// function Obj() {
//     return this;
// }
//
obj.constructor.name; // Obj
Object.prototype.toString.call(obj) // [object Object]

obj = function() { return this; };
typeof obj; // object
obj.constructor;
//
// function () {
//     return this;
// }
//
obj.constructor.name; // undefined
Object.prototype.toString.call(obj); // [object Object]
```
