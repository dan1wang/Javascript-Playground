# Classify

A JavaScript function to get the class/type name of a JavaScript object.

Code adapted from from Axel Rauschmayer's 2011-11-08 post
"[Improving the JavaScript typeof operator](http://2ality.com/2011/11/improving-typeof.html)".

# Example

```JavaScript
function MyObject() { return this; }
obj = new MyObject();
classify(obj); // 'MyObject'
classify(1); // 'number'
classify(''); // 'string'
classify(true); // 'boolean'
classify(new Number(1)); // 'Number'
classify(new String('')); // 'String'
classify(new Boolean(true)); // 'Boolean'
classify({}); // 'Object'
classify([]); // 'Array'
classify(undefined); // 'undefined'
classify(null); // 'null'
classify(/a-z/); // 'RegExp'
classify(new Date()); // 'Date'
classify(JSON.parse('{"a":1}')); // Object
classify(document); // 'HTMLDocument'
(function() { return classify(arguments) }()); // 'Object'
classify(function(){return 1}); // 'Function'
```

# References
* Get the Name Of an Object's Type. (n.d.). Retrieved from https://stackoverflow.com/a/332429/3122071
* Rauschmayer, A. (2011, November 8). Improving the JavaScript typeof operator.
Retrieved from http://2ality.com/2011/11/improving-typeof.html
