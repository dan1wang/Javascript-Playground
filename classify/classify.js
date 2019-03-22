/**
 * A utility function to get the type/class name of an object
 * Code adapted from a post from Axel Rauschmayer on 2011-11-08:
 * http://2ality.com/2011/11/improving-typeof.html
 */
function classify(value) {
    if (value === null)
        return 'null';
    if (value === undefined)
        return 'undefined';
    var t = typeof value;
    switch (t) {
        case 'object':
            if (value.constructor) {
                if (value.constructor.name) {
                    return value.constructor.name;
                }
                else {
                    // Internet Explorer
                    var match = value.constructor.toString().match(/^function (.+)\(.*$/);
                    if (match) {
                        return match[1];
                    }
                }
            }
            // fallback, for nameless constructors etc.
            return Object.prototype.toString.call(value).match(/^\[object (.+)\]$/)[1];
        default:
            return t;
    }
}
