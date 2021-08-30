nivel = 0
índice = 0
lista = [randint(0, 3),
    randint(0, 3),
    randint(0, 3),
    randint(0, 3),
    randint(0, 3),
    randint(0, 3),
    randint(0, 3),
    randint(0, 3),
    randint(0, 3),
    randint(0, 3)]
índice2 = 0
while índice2 <= nivel:
    pins.digital_write_pin(DigitalPin.P13, 1)
    basic.pause(100)
    pins.digital_write_pin(DigitalPin.P13, lista[índice2])
    basic.pause(100)
    índice2 += 1

def on_forever():
    pass
basic.forever(on_forever)
