class Fighter {
  constructor(propertiesObject) {
    let name = propertiesObject.name,
        damage = propertiesObject.damage,    
        hp = propertiesObject.hp,
        totalHp = propertiesObject.hp,
        strength = propertiesObject.strength,
        agility = propertiesObject.agility,
        wins = 0,
        losses = 0;

    this.getName = () => name;
    this.getDamage = () => damage;
    this.getHealth = () => hp;
    this.getTotalHp = () => totalHp;
    this.getStrength = () => strength;
    this.getAgility = () => agility;
    this.getWins = () => wins;
    this.getLosses = () => losses;

    this.setName = (newValue) => {
      name = newValue;
    
    }

    this.setDamage = (newValue) => {
      damage = newValue;
    
    }

    this.setHealth = (newValue) => {
      hp = newValue;
    
    }

    this.setTotalHp = (newValue) => {
      totalHp = newValue;
    
    }

    this.setStrength = (newValue) => {
      strength = newValue;
    
    }

    this.setAgility = (newValue) => {
      agility = newValue;
    
    }

    this.setWins = (newValue) => {
      wins = newValue;
    
    }

    this.setLosses = (newValue) => {
      losses = newValue;

    }
  }

  dealDamage(damageAmount) {
    this.setHealth(this.getHealth() - damageAmount);
    
    if (this.getHealth() < 0) {
      this.setHealth(0);

    }
  }

  heal(healAmount) {
    this.setHealth(this.getHealth() + healAmount);

    if (this.getHealth() > this.getTotalHp()) {
      this.setHealth(this.getTotalHp());

    }
  }

  addWin() {
    this.setWins(this.getWins() + 1);

  }

  addLoss() {
    this.setLosses(this.getLosses() + 1);
  
  }

  logCombatHistory() {
    console.log(`Name: ${this.getName()}, Wins ${this.getWins()}, Losses: ${this.getLosses()}`);

  }

  attack(deffender) {
    const FULL_CHANCE = 100;
    let attackSuccess = 1 - (deffender.getStrength() + deffender.getAgility()) / FULL_CHANCE;

    if (attackSuccess > Math.random()) {
      deffender.dealDamage(this.getDamage());
      console.log(`${this.getName()} makes ${this.getDamage()} damage to ${deffender.getName()}`);

    } else {
      console.log(`${this.getName()} attack missed`);

    }
  }
}

function battle(fighter1, fighter2) {
  if (fighter1.getHealth() === 0) {
    console.log(`${fighter1.getName()} is dead and can\`t fight.`);

  } else if (fighter2.getHealth() === 0) {
    console.log(`${fighter2.getName()} is dead and can\`t fight.`);

  } else {
    let currentTurn = 1;

    while (fighter1.getHealth() > 0 && fighter2.getHealth() > 0) {
      if (currentTurn) {
        fighter1.attack(fighter2);
        currentTurn = 0;

      } else {
        fighter2.attack(fighter1);
        currentTurn = 1;

      }
    }

    if (fighter1.getHealth() === 0) {
      console.log(`${fighter2.getName()} has won!`);
      fighter1.addLoss();
      fighter2.addWin();

    } else if (fighter2.getHealth() === 0) {
      console.log(`${fighter1.getName()} has won!`);
      fighter2.addLoss();
      fighter1.addWin();

    }
  }
}
const myFighter1 = new Fighter({name: 'Maximus', damage: 20, strength: 20, agility: 15, hp: 100});
const myFighter2 = new Fighter({name: 'Comodus', damage: 25, strength: 20, agility: 20, hp: 90});
