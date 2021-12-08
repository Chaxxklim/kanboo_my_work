<template>
  <div class="container">
    <div id="startGrid">
      <!-- <grid :data="gridProps.data"
            :columns="gridProps.columns"
            :rowHeaders="gridProps.rowHeaders"
            :columnOptions="gridProps.columnOptions">
      </grid> -->
    </div>
  </div>
</template>

<script>

// import axios from 'axios';
// import 'tui-grid/dist/tui-grid.css'
// import 'tui-date-picker/dist/tui-date-picker.css';
// import 'tui-time-picker/dist/tui-time-picker.css';
// import 'tui-pagination/dist/tui-pagination.css';
// import { Grid } from '@toast-ui/vue-grid';
// import Grid from '@toast-ui/vue-grid/src/Grid.vue';

export default {

  components: {
    // 'grid' : Grid
    
  },
  mounted(){

  },
  created() {

    this.gridProps = {
      data : [
        // row에 들어갈 데이터 
        {
          demandIdx : "1",
          demandName : "고쳐줘"
        },
        {
          demandIdx : "2",
          demandName : "없애줘"
        },
        {
          demandIdx : "3",
          demandName : "만들어줘"
        }
      ],
      columns : [
        {
          header : '요구사항 id',
          name : 'demandIdx'
        },
        {
          header : '요구사항명',
          name : 'demandName'
        }
      ]
    }
  },
  data() {
    return{

    }
  },
  methods : {

  }
}
</script>

<style scoped>
    .container {
    width : 100vw;
    height : 100vh;
    background-color: #16161A;
    }
    .v-grid{
      background-color: white;
    }
    .inner-content-table{
      width : 90vw;
      height : 90vh;
    }

</style>