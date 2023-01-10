/**
 * 
 * @param {*} name :
 * @returns le nom abrevié
 */

function abbrevName(name) {
  /*diviser le nom en tableau de nom
  */ 
  const mots = name.split(' ');
  

  const premierMot = mots[0];
  const deuxiemeMot = mots[mots.length - 3][0];
  
  
  return `${premierMot} ${deuxiemeMot}.`;
}


console.log(abbrevName("Diarrassouba seydou "));