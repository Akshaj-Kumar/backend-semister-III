const process=require("process")
console.log("Hello World")
//console.log("Hello")

const data=process.argv
console.log(data[2], data[3]);

///console.log(Number( data[5])+ Number (data[7]));

console.log(process.version)
console.log(process.platform)
console.log(process.pid) 
console.log(process)
console 