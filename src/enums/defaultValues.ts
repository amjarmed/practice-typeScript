enum Direction {
  Up,    // 0
  Down,  // 1
  Left,  // 2
  Right, // 3
}

const move = (direction: Direction) => {
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
}

move(Direction.Up); // Output: Moving up
