<template>
  <div class="container">
        <h2 class="main-requirements">Requirements</h2>
        <div class="modified-date">
          <!-- Last Modified date : {{this.$store.demand.state.lastModifiedDate}} -->
          Last Modified Date : 2021-12-09 16:19
        </div>
      <DemandGrid/>
  </div>
</template>

<script>
import DemandGrid from '@/components/component/acess/projectDetail/demand/DemandGrid.vue'
export default {
    components: {
        DemandGrid
    }
}
</script>

<style scoped>
.container {
    width : 100vw;
    height : calc(100vh - 70px);
    overflow-y : hidden;
    display : flex;
    flex-direction: column;

}
.main-requirements{
    font-size: 26px;
    color : white;
    margin-left : 100px;
    margin-top : 30px;
}
.modified-date{
    margin-left : 100px;
    margin-bottom: 20px;
    font-size : 20px;
    color : white;
}
.container::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
}
</style>