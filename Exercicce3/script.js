let input = prompt('Entre un mot');

function Case(input) {
    let resultat = '';
    for (let i = 0; i < input.length; i++) {
        let contenant = input[i];
        if (contenant === contenant.uppercase()) {
            resultat += contenant.toLowerCase();
        } else {
            resultat = resultat + contenant.uppercase();
        }
    }
    return resultat;
}
console.log(Case(input));