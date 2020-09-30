<template> 
   <div>

   		<div class="methods for-inline">
			<button class="method" @click="mainMethod(1)">Sort</button>
			<button class="method" @click="mainMethod(2)">Search</button>
			<button class="method" @click="mainMethod(3)">Sudoku</button>
		</div>


		<div class="sort-algorithms for-inline" v-if="isSort==1" >
			<button class="sort-algorithm"
			        @click="sortCallback(1)" >Bubble</button>
			<button class="sort-algorithm"
				    @click="sortCallback(2)" >Selection</button>
			<button class="sort-algorithm"
					@click="sortCallback(3)" >Quick</button>
			<button class="sort-algorithm"
					@click="sortCallback(4)" >Heap</button>
			<button class="sort-algorithm"
					@click="sortCallback(5)" >Insertion</button>
		</div>

		<div class="search-algorithms for-inline"v-if="isSort==2">
			<button class="search-algorithm" @click="callbacks.linear">Linear</button>
			<button class="search-algorithm" @click="callbacks.binary">Binary</button>
		</div>

   </div>
</template>  




<script>
	
	import {sortEventBus, moveLineBus, searchCallBus} from '../main';

	export default{
		data: function(){
			return { isSort: true,
					 sortCallback: function(event){console.log("Modify Range");},
					 callbacks: {linear(){console.log("linear");}, binary(){console.log("binary");}}
					 				
											
		}
	},

		methods:{
			mainMethod(data){

				this.isSort = data;
				sortEventBus.$emit('mainMethodStatus', this.isSort);


			}
		},

		created(){

			moveLineBus.$on('moveLineCall', (sortAllLines) =>{
				this.sortCallback = sortAllLines;

				// console.log('Callback:',this.sortCallback);
			});

			searchCallBus.$on('searchFunctions', (searchingFunc) =>{
				this.callbacks = searchingFunc;
			});
		},

	}

</script>




<style scoped>

.methods{
	text-align: center;
}

.method{
	font-size: 1.5rem;
	color: white;
	padding: 3px 10px;
	border: none;
	border-radius: 6px;
	background:#6b914a;
	font-weight: 900;
	outline: none;

}

.method:hover{
	cursor: pointer;
	background: #89f52c;
}

.method:active{
	background: #1cbd9d;
	border: none;
}

.sort-algorithms, .search-algorithms{
	text-align: center;
	margin: .5rem 0;
	margin-left:10rem;
}

.sort-algorithm, .search-algorithm{
	background: #09d5d9;
	color: white;
	font-weight: 500;
	font-size: 1rem;
	border-radius: 6px;
	padding: 5px 8px;
	border: none;
	outline: none;
}

.sort-algorithm:hover,
.sort-algorithm:active,
.search-algorithm:hover,
.search-algorithm:active{

	background: #579091;
	cursor: pointer;
}
  
.for-inline{
	display:inline-block;

}

</style>