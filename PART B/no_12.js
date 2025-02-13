function isObject(variable){
    return variable !== null && typeof variable === 'object';
}
console.log(isObject({name:'Denla'}));
console.log(isObject('Denla'));