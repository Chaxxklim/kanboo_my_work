<template>
<div>
    <button class="modify-btn">수정</button>
    <button class="end-btn">Project End</button>
    <button class="delete-btn">Project Delete</button>
</div>  
</template>
    
<script>
export default {

}
</script>

<style scoped>
div{

    display :flex;
    justify-content : flex-end;
    align-items : stretch;
    flex-direction: row;
    width : 60vw;
    height : 100px;
    
}
.modify-btn{
    background-color : #FF8906;
    width : 100px;
    height : 20px;
    margin : 15px;
    border-radius : 5px;
}

.end-btn{
    background-color : #FF8906;
    width : 180px;
    height : 30px;
    margin : 20px;
    border-radius : 5px;

}

.delete-btn{
    background-color : #FF5C5C;
    width : 180px;
    height : 30px;
    margin : 20px;
    border-radius : 5px;

}
</style>