const setting = {
  namespaced: true,
  state() {
    return {
      clickState  : false,
      roleList : [
        'PM','PL','DA','TA','AA','UA','BA','EA','SA'
      ],

    roleMatch : [

    ],

    projectMemberList : [
        {
            idx : '1517',
            projectIdx : 'p1234',
            member : {
                idx : '1517',
                id  : 'lim1517',
                nickname : 'knightlim1',
                phoneNumber : '010-1234-1234',
                token : 'dfggkndfhcvb',
                kTag : '#1',
                image : 'https://placeimg.com/640/480/arch',
                authority : 'user',
                password : 'asdf'
            },
            role : ['TA','DA']
        },
        // {
        //     idx : '1517',
        //     projectIdx : 'p1234',
        //     member : {
        //         idx : '1517',
        //         id  : 'lim1517',
        //         nickname : 'knightlim2',
        //         phoneNumber : '010-1234-1234',
        //         token : 'dfggkndfhcvb',
        //         kTag : '#2',
        //         image : 'https://placeimg.com/640/480/arch',
        //         authority : 'user',
        //         password : 'asdf'
        //     },
        //     role : ['SA','EA']
        // },
        // {
        //     idx : '1517',
        //     projectIdx : 'p1234',
        //     member : {
        //         idx : '1517',
        //         id  : 'lim1517',
        //         nickname : 'knightlim3',
        //         phoneNumber : '010-1234-1234',
        //         token : 'dfggkndfhcvb',
        //         kTag : '#3',
        //         image : 'https://placeimg.com/640/480/arch',
        //         authority : 'user',
        //         password : 'asdf'
        //     },
        //     role : ['BA']
        // },
        // {
        //     idx : '1517',
        //     projectIdx : 'p1234',
        //     member : {
        //         idx : '1517',
        //         id  : 'lim1517',
        //         nickname : 'knightlim7',
        //         phoneNumber : '010-1234-1234',
        //         token : 'dfggkndfhcvb',
        //         kTag : '#54321',
        //         image : 'https://placeimg.com/640/480/arch',
        //         authority : 'user',
        //         password : 'asdf'
        //     },
        //     role : ['TA','UA']
        // },
        // {
        //     idx : '1517',
        //     projectIdx : 'p1234',
        //     member : {
        //         idx : '1517',
        //         id  : 'lim1517',
        //         nickname : 'knightlim',
        //         phoneNumber : '010-1234-1234',
        //         token : 'dfggkndfhcvb',
        //         kTag : '#54321',
        //         image : 'https://placeimg.com/640/480/arch',
        //         authority : 'user',
        //         password : 'asdf'
        //     },
        //     role : ['TA','DA']
        // },
        
    ]

    }
  },
  mutations: {
    changeClickState(state){
      if(state.clickState == false){
     
        state.clickState = true;
      } else{
        state.clickState = false;
      }

     
    }
  
  },
  actions: {
    
  }
}

export default setting