const name ='jae'
const age = 18
exports.name = name
exports.age = age
setTimeout(()=>{

console.log('2s后打印bar中的exports.name',exports.name);

},2000)
