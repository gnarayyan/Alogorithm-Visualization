<template>
   <div>


   		<div class="start-task" v-if='views==1'>
			<button class="start-task-button reset-button"
					  @click="resetVariables" >Reset</button>
				
			<span class="slider" >
				<p>Array Size: {{lineDensity}}</p>
				<input type="range"  min="1" max="480"
					   v-model="lineDensity">
			</span>
		</div>
   </div>
</template>





<script>

	import {sortEventBus, lineDensityBus,execSpeedBus} from '../main';

	export default{

		data: function(){
			return { views:1, lineDensity:4} 
		},

		methods: {
			resetVariables(){
				this.lineDensity = 0;
			}
			
		},

		

		watch:{
			lineDensity(newVal,oldVal){
				this.lineDensity = newVal;
				lineDensityBus.$emit('lineDensityStatus', this.lineDensity);
			}

		},

		created(){
			sortEventBus.$on('mainMethodStatus', (data) =>{
				this.views = data;
			});
		},
		
	}

</script>





<style scoped>

.start-task{
	margin:1rem 0;
	font-weight: 500;
}

.start-task-button{
	background: #337ab7;
	color: white;
	padding: .4rem .6rem;
	outline: none;
	border: none;
	border-radius: .5rem;
	font-size: 1rem;
}

.start-task-button:hover,
.start-task-button:active{
	color: white;
	background: #0e0ecf;
	cursor: pointer;
}

.search-value{
	border-radius: 6px;
    -webkit-appearance: none;
    font-size: 1.2rem;
    padding: 0 .3rem;
    width: 8rem;
    font-weight: 900;
}

.slider{
	float: right;
	margin-right: 5%
}

.slider p{
	text-decoration: underline;
	font-weight: 900;
}

input[type="range"] {
  width:15rem;
}

  
</style>