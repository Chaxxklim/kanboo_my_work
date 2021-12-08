<template>
<div class="project-date-div" >
    <div class="modal-background" >    
        <vue-cal
            class="vuecal--date-picker"
            xsmall
            hide-view-selector
            :time="false"
            :transitions="false"
            @cell-click="selectedDate"
            active-view="month"
            :disable-views="['week', 'day']"
            style="width: 210px;height: 230px">
        </vue-cal>
    </div>
    <div class="text-div">
        프로젝트 기간 변경
    </div>
    <button @click="testBtn">test</button>
    <div class="date-div">
        <label for="start-date">Start</label>&nbsp;
        <input type="text" @click="clickStartDate" v-model="startDateInput" class="date-input" id="start-date" @change="changeStartDate">&nbsp;
        <!-- <input v-model="testInput" @click="testBtn" >&nbsp; -->
        <label for="end-date">End</label>&nbsp;
        <input type="text" @click="clickEndDate" v-model="endDateInput" class="date-input" id="end-date" @change="changeEndDate">
    </div>
</div>  
</template>

<script>
import VueCal from 'vue-cal'
import 'vue-cal/dist/vuecal.css'
import moment from 'moment'

export default {
    data() {
        return {
            testInput : "",
            startDateInput : "",
            endDateInput : "",
            modalState : false,
            selectStart : false,
            selectEnd : false
        }
    },
    components : {
        VueCal,
    },
    methods : {
        selectedDate(e){
            
            console.log(moment(e).format('YYYY/MM/DD'))
            this.selectedDate = moment(e).format('YYYY/MM/DD')
            if(this.selectStart == true){
                this.startDateInput = moment(e).format('YYYY/MM/DD')
                console.log("if")
                
            }else if(this.selectEnd == true){
                this.endDateInput = moment(e).format('YYYY/MM/DD')
                console.log("elif")
                
            }
            // return this.selectedDate;
            // console.log(e)
            // console.log(e.format('YYYYMMDD'))
            this.modalState = false;
            this.selectStart = false;
            this.selectEnd = false;
        },
        // testBtn(){
        //     if(this.modalState == false){
        //         this.modalState = true;
        //         } else {
        //             this.modalState = false;
        //         }
            
        // },

        setProjectDate() {
            this.startDateInput = moment(this.$store.state.setting.projectDate.startDate).format('YYYY/MM/DD');
            this.endDateInput = moment(this.$store.state.setting.projectDate.endDate).format('YYYY/MM/DD')

        },
        // changeStartDate(){
        //     this.$store.state.setting.userInputDate.startDate = 
        //         moment(this.startDateInput).format('YYYY/MM/DD');
        // },
        // changeEndDate(){
        //     this.$store.state.setting.userInputDate.endDate = 
        //         moment(this.endDateInput).format('YYYY/MM/DD');
        //         console.log(this.$store.state.setting.userInputDate.endDate)
        // },
        clickStartDate(){
            this.selectStart = true;
            this.modalState = true;
            // this.startDateInput = moment(e).format('YYYY/MM/DD')
            // this.modalState = false;
            
        },

        clickEndDate(){
            this.selectEnd = true;
            this.modalState = true;
            // this.endDateInput = moment(e).format('YYYY/MM/DD')
            // this.modalState = false;
        }

    },
    mounted() {
        this.setProjectDate()
    }
}
</script>

<style scoped>
.project-date-div{
    border-radius : 2%;
    padding : 15px;
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
    border-radius : 10%;
    width : 300px;
    height : 30px;

    
}
.modal-background{
    width: 18.5vw; height:100vh;
    margin-left: 50vh;
    background: rgba(0,0,0,0.5);
     padding: 20px;
}
.vuecal--date-picker{
    width: 100%; background: #646464;
    border-radius: 8px;
    padding: 20px;
}
</style>