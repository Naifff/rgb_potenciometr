let RGBColor = 0
let blue = 0
let green = 0
let red = 0
basic.forever(function () {
    for (let index = 0; index <= 360; index++) {
        RGBColor = neopixel.hsl(index, 100, 50)
        blue = RGBColor % 255
        green = RGBColor / 65535 % 255
        red = RGBColor / 65535
        red = Math.map(red, 0, 255, 1023, 0)
        green = Math.map(green, 0, 255, 1023, 0)
        blue = Math.map(blue, 0, 255, 1023, 0)
        pins.analogWritePin(AnalogPin.P0, blue)
        pins.analogWritePin(AnalogPin.P1, green)
        pins.analogWritePin(AnalogPin.P2, red)
        basic.pause(10)
    }
})
