function Fighter(name, health, damagePerAttack) {
  this.name = name;
  this.health = health;
  this.damagePerAttack = damagePerAttack;
  this.toString = function () { return this.name; }
}

function declareWinner(fighter1, fighter2, firstAttacker) {
  const fighter1NumberOfAttacks = Math.ceil( fighter2.health / fighter1.damagePerAttack );
  const fighter2NumberOfAttacks = Math.ceil( fighter1.health / fighter2.damagePerAttack );

  if(fighter1NumberOfAttacks < fighter2NumberOfAttacks) return fighter1.name;

  if(fighter2NumberOfAttacks < fighter1NumberOfAttacks) return fighter2.name;

  return firstAttacker;
}

module.exports = {
  Fighter,
  declareWinner,
};
