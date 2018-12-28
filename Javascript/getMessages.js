

Array.prototype.getShortMessage= function () {
	let resultat = [];
  for (i=0; i<this.length; i++) {
    if (this[i].length < 50) {
    	resultat.push(this[i]);
    }
  }
  return resultat;
}

var messages = [ "bonjour je suis Ali", "je suis le message numero 2", "je suis un long message dont la longeur depasse 50 carateres" ]; 
var cv=messages.getShortMessage();
console.log(cv);
