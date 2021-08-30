function Erro () {
    music.startMelody(music.builtInMelody(Melodies.Funk), MelodyOptions.Once)
    for (let index = 0; index < 3; index++) {
        pins.digitalWritePin(DigitalPin.P13, 1)
        pins.digitalWritePin(DigitalPin.P14, 0)
        pins.digitalWritePin(DigitalPin.P15, 0)
        pins.digitalWritePin(DigitalPin.P16, 0)
        basic.pause(50)
        pins.digitalWritePin(DigitalPin.P13, 0)
        pins.digitalWritePin(DigitalPin.P14, 1)
        pins.digitalWritePin(DigitalPin.P15, 0)
        pins.digitalWritePin(DigitalPin.P16, 0)
        basic.pause(50)
        pins.digitalWritePin(DigitalPin.P13, 0)
        pins.digitalWritePin(DigitalPin.P14, 0)
        pins.digitalWritePin(DigitalPin.P15, 1)
        pins.digitalWritePin(DigitalPin.P16, 0)
        basic.pause(50)
        pins.digitalWritePin(DigitalPin.P13, 0)
        pins.digitalWritePin(DigitalPin.P14, 0)
        pins.digitalWritePin(DigitalPin.P15, 0)
        pins.digitalWritePin(DigitalPin.P16, 1)
        basic.pause(50)
        pins.digitalWritePin(DigitalPin.P13, 0)
        pins.digitalWritePin(DigitalPin.P14, 0)
        pins.digitalWritePin(DigitalPin.P15, 1)
        pins.digitalWritePin(DigitalPin.P16, 0)
        basic.pause(50)
        pins.digitalWritePin(DigitalPin.P13, 0)
        pins.digitalWritePin(DigitalPin.P14, 1)
        pins.digitalWritePin(DigitalPin.P15, 0)
        pins.digitalWritePin(DigitalPin.P16, 0)
        basic.pause(50)
        pins.digitalWritePin(DigitalPin.P14, 0)
    }
    music.stopAllSounds()
    control.reset()
}
function Ganhou () {
    music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once)
    for (let index = 0; index < 10; index++) {
        pins.digitalWritePin(DigitalPin.P13, 1)
        pins.digitalWritePin(DigitalPin.P14, 0)
        pins.digitalWritePin(DigitalPin.P15, 0)
        pins.digitalWritePin(DigitalPin.P16, 1)
        basic.pause(200)
        pins.digitalWritePin(DigitalPin.P13, 0)
        pins.digitalWritePin(DigitalPin.P14, 1)
        pins.digitalWritePin(DigitalPin.P15, 1)
        pins.digitalWritePin(DigitalPin.P16, 0)
        basic.pause(200)
        pins.digitalWritePin(DigitalPin.P14, 0)
        pins.digitalWritePin(DigitalPin.P15, 0)
    }
    music.stopAllSounds()
}
function Inicio () {
    nivel = 0
    temp = nivel
    lista = [
    randint(0, 3),
    randint(0, 3),
    randint(0, 3),
    randint(0, 3),
    randint(0, 3),
    randint(0, 3),
    randint(0, 3),
    randint(0, 3),
    randint(0, 3),
    randint(0, 3)
    ]
}
function Ligar (num: number) {
    if (num == 0) {
        pins.digitalWritePin(DigitalPin.P13, 1)
    }
    if (num == 1) {
        pins.digitalWritePin(DigitalPin.P14, 1)
    }
    if (num == 2) {
        pins.digitalWritePin(DigitalPin.P15, 1)
    }
    if (num == 3) {
        pins.digitalWritePin(DigitalPin.P16, 1)
    }
}
function Desligar (num: number) {
    if (num == 0) {
        pins.digitalWritePin(DigitalPin.P13, 0)
    }
    if (num == 1) {
        pins.digitalWritePin(DigitalPin.P14, 0)
    }
    if (num == 2) {
        pins.digitalWritePin(DigitalPin.P15, 0)
    }
    if (num == 3) {
        pins.digitalWritePin(DigitalPin.P16, 0)
    }
}
let lista: number[] = []
let temp = 0
let nivel = 0
Inicio()
basic.forever(function () {
    basic.showNumber(nivel)
    for (let índice = 0; índice <= nivel; índice++) {
        Ligar(lista[índice])
        music.playTone(262, music.beat(BeatFraction.Whole))
        basic.pause(100)
        Desligar(lista[índice])
        basic.pause(100)
    }
    while (temp <= nivel) {
        if (pins.digitalReadPin(DigitalPin.P2) == 1) {
            if (lista[temp] == 0) {
                Ligar(0)
                while (pins.digitalReadPin(DigitalPin.P2) == 1) {
                    music.playTone(262, music.beat(BeatFraction.Whole))
                }
                basic.pause(100)
                Desligar(0)
                temp += 1
            } else {
                Erro()
            }
        }
        if (pins.digitalReadPin(DigitalPin.P5) == 1) {
            if (lista[temp] == 1) {
                Ligar(1)
                while (pins.digitalReadPin(DigitalPin.P5) == 1) {
                    music.playTone(262, music.beat(BeatFraction.Whole))
                }
                basic.pause(100)
                Desligar(1)
                temp += 1
            } else {
                Erro()
            }
        }
        if (pins.digitalReadPin(DigitalPin.P8) == 1) {
            if (lista[temp] == 2) {
                Ligar(2)
                while (pins.digitalReadPin(DigitalPin.P8) == 1) {
                    music.playTone(262, music.beat(BeatFraction.Whole))
                }
                basic.pause(100)
                Desligar(2)
                temp += 1
            } else {
                Erro()
            }
        }
        if (pins.digitalReadPin(DigitalPin.P11) == 1) {
            if (lista[temp] == 3) {
                Ligar(3)
                while (pins.digitalReadPin(DigitalPin.P11) == 1) {
                    music.playTone(262, music.beat(BeatFraction.Whole))
                }
                basic.pause(100)
                Desligar(3)
                temp += 1
            } else {
                Erro()
            }
        }
    }
    nivel += 1
    temp = 0
    if (nivel > 9) {
        Ganhou()
        Inicio()
    }
    basic.pause(1000)
})
