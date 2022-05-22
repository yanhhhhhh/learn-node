const bar = require('./bar.js')

console.log('main.js中的bar',bar.name);
setTimeout(()=>{
  bar.name = 'hhh'
console.log('1s后修改main.js中的bar',bar.name);

},1000)
