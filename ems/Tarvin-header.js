/*
============================================
; Title:  header.js
; Author: Professor Krasso 
; Date:   05 December 2018
; Modified By: David Tarvin
; Description: Displays a formatted header
;===========================================
*/

/**
* Params: firstName, lastName, assignment
* Response: output 
* Description: Returns a well-formatted string header
*/
exports.display = function (firstName, lastName, assignment) {
	let output = '\n' + firstName + ' ' + lastName + '\n' + assignment + '\nDate: ' + 
	new Date().toLocaleDateString('en');

	return output;
}
