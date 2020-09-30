<template>
	<div class="main-element">
		
		<span class="input">
			<input type="number" placeholder="Search Value " class="search-value" v-model="searchValue">

		</span>
			

		<span class="slider">
			<p>Array Range: {{dataLength}}</p>
			<input type="range"  min="1" max="92"
				   v-model="dataLength">
		</span>
		<h4 class="current-task" :class="{'current-task-show':currentTask.isActive,
										  'current-task-hide':!currentTask.isActive}">
										{{currentTask.task}}
						<strong v-if="summary.isCompleted">. Index: {{summary.index}}</strong></h4>

<hr>
		<div class="search-area">
		<div v-if="!mySort"  class="data-items-rows" v-for="i in dataArray.length">

			<div class="data-items-columns" v-for="j in dataArray[i-1].length">
				<div class="data-item">

					<div :class="{'iteration-count-show':itrStyle[i-1][j-1].show, 									  	  'iteration-count-hide':itrStyle[i-1][j-1].hide}">{{showItrValue(i,j)}}</div>

					<div class="data"> {{ showData(i,j) }}</div>

					<div class="checking-status">
						<div :class="{'check-icon-show':checkStyle[i-1][j-1].show, 										  'check-icon-remove':checkStyle[i-1][j-1].remove}">
							<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="		http://www.w3.org/1999/xlink" x="	0px" y="0px"
									 viewBox="0 0 367.805 367.805" style="enable-background:new 0 0 367.805 367.805;" xml:space="preserve">
								<g>
									<path style="fill:#3BB54A;" d="M183.903,0.001c101.566,0,183.902,82.336,183.902,183.902s-82.336,183.902-183.902,183.902
										S0.001,285.469,0.001,183.903l0,0C-0.288,82.625,81.579,0.29,182.856,0.001C183.205,0,183.554,0,183.903,0.001z"/>
									<polygon style="fill:#D4E1F4;" points="285.78,133.225 155.168,263.837 82.025,191.217 111.805,161.96 155.168,204.801 
										256.001,103.968 	"/>
								</g>
								<g>
								</g>
								<g>
								</g>
								<g>
								</g>
								<g>
								</g>
								<g>
								</g>
								<g>
								</g>
								<g>
								</g>
								<g>
								</g>
								<g>
								</g>
								<g>
								</g>
								<g>
								</g>
								<g>
								</g>
								<g>
								</g>
								<g>
								</g>
								<g>
								</g>
							</svg></div>
						<div :class="{'uncheck-icon-show':uncheckStyle[i-1][j-1].show, 									  'uncheck-icon-hide':uncheckStyle[i-1][j-1].hide,
									  'uncheck-icon-remove':uncheckStyle[i-1][j-1].remove}"><svg height="100%" viewBox="0 0 512 512" width="100%" xmlns="				http://www.w3.org/2000/svg">
										<path d="m256 0c-141.164062 0-256 114.835938-256 256s114.835938 256 256 256 256-114.835938 	256-256-114.835938-256-256-256zm0 0" fill="#f44336"/>
										<path d="m350.273438 320.105469c8.339843 8.34375 8.339843 21.824219 0 30.167969-4.160157 4.160156-9.621094 6.25-15.085938 6.25-5.460938 0-10.921875-2.089844-15.082031-6.25l-64.105469-64.109376-64.105469 64.109376c-4.160156 4.160156-9.621093 6.25-15.082031 6.25-5.464844 0-10.925781-2.089844-15.085938-6.25-8.339843-8.34375-8.339843-21.824219 0-30.167969l64.109376-64.105469-64.109376-64.105469c-8.339843-8.34375-8.339843-21.824219 0-30.167969 8.34375-8.339843 21.824219-8.339843 30.167969 0l64.105469 64.109376 64.105469-64.109376c8.34375-8.339843 21.824219-8.339843 30.167969 0 8.339843 8.34375 8.339843 21.824219 0 30.167969l-64.109376 64.105469zm0 0" fill="#fafafa"/></svg>
						</div>
					</div>
				</div>
			</div>
		
		</div>
	</div>

	</div>
</template>



<script>
	import {quickSort} from './algorithms/sortForSearch';
	import {searchCallBus} from '../main';

	export default{

		data: function(){
			return { 
					 mySort:false,
					 dataLength:26 ,
					 searchValue: null,
					 minimumValue:0,
					 maximumValue:99,
					 dataArray:new Array(2).fill([]).map(x => Array(23).fill(0).map(x => x + Math.floor(Math.random() * 100) )),
					 itrCount: new Array(2).fill(new Array(23).fill(-1)),
					 itrStyle:  new Array(2).fill(new Array(23).fill({show:false, hide:true})),
					 arrowStyle: new Array(2).fill(new Array(23).fill({show:false, hide:true})),
					 checkStyle:new Array(2).fill(new Array(23).fill({show:false, remove:true})),
					 uncheckStyle:new Array(2).fill(new Array(23).fill({show:false, hide:true, remove:false})),
					 summary:{ isCompleted:false, time:0, steps:0, index:null},
					 currentTask: {isActive:true, task:"Opeaned Search Visualizer"},

					}
		},

		methods: {
			showData(i,j){
				let num = this.dataArray[i-1][j-1];
				return (num < 10) ? '0'+num : num;
			},
			showItrValue(i,j){
				let num = this.itrCount[i-1][j-1];
				return (num > 0) ? num : -1;
			},

			animateWithText(text,condition=false){
				this.currentTask.isActive=null;
				this.currentTask.isActive=condition;
				this.currentTask.task = text;
			},

			emitSearchCallback(){
				searchCallBus.$emit('searchFunctions', {linear:this.linearSearch, binary:this.binarySearch});
			},

			populateFromOneDim(arr){
				let len = arr.length;
				let newArr = [];  
				let rows = Math.floor(len/23)+1;
				let lastRowElements = len%23;

				if(rows>0){
					for(let i=0; i<rows; i++){

						let tempArr = arr.slice(0,23);
						newArr.push(tempArr);
						arr = arr.slice(23,len);
					}
				}
				else{
					newArr.push(arr);
				}
				this.dataArray = newArr;
			},

			linearSearch(){
				let arr = this.dataArray;
				let elem = this.searchValue*1;

				arr = [].concat.apply([], arr);
				let steps= 0;
				this.animateWithText('Search Started');
				let t1 = performance.now();
				
				for(let i=0; i<arr.length; i++){

					let row = Math.floor(i/23);
					let column = i%23;
					steps++;

					//set iteration count
					let newRow = this.itrCount[row].slice(0); //make a copy of the row
					newRow[column] = steps; // update the value
					this.$set(this.itrCount, row, newRow); // update it in the sudoku
					
					//show iteration style
					newRow = this.itrStyle[row].slice(0);
					newRow[column] = {show:true, hide:false};
					this.$set(this.itrStyle, row, newRow);


					if(arr[i]==elem){
						this.animateWithText('Search Completed');

						let t2 = performance.now();

						//Remove unCheck
						let newRow = this.uncheckStyle[row].slice(0); //make a copy of the row
						newRow[column] = {show:false, hide:false, remove:true}; // update the value
						this.$set(this.uncheckStyle, row, newRow); // update it 
						//Show check
						newRow = this.checkStyle[row].slice(0);
						newRow[column] = {show:true, remove:false};
						this.$set(this.checkStyle, row, newRow);
						let time = Math.round((t2-t1 + Number.EPSILON) * 100) / 100
						this.summary = {isCompleted:true, time:time, steps:steps, index:steps-1};
						return true;
					}
					else{
						//show uncheck
						let newRow = this.uncheckStyle[row].slice(0); //make a copy of the row
						newRow[column] = {show:true, hide:false, remove:false}; // update the value
						this.$set(this.uncheckStyle, row, newRow); // update it 

					}

					
				}
				this.animateWithText('Data Not Found');
				this.summary.isCompleted = false;
				return false;
			},

			binarySearch(){
				let arr = this.dataArray;
				let elem = this.searchValue*1;

				arr = [].concat.apply([], arr); //2D to 1D
				this.animateWithText('Sorting Array');
				arr = quickSort(arr); //Sorting 1D
				this.animateWithText('Displaying Sorted Array');
				this.populateFromOneDim(arr); //update screen by sorted array data
				this.animateWithText('Search Started');
				let t1 = performance.now();
				let steps= 0;

				let start = 0;
  				let end = arr.length-1;

				while(start <= end){
    
     				let mid = Math.floor((start+end)/2);
     				let row = Math.floor(mid/23);
					let column = mid%23;
					steps++;


					//set iteration count
					let newRow = this.itrCount[row].slice(0); //make a copy of the row
					newRow[column] = steps; // update the value
					this.$set(this.itrCount, row, newRow); // update it 
					
					//show iteration style
					newRow = this.itrStyle[row].slice(0);
					newRow[column] = {show:true, hide:false};
					this.$set(this.itrStyle, row, newRow);
					// console.log("matched item:", arr[mid]);
					if(elem === arr[mid]){
						let t2 = performance.now();
						this.animateWithText('Search Completed');
						//Remove unCheck
						let newRow = this.uncheckStyle[row].slice(0); //make a copy of the row
						newRow[column] = {show:false, hide:false, remove:true}; // update the value
						this.$set(this.uncheckStyle, row, newRow); // update it 
						//Show check
						newRow = this.checkStyle[row].slice(0);
						newRow[column] = {show:true, remove:false};
						this.$set(this.checkStyle, row, newRow);
						let time = Math.round((t2-t1 + Number.EPSILON) * 100) / 100
						this.summary = {isCompleted:true, time:time, steps:steps,index:mid};
						return true;
					}
					else if(elem<arr[mid]){
						console.log("Great",arr[mid]);
						//show uncheck
						let newRow = this.uncheckStyle[row].slice(0); //make a copy of the row
						newRow[column] = {show:true, hide:false, remove:false}; // update the value
						this.$set(this.uncheckStyle, row, newRow); // update it in the sudoku
						end = mid-1;
					}
					else if(elem>arr[mid]){
						
						console.log("Less",arr[mid]);
						//show uncheck
						let newRow = this.uncheckStyle[row].slice(0); //make a copy of the row
						newRow[column] = {show:true, hide:false, remove:false}; // update the value
						this.$set(this.uncheckStyle, row, newRow); // update it in the sudoku
						start = mid+1;
					}	
				}
				this.animateWithText('Data Not Found');
				this.summary.isCompleted = false;
				return false;
			}
		},

		watch:{
			dataLength(newLength){
				this.animateWithText("Changing Array Size");
				// this.currentTask.isActive=true;
				this.summary.isCompleted = false;
				this.summary.notFound = false;
				newLength *= 1;
				let rows = Math.floor(newLength/23);
				let lastRowElements = newLength%23;

				if (rows>0){
					//Modifying data
					this.dataArray = new Array(rows).fill([]).map(x => Array(23).fill(0).map(x => x + Math.floor(Math.random() * 100) ));
					//Modifying Style
					this.arrowStyle = new Array(rows).fill(new Array(23).fill({show:false, hide:true}));
					this.checkStyle = new Array(rows).fill(new Array(23).fill({show:false, remove:true}));
					this.uncheckStyle = new Array(rows).fill(new Array(23).fill({show:false, hide:true, remove:false}));
					this.itrCount = new Array(rows).fill(new Array(23).fill(-1));
					this.itrStyle =  new Array(rows).fill(new Array(23).fill({show:false, hide:true}));
				}
				else{
					this.dataArray = [];
				}
				if(lastRowElements>0){
					//Modifying data
					this.dataArray.push(Array(lastRowElements).fill(0).map(x => x + Math.floor(Math.random() * 100) ));
					//Modifying Style
					this.arrowStyle.push(new Array(lastRowElements).fill({show:false, hide:true}));
					this.checkStyle.push(new Array(lastRowElements).fill({show:false, remove:true}));
					this.uncheckStyle.push(new Array(lastRowElements).fill({show:false, hide:true, remove:false}));
					this.itrCount.push(new Array(lastRowElements).fill(-1));
					this.itrStyle.push(new Array(lastRowElements).fill({show:false, hide:true}));
				}
				this.emitSearchCallback(); //Send searching functions via event bus
				

				
			},

			searchValue(newVal){
				//On new value entered for search
				this.animateWithText("Entering Search Value",true);
				let resetData = {itrCount:[], itrStyle:[], checkStyle:[], uncheckStyle:[] };

				for(let i=0; i<this.itrCount.length; i++){
					let len = this.itrCount[i].length;
					resetData.itrCount.push( new Array(len).fill(-1) );
					resetData.itrStyle.push( new Array(len).fill({show:false, hide:true}) );
					resetData.checkStyle.push( new Array(len).fill({show:false, remove:true}) );
					resetData.uncheckStyle.push( new Array(len).fill({show:false, hide:true, remove:false}) );
				}

				this.itrCount = resetData.itrCount;
				this.itrStyle = resetData.itrStyle;
				this.checkStyle = resetData.checkStyle;
				this.uncheckStyle = resetData.uncheckStyle;
				
				this.summary = { isCompleted:false, time:0, steps:0, notFound:false};

				this.emitSearchCallback(); //Send searching functions via event bus
			}

		},

		created(){
			this.emitSearchCallback(); //Send searching functions via event bus
		}

	}
	
</script>



<style scoped>

	.main-element{
		overflow:hidden;
	}

	.search-area{

		padding: .8rem;

	}

	.data-items-rows{
		width: max-content;
		/*margin-bottom: .3rem; */
	}

	.data-items-columns{
		display: inline-block;
		margin-bottom: .5rem
	}

	.data-item{
		display: grid;
		/*grid-template-columns: 1fr 1.1fr;
		grid-template-rows: auto;
		grid-template-areas: "data arrow-icon" "checking-status .";*/
		grid-template-columns: 1fr;
		grid-template-rows: auto;
		grid-template-areas: "iteration"
							 "data"
							 "checking-status";
		justify-items: center;
	}

	.iteration-count-show{
	    border: 3px solid blue;
	    border-radius: 50%;
	    font-size: .8rem;
	    width: 1.8rem;
	    height: 1.8rem;
	    text-align: center;
	    padding-top: .3rem;
	}
	.iteration-count-hide{
	    border: 3px solid blue;
	    border-radius: 50%;
	    font-size: .8rem;
	    width: 1.8rem;
	    height: 1.8rem;
	    text-align: center;
	    padding-top: .3rem;
	    visibility: hidden;
	}

	.data{
        border: 5px solid green;
        /* display: inline-block; */
        padding: .5rem;
        font-weight: 900;
        grid-area: data;
        margin: .3rem;
        }



    .line{
        width: 5rem;
        /*  display: inline-block; */
        background:green;
        height: .4rem;
    }

    

    .checking-status{
    	text-align: center;
    	margin-top: .1rem;
    	grid-area: checking-status;
    }

    .check-icon-show{
        width: 2rem;
        margin: 0 auto;
    }
    .check-icon-remove{
        display: none;
    }

    .uncheck-icon-show{
        width: 2rem;
        margin: 0 auto;
    }
    .uncheck-icon-hide{
        width: 2rem;
        margin: 0 auto;
        visibility: hidden;
    }
    .uncheck-icon-remove{
        display: none;
    }


    .slider, .input,.current-task, .task-icon{
    	display: inline-block;
    	vertical-align: middle;
    }

    .slider{
    	margin-left:6rem;
    }

   .summary{
   		text-align: center;
   		margin-top: 1.5rem;
   		border: 1px solid grey;
   		font-size: 1rem ;
   		font-family: 'Baloo Tammudu 2', cursive;
   		font-weight:600;

   }
  .current-task{
  	float:right;
  	font-family: 'Assistant', sans-serif;
  	font-weight: 700;
  	font-size:1.2rem;
  	border: .5rem solid rgba(255, 189, 51, 1);
  	border-radius: 1.5rem;
  	padding: .3rem .5rem;
  	background : rgba(51, 255, 87,1);
  }

  .current-task > strong{
  	color: red;
  }

  .current-task-hide{
  	animation: hideSwapShow 1s forwards;
  }
  .current-task-show{
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

.search-value{
	border-radius: 6px;
    -webkit-appearance: none;
    font-size: 1rem;
    padding: 0 .3rem;
    width: 8rem;
    font-weight: 900;
}

  .start-task-button{
	background: #337ab7;
	color: white;
	padding: .1rem .6rem;
	outline: none;
	border: none;
	border-radius: .5rem;
	font-size: 1.2rem;
	}

.start-task-button:hover,
.start-task-button:active{
	color: white;
	background: #0e0ecf;
	cursor: pointer;
}
	
</style>
