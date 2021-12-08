<template>
<div class="project-date-div">
    <div class="text-div">
        프로젝트 기간 변경
    </div>
    <div class="date-div">
        <label for="start-date">Start</label>&nbsp;
        <input type="text" class="date-input" id="start-date">&nbsp;
        <label for="end-date">End</label>&nbsp;
        <input type="text" class="date-input" id="end-date">
    </div>
</div>  
</template>

<script>
export default {

}
</script>

<style scoped>
.project-date-div{
    display :flex;
    justify-content : space-around;
    flex-direction : column;
    

    width: 60vw;
    height : calc(100vh - 860px);

    box-sizing: border-box;
    background-color : #2C2F3B;
    color : white;
}
.date-div{

    color : black;

}
.date-input{
    background-color : #414556;
    border : 0px;
    width : 300px;

    
}

</style>