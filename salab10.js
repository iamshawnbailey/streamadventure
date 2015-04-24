#!/usr/bin/env node

var trumpet = require('trumpet')
var fs = require('fs')
var map = require('through2-map')

//  Create the Trumpet object.  
var tr = trumpet()

//  Create the sub-stream that is associated with the trumpet object.  
//  Trumpet has no input yet but the sub-stream is still created
var stream = tr.select('.loud').createStream()

//  Setup the pipe and map operations for the sub-stream.  This will be executed when tr gets an input.
stream.pipe(map(function(chunk){
	return chunk.toString().toUpperCase()
	})).pipe(stream)

	
//  tr is assigned an input stream and creates the sub-stream based on the selection criteria
//  sub-stream is then run through the pipe and map to change the text to uppercase and this is then piped back to itself
//  When this is done, tr is then piped to stdout
process.stdin.pipe(tr).pipe(process.stdout)
	

	



