#!/usr/bin/env node

var concat = require('concat-stream')

process.stdin.pipe(concat(function(stream){
	var output = stream.toString().split('').reverse().join('')
	
	console.log(output)
	}))
	
