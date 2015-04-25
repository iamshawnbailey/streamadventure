#!/usr/bin/env node

var spawn = require('child_process').spawn;
var duplexer = require('duplexer')

module.exports = function(cmd, args){
	
	child = spawn(cmd, args);
	var duplex = duplexer(child.stdout, child.stdin);
	return duplex
}