<template>
   <div>

   		<div class="lines">
			<div class="line" v-for="N in mylineDensity*1" 
				 :style="myLines[N-1]" >
			</div>

		</div>

   </div>
</template>




<script>
	import {lineDensityBus,moveLineBus,execSpeedBus, sortEventBus} from '../main';
	import {bubbleSort, selectionSort,
			quickSort, heapSort, insertionSort} from './algorithms/sorting.js';

	export default{

		data: function(){
			return { mylineDensity:4,
					 mySpeed: 0,
					 mySort:true,
					 // isSwapping:false,
					 myLines: [{height:'90%'},{height:'30%'},{height:'80%'},{height:'60%'}]
					};
		},

		methods:{
			linesProperties(size, marginLR, width){
				let myLines = [];
				for(let i=0; i<size; i++){
					let height = Math.floor((Math.random()*100));
					height = (height>98) ? 98 : (height<3) ? 3 : height;
					height += '%';
					let myproperty = {width:width, marginRight:marginLR,marginLeft:marginLR, height:height};
					myLines.push(myproperty);
				}
				return myLines;
			},
			swapLines(index1, index2){

				

				let h1 = this.myLines[index1].height;
				let h2 = this.myLines[index2].height;

				let tempHeight = h1;

				this.myLines[index1].height = h2;
				this.myLines[index2].height = tempHeight;

			},
			swapLine(index1, index2){
				setTimeout(() =>{
                				this.swapLines(index1, index2);
                			}, this.mySpeed);
			},

			getInDigit(someString){
				return someString.split("%")[0]*1
			},

			generateArray(){
				let myArr = [];

				for(let obj of this.myLines){
					myArr.push(this.getInDigit(obj.height));
				}

				return myArr;
			},


			sortAllLines(index){
				let inputArr = this.generateArray();

				if (index==1){
					bubbleSort(inputArr, this.swapLine);
				}

				else if (index==2){
					selectionSort(inputArr, this.swapLine);
				}

				else if (index==3){
					quickSort(inputArr, this.swapLine);
				}

				
				else if (index==4){
					heapSort(inputArr, this.swapLine);
				}
				
				else if (index==5){
					insertionSort(inputArr, this.swapLine);
				}

	
			}

		},

		created(){

			lineDensityBus.$on('lineDensityStatus', (lineDensity) =>{
				
				this.mylineDensity = lineDensity;
				let myWidth = 100/lineDensity;

				let margin =(myWidth>=20)?1.5:(myWidth>=15)?1:(myWidth>=10)?.5:.1;

				let width = (myWidth - 2*margin) + '%';
				margin += '%';

				this.myLines = []; //Empty it
				this.myLines = this.linesProperties(this.mylineDensity,margin,width); //Populate random lines

				moveLineBus.$emit('moveLineCall', this.sortAllLines);
			});

			execSpeedBus.$on('currentSpeed', (speed) =>{
				this.mySpeed = speed;
			});


	}
}

</script>





<style scoped>

.sort-on-click{
	cursor: not-allowed;
	background:#D3D3D3;
}

.lines{
	height: 35rem;
}

.line{
	background: green;
	height: 98%;
	width: 3%;
	display: inline-block;
	margin: 0 .1%;
}

.onSwapLines{
	transform: scale(1.8,1.3);
    background: blueviolet;
}

.move-line-front{
	transform: translateX(15rem);
	/*animation: move-right 5s ease-out 1s;*/
}

.move-line-back{
	transform: translateX(-15rem);
	/*animation: move-left 5s ease-out 1s;*/
}

@keyframes move-right{
	from{
		transform: translateX(0);
	}

	to{
		transform: translateX(15rem);
	}
}


@keyframes move-left{
	from{
		transform: translateX(0);
	}

	to{
		transform: translateX(-5rem);
	}
}

  
</style>