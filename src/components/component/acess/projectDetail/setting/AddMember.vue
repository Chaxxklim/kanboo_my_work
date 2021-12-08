<template>
<div class="main-div">
    <div class="main-left-div">
        <div class="main-start-text"><h3>멤버 추가</h3></div>
        <ul class="select-member-list" id="select-member-list">
            <li v-for="item, index in selectMember" :key="index" class="select-member-info" id="select-member-info(`${index}`)">
                <div class="select-member-image">
                    <img :src="`${selectMember[index].img}`" class="member-image"/>
                </div>
                <div class="select-member-text">
                    {{selectMember[index].name}}
                    {{selectMember[index].kTag}}
                </div>&nbsp;
                <div class="select-member-job">
                    <select>
                        <option value="PL">PL</option>
                        <option value="DA">DA</option>
                        <option value="TA">TA</option>
                        <option value="AA">AA</option>
                        <option value="UA">UA</option>
                        <option value="BA">BA</option>
                        <option value="EA">EA</option>
                        <option value="SA">SA</option>
                    </select>
                </div>
                <div class="cancel-btn">
                    <button id="`${select-member-insert-btn[index]}`" @click = "insertCancel(`${index}`), leftTextHideFunction()" >x</button>
                </div>
            </li>
        </ul>
        <div id="plzClick">
            우측에서 검색 후 추가할 멤버를 클릭해 주세요
        </div>
        <div>
            <button class="select-member-insert-btn">멤버 추가</button>
        </div>
    </div>

    <!-- <div class="main-center-div">
        test2
        
    </div> -->

    <div class="main-right-div">
        <input type="text" class="search-input" id="search-member" v-model="inputName">
        <ul class="search-member-result-list">
            <li id="selectMember(index)" @click="searchMemberSelect(`${searchMember[index].name}`, `${searchMember[index].kTag}`,
             `${searchMember[index].img}` ), leftTextHideFunction()" v-for="(item, index) in searchMember" :key="item" class="search-member-result">
                <div class="search-member-result-image">
                    <img :src="`${searchMember[index].img}`" class="member-image"/>
                </div>
                <div class="search-member-result-text">
                    {{searchMember[index].name}}&nbsp;
                    {{searchMember[index].kTag}}
                </div>
            </li>
        </ul>
    </div>   
<!-- <img src="../../../../../testData/0.png"/>
<img src="@/testData/0.png"/> -->
</div>  
</template>
    
<script>

// import axios from 'axios'; 

export default {
    methods: {
        
        

        leftTextHideFunction(){
            if((Object.keys(this.selectMember).length) >0){
                document.getElementById('plzClick').style.display = 'none';
                } else{
                    document.getElementById('plzClick').style.display = 'block';
                }
            },
        insertCancel(index){
            this.selectMember.splice(index, 1);
        },
        searchMemberSelect(name, kTag, img){
            // console.log("test : " + JSON.stringify(this.searchMember));
            const temp = {
                name : name,
                kTag : kTag,                                                           
                img : img

            }
        
            this.selectMember.push(temp);
        }

    
    },


        mounted() {
            this.leftTextHideFunction();

            window.addEventListener("keyup", (e)=>{
                e;
                this.axios.get('').then(res =>{
                    this.resultMember.push(res.data);
                    
            })

            
        })

        },
    
    data() {
        return{
            receivedData : false,
            inputName : "",
            selectMember : [
              
            ],
            searchMember : [
                {
                    "name" : "LJW",
                    "kTag" : "#123ab",
                    "img" : /*'@/testData/0.png'*/"../../../../../testData/0.png"
                },
                {
                    "name" : "ZeroChae",
                    "kTag" : "#123ab",
                    "img" : "https://placeimg.com/640/480/arch"
                },
                {
                    "name" : "ZeroChae",
                    "kTag" : "#123ab",
                    "img" : "https://placeimg.com/640/480/arch"
                },
                {
                    "name" : "ZeroChae",
                    "kTag" : "#123ab",
                    "img" : "https://placeimg.com/640/480/arch"
                },
                {
                    "name" : "ZeroChae",
                    "kTag" : "#123ab",
                    "img" : "https://placeimg.com/640/480/arch"
                },
                {
                    "name" : "ZeroChae",
                    "kTag" : "#123ab",
                    "img" : "https://placeimg.com/640/480/arch"
                },
                {
                    "name" : "ZeroChae",
                    "kTag" : "#123ab",
                    "img" : "https://placeimg.com/640/480/arch"
                },
                {
                    "name" : "ZeroChae",
                    "kTag" : "#123ab",
                    "img" : "https://placeimg.com/640/480/arch"
                },
                {
                    "name" : "ZeroChae",
                    "kTag" : "#123ab",
                    "img" : "https://placeimg.com/640/480/arch"
                },
                {
                    "name" : "ZeroChae",
                    "kTag" : "#123ab",
                    "img" : "https://placeimg.com/640/480/arch"
                },
                {
                    "name" : "ZeroChae",
                    "kTag" : "#123ab",
                    "img" : "https://placeimg.com/640/480/arch"
                },
                {
                    "name" : "ZeroChae",
                    "kTag" : "#123ab",
                    "img" : "https://placeimg.com/640/480/arch"
                },
                {
                    "name" : "ZeroChae",
                    "kTag" : "#123ab",
                    "img" : "https://placeimg.com/640/480/arch"
                },
                {
                    "name" : "ZeroChae",
                    "kTag" : "#123ab",
                    "img" : "https://placeimg.com/640/480/arch"
                },
                {
                    "name" : "ZeroChae",
                    "kTag" : "#123ab",
                    "img" : "https://placeimg.com/640/480/arch"
                },
                {
                    "name" : "ZeroChae",
                    "kTag" : "#123ab",
                    "img" : "https://placeimg.com/640/480/arch"
                },
                {
                    "name" : "ZeroChae",
                    "kTag" : "#123ab",
                    "img" : "https://placeimg.com/640/480/arch"
                },
                {
                    "name" : "ZeroChae",
                    "kTag" : "#123ab",
                    "img" : "https://placeimg.com/640/480/arch"
                },
                {
                    "name" : "ZeroChae",
                    "kTag" : "#123ab",
                    "img" : "https://placeimg.com/640/480/arch"
                },
                {
                    "name" : "ZeroChae",
                    "kTag" : "#123ab",
                    "img" : "https://placeimg.com/640/480/arch"
                },
                {
                    "name" : "ZeroChae",
                    "kTag" : "#123ab",
                    "img" : "https://placeimg.com/640/480/arch"
                },
                {
                    "name" : "ZeroChae",
                    "kTag" : "#123ab",
                    "img" : "https://placeimg.com/640/480/arch"
                },
                {
                    "name" : "ZeroChae",
                    "kTag" : "#123ab",
                    "img" : "https://placeimg.com/640/480/arch"
                },
                {
                    "name" : "ZeroChae",
                    "kTag" : "#123ab",
                    "img" : "https://placeimg.com/640/480/arch"
                },
                {
                    "name" : "ZeroChae",
                    "kTag" : "#123ab",
                    "img" : "https://placeimg.com/640/480/arch"
                },
                {
                    "name" : "ZeroChae",
                    "kTag" : "#123ab",
                    "img" : "https://placeimg.com/640/480/arch"
                },
                {
                    "name" : "ZeroChae",
                    "kTag" : "#123ab",
                    "img" : "https://placeimg.com/640/480/arch"
                },

            ],
        }
    }
}
</script>

<style scoped>
.main-div{
    background-color : #2C2F3B;
    display : flex;
    justify-content : space-around;
    align-items : flex-start;
    color : white;
    width : 60vw;
    height : calc(100vh - 700px);

}
.main-left-div{
    margin-left: 20px;
    display : flex;
    justify-content: space-between;
    align-items : stretch;
    flex-direction : column;
    height : 100%;
}

.main-right-div{
    margin-left: 20px;
}

.select-member-info{
    display : flex;
    justify-content : space-around;
    margin : 4px;
    padding : 5px;
    white-space:nowrap;

}
.select-member-image{
    border-radius: 70%;
    overflow: hidden;
    margin-right: 10px;
}
.member-image{
    width: 20px;
    height : 20px;
}

.search-member-result-image{
    border-radius: 70%;
    overflow: hidden;
    margin-right: 10px;
}



.select-member-job *{
    color : #FF8906;
    background-color : #2C2F3B;
    font-size: 16px;
    -o-appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;    
    border: none;
    position: relative;
}

.search-input{
    background-color : #414556;
    border : 0px;
    width : 170px;
    height : 15px;
    margin : 10px;
}
.search-member-result-list{
    overflow-x: hidden;
    overflow-y: auto;
    display: grid;
    grid-template-columns: 1fr 1fr ;
    margin-top : 20px;
    width: 400px;
    height: 200px;

}
.search-member-result-list::-webkit-scrollbar{
    display: none;
}
.search-member-result{
    display : flex;
    color : white;
    margin : 7px;
    padding : 3px;
}
.select-member-insert-btn{
    border-radius: 5px;
    background-color : #FF8906;
    display : inline-block;
    margin : 10px;
}

.select-member-list{
    overflow-x: hidden;
    overflow-y: auto;
}
.select-member-list::-webkit-scrollbar{
    display: none;
}

.main-start-text{
    margin: 10px;
    font-size : 22px;
}
</style>