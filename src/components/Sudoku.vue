<template> 
   <div>

   	<div class="main-container">

		<div class="project-title"><h1>Sudoku</h1></div>
		
	   <h4 class="message" :class="{'message-show':animation,
									 'message-hide':!animation}">{{message}}</h4>

		<div class="main-board">
		<div class="main-board-child">
			<div class="row-box-container">
				<div class="box-container" >
					<div class="row-element-container" >
						<button class="element"  >{{sudoku[0][0]}}</button>
						<button class="element" >{{sudoku[0][1]}}</button>
						<button class="element" >{{sudoku[0][2]}}</button>
					</div>
					<div class="row-element-container">
						<button class="element" >{{sudoku[0][3]}}</button>
						<button class="element" >{{sudoku[0][4]}}</button>
						<button class="element" >{{sudoku[0][5]}}</button>
					</div>
					<div class="row-element-container">
						<button class="element" >{{sudoku[0][6]}}</button>
						<button class="element" >{{sudoku[0][7]}}</button>
						<button class="element" >{{sudoku[0][8]}}</button>
					</div>
				</div>
				<div class="box-container">
					<div class="row-element-container">
						<button class="element">{{sudoku[1][0]}}</button>
						<button class="element">{{sudoku[1][1]}}</button>
						<button class="element">{{sudoku[1][2]}}</button>
					</div>
					<div class="row-element-container">
						<button class="element">{{sudoku[1][3]}}</button>
						<button class="element">{{sudoku[1][4]}}</button>
						<button class="element">{{sudoku[1][5]}}</button>
					</div>
					<div class="row-element-container">
						<button class="element">{{sudoku[1][6]}}</button>
						<button class="element">{{sudoku[1][7]}}</button>
						<button class="element">{{sudoku[1][8]}}</button>
					</div>
				</div>
				<div class="box-container">
					<div class="row-element-container">
						<button class="element">{{sudoku[2][0]}}</button>
						<button class="element">{{sudoku[2][1]}}</button>
						<button class="element">{{sudoku[2][2]}}</button>
					</div>
					<div class="row-element-container">
						<button class="element">{{sudoku[2][3]}}</button>
						<button class="element">{{sudoku[2][4]}}</button>
						<button class="element">{{sudoku[2][5]}}</button>
					</div>
					<div class="row-element-container">
						<button class="element">{{sudoku[2][6]}}</button>
						<button class="element">{{sudoku[2][7]}}</button>
						<button class="element">{{sudoku[2][8]}}</button>
					</div>
				</div>
			</div>
	
	
			<div class="row-box-container">
				<div class="box-container">
					<div class="row-element-container">
						<button class="element">{{sudoku[3][0]}}</button>
						<button class="element">{{sudoku[3][1]}}</button>
						<button class="element">{{sudoku[3][2]}}</button>
					</div>
					<div class="row-element-container">
						<button class="element">{{sudoku[3][3]}}</button>
						<button class="element">{{sudoku[3][4]}}</button>
						<button class="element">{{sudoku[3][5]}}</button>
					</div>
					<div class="row-element-container">
						<button class="element">{{sudoku[3][6]}}</button>
						<button class="element">{{sudoku[3][7]}}</button>
						<button class="element">{{sudoku[3][8]}}</button>
					</div>
				</div>
				<div class="box-container">
					<div class="row-element-container">
						<button class="element">{{sudoku[4][0]}}</button>
						<button class="element">{{sudoku[4][1]}}</button>
						<button class="element">{{sudoku[4][2]}}</button>
					</div>
					<div class="row-element-container">
						<button class="element">{{sudoku[4][3]}}</button>
						<button class="element">{{sudoku[4][4]}}</button>
						<button class="element">{{sudoku[4][5]}}</button>
					</div>
					<div class="row-element-container">
						<button class="element">{{sudoku[4][6]}}</button>
						<button class="element">{{sudoku[4][7]}}</button>
						<button class="element">{{sudoku[4][8]}}</button>
					</div>
				</div>
				<div class="box-container">
					<div class="row-element-container">
						<button class="element">{{sudoku[5][0]}}</button>
						<button class="element">{{sudoku[5][1]}}</button>
						<button class="element">{{sudoku[5][2]}}</button>
					</div>
					<div class="row-element-container">
						<button class="element">{{sudoku[5][3]}}</button>
						<button class="element">{{sudoku[5][4]}}</button>
						<button class="element">{{sudoku[5][5]}}</button>
					</div>
					<div class="row-element-container">
						<button class="element">{{sudoku[5][6]}}</button>
						<button class="element">{{sudoku[5][7]}}</button>
						<button class="element">{{sudoku[5][8]}}</button>
					</div>
				</div>
			</div>
		
		
			<div class="row-box-container">
				<div class="box-container">
					<div class="row-element-container">
						<button class="element">{{sudoku[6][0]}}</button>
						<button class="element">{{sudoku[6][1]}}</button>
						<button class="element">{{sudoku[6][2]}}</button>
					</div>
					<div class="row-element-container">
						<button class="element">{{sudoku[6][3]}}</button>
						<button class="element">{{sudoku[6][4]}}</button>
						<button class="element">{{sudoku[6][5]}}</button>
					</div>
					<div class="row-element-container">
						<button class="element">{{sudoku[6][6]}}</button>
						<button class="element">{{sudoku[6][7]}}</button>
						<button class="element">{{sudoku[6][8]}}</button>
					</div>
				</div>
				<div class="box-container">
					<div class="row-element-container">
						<button class="element">{{sudoku[7][0]}}</button>
						<button class="element">{{sudoku[7][1]}}</button>
						<button class="element">{{sudoku[7][2]}}</button>
					</div>
					<div class="row-element-container">
						<button class="element">{{sudoku[7][3]}}</button>
						<button class="element">{{sudoku[7][4]}}</button>
						<button class="element">{{sudoku[7][5]}}</button>
					</div>
					<div class="row-element-container">
						<button class="element">{{sudoku[7][6]}}</button>
						<button class="element">{{sudoku[7][7]}}</button>
						<button class="element">{{sudoku[7][8]}}</button>
					</div>
				</div>
				<div class="box-container">
					<div class="row-element-container">
						<button class="element">{{sudoku[8][0]}}</button>
						<button class="element">{{sudoku[8][1]}}</button>
						<button class="element">{{sudoku[8][2]}}</button>
					</div>
					<div class="row-element-container">
						<button class="element">{{sudoku[8][3]}}</button>
						<button class="element">{{sudoku[8][4]}}</button>
						<button class="element">{{sudoku[8][5]}}</button>
					</div>
					<div class="row-element-container">
						<button class="element">{{sudoku[8][6]}}</button>
						<button class="element">{{sudoku[8][7]}}</button>
						<button class="element">{{sudoku[8][8]}}</button>
					</div>
				</div>
			</div>
		</div>
		</div>
		
		<button class="start-solving solving" @click="solveSudoku"> Start Solving</button>
		
	</div>

   </div>
</template>


<script>

    export default {
        data:
            function() {
                 return {sudoku:   [[3, 0, 6, 5, 0, 8, 4, 0, 0], 
                                    [5, 2, 0, 0, 0, 0, 0, 0, 0], 
                                    [0, 8, 7, 0, 0, 0, 0, 3, 1], 
                                    [0, 0, 3, 0, 1, 0, 0, 8, 0], 
                                    [9, 0, 0, 8, 6, 3, 0, 0, 5], 
                                    [0, 5, 0, 0, 9, 0, 6, 0, 0], 
                                    [1, 3, 0, 0, 0, 0, 2, 5, 0], 
                                    [0, 0, 0, 0, 0, 0, 0, 7, 4], 
									[0, 0, 5, 2, 0, 6, 3, 0, 0]],
						  
					givenValues:6,
					message: 'Sudoku Opeaned',
					animation: true,
						}
            },
        
        methods:{
			nextEmptySpot(board) {
				for (var i = 0; i < 9; i++) {
					for (var j = 0; j < 9; j++) {
					if (board[i][j] === 0) return [i, j];
					}
				}
				return [-1, -1];
				},

			checkColumn(board, column, value){
				for(var i = 0; i < board.length; i++) {
					if(board[i][column] === value) {
						return false;
					}
				}
					return true;
				},


			checkRow(board, row, value) {
				for (var i = 0; i < board[row].length; i++) {
					if (board[row][i] === value) {
						return false;
					}
				}
				return true;
				},


			checkSquare(board, row, column, value){
				let boxRow = Math.floor(row / 3) * 3;
				let boxCol = Math.floor(column / 3) * 3;
				
				for (var r = 0; r < 3; r++){
					for (var c = 0; c < 3; c++){
						if (board[boxRow + r][boxCol + c] === value)
							return false;
					}
				}

				return true;
			},

			checkValue(board, row, column, value) {
				if( this.checkRow(board, row, value ) &&
					this.checkColumn(board, column, value) &&
					this.checkSquare(board, row, column, value)) {
					return true;
				}
				
				return false; 
			},

			solve() {
				let emptySpot = this.nextEmptySpot(this.sudoku);
				let row = emptySpot[0];
				let col = emptySpot[1];

				// there is no more empty spots
				if (row === -1) {
					return this.sudoku;
				}

				for (let num = 1; num <= 9; num++) {
					if (this.checkValue(this.sudoku, row, col, num)) {
						this.sudoku[row][col] = num;


						this.updateSudoku(row,col,num); //Update to View
						this.solve(this.sudoku);
					}
				}

				if (this.nextEmptySpot(this.sudoku)[0] !== -1){
					this.sudoku[row][col] = 0;

					this.updateSudoku(row,col,0); //Update to View
				}

				return this.sudoku;
				},
				solveSudoku(){
					if(this.solve()){
						this.message = "Solved Successfully";
						this.animation = !this.animation;
					}
					else{
						this.message = "No Solution";
						this.animation = !this.animation;
					}
					


				},
				updateSudoku(row, col, value){


					//make a copy of the row
					let newRow = this.sudoku[row].slice(0);
					// update the value
					newRow[col] = value;
					// update it in the sudoku
					this.$set(this.sudoku, row, newRow);

				},

		},

    }

</script>



<style scoped>

	.main-container{
	    display: grid;
	    grid-template-columns: 3fr 1fr 1fr;
	    grid-template-rows: auto;
	    grid-template-areas: "title startsolving message"
	                         "board board board";
	    overflow: hidden;

	}

	.project-title{
	    grid-area: title;
	    text-align: center;
	    margin-bottom: 1rem;
	    text-decoration: underline;
	}

	.slider{
	    grid-area: shufffleRange;
	    text-decoration: underline;
	    font-weight: 900;
	    z-index: 100;
	}

	.main-board{
	    grid-area: board;
	    text-align: center;
	}

	.main-board-child{
	    border: 6px solid green;
	    border-radius: 6px;
	    width: max-content;
	    margin: auto;
	}   
	    .row-box-container{
	        width: fit-content;
	    }

	    .box-container {
	        border: 5px solid green;
	        border-radius: 6px;
	        margin: .8rem 1rem;
	        padding: .2rem;
	        display: inline-block;
	    }
	    .element {
	        border: 2px solid grey;
	        border-radius: 2px;
	        margin: .2rem;
	        padding: .2rem;
	        display: inline-block;
	        font-weight: 900;
	        font-size: 1.6rem;
	    }


	.animate{
	    grid-area: animate;
	    color: white;
	    font-size: 20rem;
	    margin: auto;
	    border: 2px solid blue;
	}
	.animating{
	    animation : disappearToUp 0s 0s forwards,
	                appearFromDown 3s 0s forwards;
	    padding: 0 1rem;

	}
	.mytextDisplay{
		 padding: 0 1rem;
		 background:rgba(46, 177, 242, 1);
	}

	.start-solving{
	    
	    background: #FF69B4;
	    font-size: 20px;
	    font-weight: 500;
	    color: white;
	    border: none;
	    border-radius: 8px;
	    outline: none;
	    padding: 0rem .4rem;
	    margin-bottom: 0;
	    width: max-content;
	    margin-bottom: .3rem;
	}
	.solving{
		grid-area: startsolving;
	}

	.start-solving:hover{
	    background: #e75480;
	}

.shuffle{
	 grid-area: shufffle;
}

.message{
	grid-area: message;
  	float:right;
  	font-family: 'Assistant', sans-serif;
  	font-weight: 700;
  	font-size:1.2rem;
  	border: .5rem solid rgba(255, 189, 51, 1);
  	border-radius: 1.5rem;
  	padding: .3rem .5rem;
  	background : rgba(51, 255, 87,1);
  }

 .message-hide{
  	animation: hideSwapShow 1s forwards;
  }
  .message-show{
  	animation: showFromRight 1s forwards;
  }

  @keyframes hideSwapShow{
  	0%{
  		transform: translateX(0rem);
  	}
  	20%{
  		transform: translateX(20rem);
  	}
  	100%{
  		transform: translateX(0rem);
  	}
  }

  @keyframes showFromRight{
  	0%{
  		transform: translateX(20rem);
  	}
  	100%{
  		transform: translateX(0);
  	}
  }









	
</style>