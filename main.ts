input.onPinPressed(TouchPin.P0, function () {
    if (input.pinIsPressed(TouchPin.P0)) {
        radio.sendString("closed")
        basic.showIcon(IconNames.No)
    } else {
        radio.sendString("open")
        basic.showIcon(IconNames.Square)
    }
    basic.pause(1000)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Heart)
    basic.pause(2000)
    basic.clearScreen()
})
radio.setGroup(1)
