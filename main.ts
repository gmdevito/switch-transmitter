input.onPinPressed(TouchPin.P0, function () {
    radio.sendString("closed")
})
radio.setGroup(1)
