input.onButtonPressed(Button.A, function () {
    if (játékban == 1) {
        pont += 1
        basic.showNumber(pont)
    }
})
input.onGesture(Gesture.Shake, function () {
    játékban = 1
    animáció()
    szam = randint(0, 2)
    if (szam == 0) {
        basic.showLeds(`
            . . . . .
            . # # # .
            # # # # #
            . # # # .
            . . . . .
            `)
    } else if (szam == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            `)
    } else {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            # # . # #
            # # . # #
            `)
    }
})
function animáció () {
    for (let index = 0; index < 3; index++) {
        basic.showLeds(`
            . . . . .
            . # # # .
            # # # # #
            . # # # .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            # # . # #
            # # . # #
            `)
    }
    basic.clearScreen()
    basic.pause(1000)
}
input.onButtonPressed(Button.AB, function () {
    játékban = 0
    pont = 0
    animáció()
})
input.onButtonPressed(Button.B, function () {
    if (játékban == 1) {
        pont += -1
        basic.showNumber(pont)
    }
})
let szam = 0
let pont = 0
let játékban = 0
animáció()
játékban = 0
