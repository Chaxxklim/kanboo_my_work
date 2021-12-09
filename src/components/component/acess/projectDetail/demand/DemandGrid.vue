<template>

    <div class="grid-div">
      <v-grid theme="compact" :source="rows" :columns="columns" />
    </div>
    

</template>

<script>
import VGrid from "@revolist/vue3-datagrid";


export default {
  
  components: {
    VGrid
    
  },
  methods: {
    gridTest(){
      const grid = document.querySelector('revo-grid');
      grid.autoSizeColumn = true;
      grid.source = this.rows;
      grid.columns = this.columns;
    },
    

    testFunction(){
      
      
    }

  },
  mounted(){
    
  },
  created() {

 
  },
  data() {
    return{
      
      columns : [
        {
          name : "No",
          prop : "no",
          size : 50
        },
        {
          name : "카테고리",
          prop : "category",
          size : 130
        },
        {
          name : "요구사항 ID",
          prop : "demandId",
          size : 150
        },
        {
          name : "요구사항 명",
          prop : "demandName",
          size : 200
        },
        {
          name : "요구사항 상세 설명",
          prop : "demandDetail",
          size : 500
        },
        {
          name : "요청자(요청부서)",
          prop : "requester",
          size : 300
        },
        {
          name : "비고",
          prop : "remark"
        }
        
      ],

      rows : [
        {
          no : "1",
          category : "testcate",
          demandId : "testid",
          demandName : "testnm",
          demandDetail : "testdta",
          requester : "testreqe",
          remark : "testremar"
        },
        {
          no : "2",
          category : "testcate",
          demandId : "testid",
          demandName : "testnm",
          demandDetail : "testdta",
          requester : "testreqe",
          remark : "testremar"
        },
        {
          no : "3",
          category : "testcate",
          demandId : "testid",
          demandName : "testnm",
          demandDetail : "testdta",
          requester : "testreqe",
          remark : "testremar"
        },
      ]
    }
  }

}
</script>

<style scoped>
.main-div {
  width : 300px;
  height : 100%;
  background-color: #16161A;
}
.v-grid{

}


.grid-div{
  border : 1px solid red;
  border-radius: 5px;
  position : relative;
  background-color: white;
  left : 50%;
  transform: translateX(-50%);
  width : 90%;
  height : 90%;
  /* overflow-y : auto; */

  
}

.header-content{
  border : 1px solid blue;
}
</style>