//grabbing and creating the canvas
const cvs = document.getElementById("tetris");
const ctx = cvs.getContext("2d");
const scoreElement = document.getElementById("score");

//grid size and square size
const row = 20
const col = 10
const square = 20
const emptySquare = "white"

// function to draw a square
  drawSquare = (x,y,color) => {
    ctx.fillStyle = color
    ctx.fillRect(x*square, y*square, square, square)
    ctx.strokeStyle = "BLACK"
    ctx.strokeRect(x*square, y*square, square, square) 
}

// create the board. the board is an array so I use for loop to make the rows and columns
let board = [];
for(r = 0; r < row; r++){
    board[r] = [];
    for(c = 0; c < col; c++){
        board[r][c] = emptySquare;
    }
}

// draw the board.
drawBoard = () => {
    for(r = 0; r < row; r++){
        for(c = 0; c < col; c++){
            drawSquare(c,r,board[r][c]);
        }
    }
}
drawBoard();



//Shapes and their colors
const Z = [
  [
    [1,1,0]
    [0,1,1]
    [0,0,0]
  ]
  
  [ 
    [0,0,1]
    [0,1,1]
    [0,1,0]
  ]
  
  [
    [0,0,0]
    [1,1,0]
    [0,1,1]
  ]

  [
   [0,1,0]
   [1,1,0]
   [1,0,0] 
  ]
]

const shapes = [
  // [I, "orange"],
  // [O, "purple"],
  // [J, "blue"],
  // [L, "green"],
  // [S, "brown"],
  // [T, "red"],
  [Z, "aqua"]
]

//initate a piece

// let shapes = new Shape(tetroShape[0][0], tetroShape[1])


//The objects for the shapes
shape = (tetromino, color) => {
  this.tetromino = tetromino
  this.color = color

  this.tetrominoN = 0 
  this.activeTetromino = this.tetromino[this.tetrominoN]

  //to control/move the shapes
  this.x = 3
  this.y = -2
}

//to generate random shapes
// randomPiece = () => {
//   let r = randomN = Math.floor(Math.random() * shapes.length) 
//   return new Piece( PIECES[r][0],PIECES[r][1]);
// }

//fill function
// Shape.prototype.fill = () => {
//   for(r = 0; r < this.activeTetromino.length; r++){
//     for(c = 0; c < this.activeTetromino.length; c++){
//       //to draw only occupied squares  
//       if(this.activeTetromino[r][c]){
//         drawSquare(this.x + c, this.y + r, color)
//         }
//       }
//   }
// }

// to draw and undraw 
shape.prototype.draw = () => {
  this.fill(this.color)
}

shape.prototype.undraw = () => {
  this.fill(emptySquare)
}



//to draw a shape on the board
shape.prototype.draw = () => {
  for(r = 0; r < this.activeTetromino.length; r++){
    for(c = 0; c < this.activeTetromino.length; c++){
      //to draw only occupied squares  
      if(this.activeTetromino[r][c]){
        drawSquare(this.x + c, this.y + r, this.color)
        }
      }
  }
}

//undraw a shape. this is the same function as the draw, instead of this.color I used the emptySquare 
shape.prototype.draw = () => {
  for(r = 0; r < this.activeTetromino.length; r++){
    for(c = 0; c < this.activeTetromino.length; c++){
      //to draw only occupied squares  
      if(this.activeTetromino[r][c]){
        drawSquare(this.x + c, this.y + r, emptySquare)
        }
      }
  }
}




//move down shape
shape.prototype.moveDown = () => {
  this.undraw()//update made with undraw()
  this.y++
  this.draw()
}

//move right
shape.prototype.moveRight = () => {
  this.undraw()//update made with undraw()
  this.x++
  this.draw()
}
//move left
shape.prototype.moveDown = () => {
  this.undraw()//update made with undraw()
  this.x--
  this.draw()
}

//rotate
shape.prototype.rotate = () => {
  this.undraw()//update made with undraw()
  this.tetrominoN = (this.tetrominoN + 1)%this.tetromino.length
  this.activeTetromino = 
  this.draw()
}

//to control the shapes
document.addEventListener("keydown", control)
control = (event) => {
  if(event.keyCode === 37){
    shp.moveLeft()
  } else if(event.keyCode === 38) {
    shp.rotate()
  } else if(event.keyCode === 39) {
    shp.moveRight()
  } else if (event.keyCode === 40) {
    shp.moveDown
  }
}


//undraw a shape. this is the same function as the draw, we just use diff color
shape.prototype.draw = () => {
  for(r = 0; r < this.activeTetromino.length; r++){
    for(c = 0; c < this.activeTetromino.length; c++){
      //to draw only occupied squares  
      if(this.activeTetromino[r][c]){
        drawSquare(this.x + c, this.y + r, emptySquare)
        }
      }
  }
}

