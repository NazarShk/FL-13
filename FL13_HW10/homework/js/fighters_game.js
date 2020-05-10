class Fighter {
  constructor(propertiesObject) {
    let name = propertiesObject.name,
      damage = propertiesObject.damage,
      health = propertiesObject.hp,
      totalHealth = propertiesObject.hp,
      strength = propertiesObject.strength,
      agility = propertiesObject.agility,
      win = 0,
      loss = 0;

    this.getName = () => name;
    this.getDamage = () => damage;
    this.getHealth = () => health;
    this.getTotalHealth = () => totalHealth;
    this.getStrength = () => strength;
    this.getAgility = () => agility;
    this.getWin = () => win;
    this.getLoss = () => loss;

    this.setName = (newValue) => {
      name = newValue;

    }

    this.setDamage = (newValue) => {
      damage = newValue;

    }

    this.setHealth = (newValue) => {
      health = newValue;

    }

    this.setTotalHealth = (newValue) => {
      totalHealth = newValue;

    }

    this.setStrength = (newValue) => {
      strength = newValue;

    }

    this.setAgility = (newValue) => {
      agility = newValue;

    }

    this.setWin = (newValue) => {
      win = newValue;

    }

    this.setLoss = (newValue) => {
      loss = newValue;

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

    if (this.getHealth() > this.getTotalHealth()) {
      this.setHealth(this.getTotalHealth());

    }
  }

  addWin() {
    this.setWin(this.getWin() + 1);

  }

  addLoss() {
    this.setLoss(this.getLoss() + 1);

  }

  logCombatHistory() {
    console.log(`Name: ${this.getName()}, Wins ${this.getWin()}, Losses: ${this.getLoss()}`);

  }

  attack(defender) {
    const FULL_CHANCE = 100;
    let successfulAttack = 1 - (defender.getStrength() + defender.getAgility()) / FULL_CHANCE;

    if (successfulAttack > Math.random()) {
      defender.dealDamage(this.getDamage());
      console.log(`${this.getName()} makes ${this.getDamage()} damage to ${defender.getName()}`);

    } else {
      console.log(`${this.getName()} attack missed`);

    }
  }
}

function battle(myFighter1, myFighter2) {
  if (myFighter1.getHealth() === 0) {
    console.log(`${myFighter1.getName()} is dead and can\`t fight.`);

  } else if (myFighter2.getHealth() === 0) {
    console.log(`${myFighter2.getName()} is dead and can\`t fight.`);

  } else {
    let currentQueue = 1;

    while (myFighter1.getHealth() > 0 && myFighter2.getHealth() > 0) {
      if (currentQueue) {
        myFighter1.attack(myFighter2);
        currentQueue = 0;

      } else {
        myFighter2.attack(myFighter1);
        currentQueue = 1;

      }
    }

    if (myFighter1.getHealth() === 0) {
      console.log(`${myFighter2.getName()} has won!`);
      myFighter1.addLoss();
      myFighter2.addWin();

    } else if (myFighter2.getHealth() === 0) {
      console.log(`${myFighter1.getName()} has won!`);
      myFighter2.addLoss();
      myFighter1.addWin();

    }
  }
}


