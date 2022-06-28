// Object.create() 方法创建一个新对象，使用现有的对象来提供新创建的对象的 __proto__。MDN
/* 
 * Object.create(proto，[propertiesObject])
 * proto：新创建对象的原型对象（对象或null）
 * propertiesObject：可选。要添加到新对象的可枚举（新添加的属性是其自身的属性，而不是其原型链上的属性）的属性。
*/
function create(obj){
  function F() {}
  F.prototype = obj
  return new F()
}