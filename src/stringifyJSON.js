// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {

  if (obj === null) {
    return "null";
  }
  if (obj === undefined || typeof(obj) === 'function') { return; }
  if (typeof(obj) === 'string') {
    return '"' + obj + '"';
  }
  if (Array.isArray(obj)) {
    var output = [];
    if (obj[0] === undefined) {
      return '[]';
    } else {
      obj.forEach(function(ele, i){
        if (i === obj.length - 1) {
          output.push(stringifyJSON(ele));
        } else {
          output.push(stringifyJSON(ele));
        }
      });
    }
    return '[' + output + ']';
  }
  if (obj instanceof Object) {
    var keys = Object.keys(obj);
    if (keys.length !== 0) {
      var output = '';

      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];

        if (key === undefined || obj[key] === undefined || typeof key === 'function' || typeof obj[key] === 'function') {
         
        } else {
          if (i === keys.length - 1) {
            output += stringifyJSON(key) + ':' + stringifyJSON(obj[key]); 
          } else {
            output += stringifyJSON(key) + ':' + stringifyJSON(obj[key]) + ','; 
          }
        }
      }
      return '{' + output + '}';
    } else {
      return '{}';
    }
  }
  return obj.toString();
};
