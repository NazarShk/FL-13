function Vehicle(color, engine) {
    this._color = color;
    this._engine = engine;
    this._maxSpeed = 70;
    this._isDriving = false;
    this._isBreaking = false;
    this._isStopped = true;
    this._currentSpeed = 0;
    this._timer = null;
    this._finishedDriveMsg = `Vehicle has stopped, max speed during the drive was `
    this._currDriveMaxSpeed = null;
}

Vehicle.prototype = {
    constructor: Vehicle,

    upgradeEngine: function (newEngine, maxSpeed) {
        if (!this._isStopped) {
            return console.log(`Can only upgrade the engine while stopped!`)
        }

        this._engine = newEngine;
        this._maxSpeed = +maxSpeed;

        console.log(`Engine've been upgraded. New engine: ${this._engine}, 
        new max speed: ${this._maxSpeed}`)
    },

    getInfo: function () {

        return {
            color: this._color,
            engine: this._engine,
            maxSpeed: this._maxSpeed,
            model: this._model
        }
    },

    drive: function () {
        if (this._isDriving) {
            console.log('Already driving');

            return;
        }

        const overheatingDifference = 30;
        const accelerationSpeed = 2000;
        const driving = function () {
            this._currentSpeed += 20;

            if (this._currentSpeed > this._currDriveMaxSpeed) {
                this._currDriveMaxSpeed = this._currentSpeed;
            }

            console.log(`${this._model || 'Vehicle'} is driving, current speed: ${this._currentSpeed}`);

            if (this._currentSpeed > this._maxSpeed) {
                console.warn('speed is too high, SLOW DOWN!');

                if (this._engineOverheatMsg && this._currentSpeed - this._maxSpeed >= overheatingDifference) {
                    console.warn(this._engineOverheatMsg);
                    this.stop();
                }
            }
        }.bind(this);

        if (this._startDriveMsg) {
            console.log(this._startDriveMsg)
        }

        this._isStopped = false;
        this._currDriveMaxSpeed = 0;
        this._isDriving = true;
        this._timer = setInterval(driving, accelerationSpeed)
    },

    stop: function () {
        if (this._isBreaking) {
            console.log('Already slows down');

            return;
        }

        if (this._isStopped) {
            console.log('Already stopped');

            return;
        }

        const breakingSpeed = 1500;
        const breaking = function () {
            this._currentSpeed -= 20;

            if (this._currentSpeed <= 0) {
                console.log(this._finishedDriveMsg + (this instanceof Motocycle ? '' : this._currDriveMaxSpeed));
                this._isBreaking = false;
                this._isStopped = true;
                clearInterval(this._timer);

                return;
            }

            console.log(`${this._model || 'Vehicle'} is breaking, current speed: ${this._currentSpeed}`);
        }.bind(this);

        this._isDriving = false;
        this._isBreaking = true;
        clearInterval(this._timer);
        this._timer = setInterval(breaking, breakingSpeed);
    }
}

function Car(model, color, engine) {
    this._model = model;
    Vehicle.call(this, color, engine);
    this._maxSpeed = 80;
    this._finishedDriveMsg = `Car ${this._model} has stopped, max speed during the drive `
}
Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;
Car.prototype.changeColor = function (color) {
    if (this._color === color) {
        console.log('The car is already ' + color);

        return;
    }

    this._color = color;
    console.log('New ' + this._model + ' color is ' + this._color)
}

function Motocycle(model, color, engine) {
    this._model = model;
    Vehicle.call(this, color, engine);
    this._maxSpeed = 90;
    this._finishedDriveMsg = `Motocycle ${this._model} has stopped, good drive.`;
    this._startDriveMsg = 'Let`s drive!';
    this._engineOverheatMsg = 'Engine overheating';
}
Motocycle.prototype = Object.create(Vehicle.prototype);
Motocycle.prototype.constructor = Motocycle;