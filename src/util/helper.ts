var getProto = Object.getPrototypeOf;
var class2type = {};
var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call(Object);

export const isFunction = (obj) => {

    // Support: Chrome <=57, Firefox <=52
    // In some browsers, typeof returns "function" for HTML <object> elements
    // (i.e., `typeof document.createElement( "object" ) === "function"`).
    // We don't want to classify *any* DOM node as a function.
    return typeof obj === "function" && typeof obj.nodeType !== "number";
};

export const isPlainObject = (obj) => {
    var proto, Ctor;

    // Detect obvious negatives
    // Use toString instead of jQuery.type to catch host objects
    if (!obj || toString.call(obj) !== "[object Object]") {
        return false;
    }

    proto = getProto(obj);

    // Objects with no prototype (e.g., `Object.create( null )`) are plain
    if (!proto) {
        return true;
    }

    // Objects with prototype are plain iff they were constructed by a global Object function
    Ctor = hasOwn.call(proto, "constructor") && proto.constructor;
    return typeof Ctor === "function" && fnToString.call(Ctor) === ObjectFunctionString;
};

export const deepCopy = <T>(targetArg: any, copyArg: T): T => {
    var name, src, copyIsArray, clone,
        target = targetArg, copy = copyArg;

    // Handle case when target is a string or something (possible in deep copy)
    if (typeof target !== "object" && !isFunction(target)) {
        target = {};
    }

    // Extend the base object
    for (name in copyArg) {
        copy = copyArg[name];

        // Prevent Object.prototype pollution
        // Prevent never-ending loop
        if (name === "__proto__" || target === copy) {
            continue;
        }

        // Recurse if we're merging plain objects or arrays
        if (copy && (isPlainObject(copy) ||
            (copyIsArray = Array.isArray(copy)))) {
            src = target[name];

            // Ensure proper type for the source value
            if (copyIsArray && !Array.isArray(src)) {
                clone = [];
            } else if (!copyIsArray && !isPlainObject(src)) {
                clone = {};
            } else {
                clone = src;
            }
            copyIsArray = false;

            // Never move original objects, clone them
            target[name] = deepCopy(clone, copy);

            // Don't bring in undefined values
        } else if (copy !== undefined) {
            target[name] = copy;
        }
    }

    // Return the modified object
    return target;
};


let keyCallbackMap = new Map();
export const reduceFrequency = (key: string, callback: Function, delay?: number) => {
     keyCallbackMap.has(key)&&clearTimeout(keyCallbackMap.get(key));
     let timerId = setTimeout(()=>{
        callback() 
        keyCallbackMap.delete(key)
    }, delay || 200);
    keyCallbackMap.set(key, timerId);
}