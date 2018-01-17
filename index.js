function produceDrivingRange(blockRange) {
	return function (startBlock, endBlock){
		let startNumber = startBlock.replace(/\D/g,'');
		let endNumber = endBlock.replace(/\D/g,'');
		let distance = endNumber - startNumber
		if (distance < blockRange){
			return  `within range by ${distance}`
		} else {
			tooFar = distance - blockRange
			return `${tooFar} blocks out of range`
		};
	}	
}

function produceTipCalculator(percentage){
	return function(fare){
		return fare * percentage
	}
}

function createDriver() {
	let DriverId = 0
	return class {
		constructor(name){
			this.id = ++DriverId
			this.name = name
		}
	}
}




