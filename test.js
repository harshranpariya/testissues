console.log('HERE');
if (process.env.fail === 'true') {
	// bail out
	throw 'FAILURE';
}
console.log('SUCCESS');
