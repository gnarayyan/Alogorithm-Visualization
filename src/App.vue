<template>
   <div>
 
   		<app-header class="header"> </app-header>
   		<app-control-bar> </app-control-bar>
   		<app-sort v-if="views==1"> </app-sort>
      <app-search v-if="views==2"> </app-search>
      <app-sudoku v-if="views==3"></app-sudoku>

   </div>
</template>


<script>

	import Header from './components/Header.vue';
	import ControlBar from './components/ControlBar.vue';
	import Sort from './components/Sort.vue';
  import Search from './components/Search.vue';
  import Sudoku from './components/Sudoku.vue';

  import {sortEventBus, sudokuBus} from './main';

    export default {

    	data: function(){
    		      return {count:0,views:true }
    	     },

      components: {
          appHeader     : Header,
          appControlBar : ControlBar,
          appSort    : Sort,
          appSearch : Search,
          appSudoku : Sudoku
      },
      created(){
        sortEventBus.$on('mainMethodStatus', (data) =>{
          this.views = data; });

      }
    }

</script>


<style>
.header{
  border: 4px solid white;
  border-radius: 1rem;
  padding: .5rem ;
  background: #e5ecf0c4;
}
  
</style>
