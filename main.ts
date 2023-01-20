let red = 0
let green = 0
let blue = 0
let RGBColor = 0
let L = 0
let S = 0
let H = 0
led.enable(false)
basic.forever(function () {
    H = Math.map(pins.analogReadPin(AnalogPin.P3), 0, 1023, 0, 360)
    S = Math.map(pins.analogReadPin(AnalogPin.P4), 0, 1023, 0, 100)
    L = Math.map(pins.analogReadPin(AnalogPin.P10), 0, 1023, 0, 100)
    RGBColor = neopixel.hsl(H, S, L)
    blue = RGBColor % 255
    green = RGBColor % 65535 / 255
    red = RGBColor / 65535
    red = Math.map(red, 0, 255, 1023, 0)
    green = Math.map(green, 0, 255, 1023, 0)
    blue = Math.map(blue, 0, 255, 1023, 0)
    pins.analogWritePin(AnalogPin.P0, blue)
    pins.analogWritePin(AnalogPin.P1, green)
    pins.analogWritePin(AnalogPin.P2, red)
})
