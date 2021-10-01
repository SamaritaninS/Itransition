const path = require('path')
const {SHA3} = require("sha3")
const ignore = ["node_modules"]
var fs = require('fs');

files = fs.readdirSync(process.cwd());
for(var file of files){
	const hash = new SHA3(256);
	data = fs.readFileSync(file, "utf8")
	hash.update(data)
	console.log(file + ' ' + hash.digest('hex'))
}