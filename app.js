var rover = {
    direction : 'N',
    x : 0,
    y : 0,
    logs : [{x:0,y:0}]
};



function startTravel(commands, rover) {
    for (var i = 0; i < commands.length; i++) {
        var command = commands[i];
        switch (command) {
            case 'r' :
                turnRight(rover);
                break;
            case 'l' :
                turnLeft(rover);
                break;
            case 'f' :
                goForward(rover);
                break;
            case 'b' :
                goBackward(rover);
                break;
        }
    }
    
}

function goForward(rover) {
   
    switch (rover.direction) {
        case 'N' :
            if (rover.y < 9) {
                rover.y += 1;
            }
            break;
        case 'S' :
            if (rover.y > 0) {
                rover.y -= 1;
            }
            break;
        case 'W' :
            if (rover.x > 0) {
                rover.x -= 1;
            }
            break;
        case 'E' :
            if (rover.x < 9) {
                rover.x += 1;
            }
            break;
    }
    
}

function goBackward(rover) {
   
    switch (rover.direction) {
        case 'N' :
            if (rover.y > 0) {
                rover.y -= 1;
            }
            else {
                alert('Cant move backward');
            }
            break;
        case 'S' :
            if (rover.y < 9) {
                rover.y += 1;
            }
            else {
                alert('Cant move backward');
            }
            break;
        case 'W' :
            if (rover.x < 9) {
                rover.x += 1;
            }
            else {
                alert('Cant move backward');
            }
            break;
        case 'E' :
            if (rover.x > 0) {
                rover.x -= 1;
            }
            break;
    }
    
}

function turnLeft(rover) {
    switch (rover.direction) {
        case 'N' :
            rover.direction = 'W';
            break;
        case 'S' :
            rover.direction = 'E';
            break;
        case 'W' :
            rover.direction = 'S';
            break;
        case 'E' :
            rover.direction = 'N';
            break;
    }
    
}
    
function turnRight(rover) {
    switch (rover.direction) {
        case 'N' :
            rover.direction = 'E';
            break;
        case 'S' :
            rover.direction = 'W';
            break;
        case 'W' :
            rover.direction = 'N';
            break;
        case 'E' :
            rover.direction = 'S';
            break;
    }
   
} 


