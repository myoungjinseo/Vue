var app = new Vue({
    el: '#app',
    data: {
        message : '초기 메시지',
        list:['사과', '바나나', '딸기']
        ,show :true

    },
    methods:{
        handleclick:function(event){
            alert(event.target) 
        }
    }
})