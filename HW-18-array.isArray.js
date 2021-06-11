// The Array.isArray() method determines whether the passed value is an Array.

function isArray(arg){
  if(typeof arg !== 'string' && arg.length > 0){
    return 'Array';
  }
  return false;
}
console.log(isArray('true'));
