class Plane {

    throttle: number;
    rudderAngle: number;
    elevatorAngle: number;
    aileronAAngle: number;
    aileronBAngle: number;
    running: boolean;
    pitch: number;
    yaw: number;
    roll: number;

    constructor() {
        this.throttle = 0
        this.rudderAngle = 0
        this.elevatorAngle = 0
        this.aileronAAngle = 0
        this.aileronBAngle = 0
        this.pitch = 0
        this.yaw = 0
        this.roll = 0
        this.running = false
    }



    changeYaw(amount: number) {
        this.yaw += amount
    }
    changePitch(amount: number) {
        this.pitch += amount
    }
    changeRoll(amount: number) {
        if (amount > 60) amount = 60
        if (amount < -60) amount = -60
        if (amount === 0) {
            this.aileronAAngle = 0
            this.aileronBAngle = 0
            basic.showString("LOT")
        } else if (amount > 0) {
            basic.showString("ROA")
            this.aileronAAngle = amount
            this.aileronBAngle = amount - (amount * 2)
        } else {
            this.aileronAAngle = amount
            this.aileronBAngle = Math.abs(amount)
            basic.showString("ROL")
        }
        this.roll = amount
    }
    start() {
        if (this.running) return basic.showString("No")
        this.throttle = 100
        basic.showString("S-TU")
        this.running = true
        basic.forever(() => {
            if (this.throttle > 100) this.throttle = 100
            if (this.throttle < 0) this.throttle = 0
            if (this.pitch > 70) this.pitch = 70
            if (this.roll > 70) this.roll = 70
        })
        
    }
    throttleUp() {
        this.throttle += 10
        basic.showString("TU")
    }
    throttleDown() {
        this.throttle -= 10
        basic.showString("TD")
    }
}

let aircraft = new Plane()

input.onButtonPressed(Button.AB, function () {
    aircraft.start()
    console.log(aircraft.throttle)
})
input.onButtonPressed(Button.A, function () {
    aircraft.throttleUp()
    console.log(aircraft.throttle)
})
input.onButtonPressed(Button.B, function () {
    aircraft.throttleDown()
    console.log(aircraft.throttle)
})
input.onPinPressed(TouchPin.P0, function() {
    aircraft.changeYaw(5)
    basic.showString("CY")
    console.log(aircraft.yaw)
})
input.onPinPressed(TouchPin.P1, function () {
    aircraft.changePitch(5)
    basic.showString("CP")
    console.log(aircraft.pitch)
})
input.onPinPressed(TouchPin.P2, function () {
    aircraft.changeRoll(5)
    basic.showString("CR")
    console.log(aircraft.roll)
    console.log(aircraft.aileronAAngle)
    console.log(aircraft.aileronBAngle)
})

console.log(0)
