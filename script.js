const extendHex = (shortHex) => {
  // write your code here
	if(shortHex.length ===4){
		let a,b,c;
		a = shortHex[1];
		b = shortHex[2];
		c = shortHex[3];
		let hexcode = "#"+a+a+b+b+c+c;
		return hexcode;
	}
	if(shortHex.length===3){
		let a,b,c;
		a = shortHex[0];
		b = shortHex[1];
		c= shortHex[2];
		let hexcode = "#"+a+a+b+b+c+c;
		return hexcode;
	}	
};

// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));
