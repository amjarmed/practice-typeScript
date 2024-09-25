"use strict";
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
const move = (direction) => {
    switch (direction) {
        case Direction.Up:
            console.log('Moving up');
            break;
        case Direction.Down:
            console.log('Moving down');
            break;
        case Direction.Left:
            console.log('Moving left');
            break;
        case Direction.Right:
            console.log('Moving right');
            break;
    }
};
move(Direction.Up); // Output: Moving up
