let t_start = 0
let v_start = 0
let t_stop = 0
let v_stop = 0
let deltat = 0
input.onButtonPressed(Button.A, function () {
    t_start = input.runningTime()
    v_start = pins.analogReadPin(AnalogPin.P0)
    while (t_stop < 0) {
        basic.showIcon(IconNames.Heart)
        basic.pause(500)
        basic.clearScreen()
        basic.pause(500)
        v_stop = pins.analogReadPin(AnalogPin.P0)
        if (v_stop < v_start * 0.9) {
            t_stop = input.runningTime()
            deltat = (t_stop - t_start) / 1000
        }
    }
    while (true) {
        basic.showNumber(deltat)
    }
})
basic.forever(function () {
    t_stop = -1
})
