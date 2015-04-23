#!/usr/bin/env node

//var split = require('split')
var map = require('through2-map')
var i = 0

process.stdin.pipe(map(function(chunk){
	i++
	if(i%2 == 0){
		return chunk.toString().toUpperCase()
	}else{
		return chunk.toString().toLowerCase()
	}
	})).pipe(process.stdout)
