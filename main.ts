input.onPinPressed(TouchPin.P0, function () {
    basic.clearScreen()
    radio.sendString("closed")
    basic.showIcon(IconNames.No)
})
input.onPinReleased(TouchPin.P0, function () {
    basic.clearScreen()
    radio.sendString("open")
    basic.showIcon(IconNames.Square)
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Chessboard)
    basic.pause(2000)
    basic.clearScreen()
})
radio.setGroup(1)
