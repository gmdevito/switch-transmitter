input.onPinPressed(TouchPin.P0, function () {
    pin0state = !(pin0state)
    if (pin0state) {
        basic.showIcon(IconNames.No)
        radio.sendString("closed")
    } else {
        basic.showIcon(IconNames.Square)
        radio.sendString("open")
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Chessboard)
    basic.pause(2000)
    basic.clearScreen()
})
let pin0state = false
radio.setGroup(1)
