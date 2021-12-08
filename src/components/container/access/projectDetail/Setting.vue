<template>
<div class="setting-container">
    <!-- component 정렬할것 -->
    <Name/>
    <Date/>
    <div class="addMember-div" v-if="this.$store.state.setting.clickState == true">
        <AddMember/>
    </div>

    <Member />
    <footer>
        <Buttons/>
    </footer>

</div>  

</template>
<script>

// import axios from 'axios';

import AddMember from '@/components/component/acess/projectDetail/setting/AddMember.vue'
import Name from '@/components/component/acess/projectDetail/setting/Name.vue'
import Date from '@/components/component/acess/projectDetail/setting/Date.vue'
import Member from '@/components/component/acess/projectDetail/setting/Member.vue'
import Buttons from '@/components/component/acess/projectDetail/setting/Buttons.vue'


export default {
    components : {
        Name,
        Date,
        AddMember,
        Member,
        Buttons,
    },
    data (){
        return{
        }
    },
    mounted() {

        
    },
    methods : {
    

    
    },
  

}

</script>

<style scoped>  
.setting-container{
    display: flex; 
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    overflow: scroll;
    overflow-x: hidden;
    overflow-y: auto;
    width : 100vw;
    height : calc(100vh - 70px);
    background-color: #16161A;
    /* margin 줘서 디자인 */
}
.setting-container::-webkit-scrollbar{
    display: none;
}
::-webkit-scrollbar{
     display: none; 
}


</style>