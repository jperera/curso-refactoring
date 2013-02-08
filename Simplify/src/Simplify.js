function BirthDay() {

	this.isThereAPartyReadyForMe = function(name, date) {
		var signal = false;
		var chunk=date.split('/')[1];
		
		if (chunk &&(chunk<6 && chunk>4 || chunk==5)){
			this.prepareParty();
			signal=true;
		}
		if(name && (name[0] == 'X' && name[3] == 'i' && (name[2] != 'b'))) {
			signal = (name[1] == 'a');
			if (!(name[0] == 'x')){
				this.prepareParty();
			}
		}
		if(!signal) {
			return 'No party for you';
		} else {
			return 'Party!!!';
		}
	};

	this.prepareParty = function() {};
}


function removeCharacter(chain, character) {
	var i = 0;
	var enc = false;
	var result = '';

	while(!enc){
		if (chain[i] != character){
			result = result + chain[i];
		}else{
			enc = true;
			result = result + chain.slice(i+1);
		}
		i++;
	}

	return result;
}




