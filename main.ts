input.onButtonPressed(Button.A, function () {
    Player = randint(1, 4)
    basic.showNumber(Player)
    basic.pause(500)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    if (Player == 1) {
        basic.showNumber(Player + 1)
    } else if (Player == 2) {
        basic.showNumber(Player + 2)
    } else if (Player == 3) {
        basic.showNumber(Player + 3)
    } else if (Player == 1) {
    	
    } else {
    	
    }
})
let Player = 0
Player = 0
