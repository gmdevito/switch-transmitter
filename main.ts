input.onPinPressed(TouchPin.P0, function () {
    radio.sendString("closed")
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Heart)
    basic.pause(2000)
    basic.clearScreen()
})
radio.setGroup(1)
