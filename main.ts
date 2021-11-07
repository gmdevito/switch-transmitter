input.onPinPressed(TouchPin.P0, function () {
    control.raiseEvent(
    EventBusSource.MICROBIT_ID_IO_P0,
    EventBusValue.MICROBIT_PIN_EVT_PULSE_HI
    )
})
input.onPinReleased(TouchPin.P0, function () {
    control.raiseEvent(
    EventBusSource.MICROBIT_ID_IO_P0,
    EventBusValue.MICROBIT_PIN_EVT_PULSE_LO
    )
})
control.onEvent(EventBusSource.MICROBIT_ID_IO_P0, EventBusValue.MICROBIT_EVT_ANY, function () {
    if (true) {
        basic.clearScreen()
        radio.sendString("closed")
        basic.showIcon(IconNames.No)
    } else {
        basic.clearScreen()
        radio.sendString("open")
        basic.showIcon(IconNames.Square)
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Chessboard)
    basic.pause(2000)
    basic.clearScreen()
})
radio.setGroup(1)
