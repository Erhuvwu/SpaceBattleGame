class USSSchwarzenegger {
    constructor() {
        this.hull = 20,
            this.firepower = 5,
            this.accuracy = 0.7
    }
    attack = (alienShip) => {
        alienShip.hull -= this.firepower;
    }
}


class AlienShips {
    constructor(ships) {
        this.ships = ships
    }
}   

const ships = [
    { hull: Math.floor(Math.random() * 4) + 3, firepower: Math.floor(Math.random() * 3) + 2, accuracy: Math.floor(Math.random() * 0.3) + 0.6 },
    { hull: Math.floor(Math.random() * 4) + 3, firepower: Math.floor(Math.random() * 3) + 2, accuracy: Math.floor(Math.random() * 0.3) + 0.6 },
    { hull: Math.floor(Math.random() * 4) + 3, firepower: Math.floor(Math.random() * 3) + 2, accuracy: Math.floor(Math.random() * 0.3) + 0.6 },
    { hull: Math.floor(Math.random() * 4) + 3, firepower: Math.floor(Math.random() * 3) + 2, accuracy: Math.floor(Math.random() * 0.3) + 0.6 },
    { hull: Math.floor(Math.random() * 4) + 3, firepower: Math.floor(Math.random() * 3) + 2, accuracy: Math.floor(Math.random() * 0.3) + 0.6 },
    { hull: Math.floor(Math.random() * 4) + 3, firepower: Math.floor(Math.random() * 3) + 2, accuracy: Math.floor(Math.random() * 0.3) + 0.6 }
]
const alien = new AlienShips(ships)
const USSSchwarzenegger1 = new USSSchwarzenegger
//console.log(alien.ships.length)

const playGame = () => {
    alert(`Start playing a game of battling alien spaceships`)
    alert(`Your mission is to destroy every last alien ship with your lasers`)
    alert(`Your strength is that you have the initiative and get to attack first`)
    
   
       
    while(alien.ships.length !==0){
        if(USSSchwarzenegger1.hull > 0){
            if(Math.random() <= USSSchwarzenegger1.accuracy){
                USSSchwarzenegger1.attack(alien.ships[0])
                alert(`Number of alien ships to destroy: ${alien.ships.length}; Your health: ${USSSchwarzenegger1.hull}`)
                alert(`*******attacking alien ship*********`) 
                
            }else{
                alert(`Your attack on alien ship missed`)
                alert(`Refresh the browser to start playing again`)
                break
            }
            
        }else {
            alert(`Your ship went kabloo-ey!Game Over!!!`)
            alert(`Refresh the browser to play again`)
            break;
        }

    if (alien.ships[0].hull > 0) {     //check if the first alien ship is alive
        alien.ships[0].attack(USSSchwarzenegger1)    
    } else {
        alien.ships.shift() // the current ship is removed now
        if(alien.ships.length == 0) {
            alert(`Alien ship has been killed`)
            alert(`Refresh the browser to play again`)
            break;
        }
    //   check if the player wants to continue to play or retreat since it has been killed
        const response = prompt(`Would you like to attack or retreat?`)
        if(response === "attack") {
            continue // the loop will start again
        } else {
            alert(`You have retreated`)
            alert(` Refresh the browser to play again`)
            // This will end the while loop
            break;
              }
        }
    }
}
playGame();
