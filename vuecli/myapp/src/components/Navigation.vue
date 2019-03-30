<template>
    <div :class='activeClass'>
        <header>
            <span @click="routerPush(btnList[0])">首页</span>
            <h2>{{propsVal}}</h2>
        </header>
        <nav>
            <ul>
               <li @click="go(item)" :class="{'active':item.className==activeClass}" v-for="(item,index) in btnList" :key='index'>{{item.name}}</li>
            </ul>
        </nav>
    </div>
</template>
<style scoped>
    header,nav{
        width: 100%;
        height: 1rem;
        color: aliceblue;
        position: fixed;
        text-align: center;
        background-color:rgb(33, 150, 243);
        z-index: 1;
    }
    header{
        top: 0;
    }
    header span{
        position: absolute;
        left: 10px;
        top:50%;
        transform: translateY(-50%);
    }
    nav{
        bottom: 0;
    }
    .movie header,.movie nav{
        background-color: rgb(33, 150, 243);
    }
    .music header,.music nav{
        background-color: rgb(0, 150, 136);
    }
    .book header,.book nav{
        background-color: rgb(121, 85, 72);
    }
    .talk header,.talk nav{
        background-color: rgb(63, 81, 181);
    }
    header span{
        position: absolute;
        left: 10px;
        top:50%;
        transform: translateY(-50%);
    }
    nav ul{
        width: 100%;
    }
    nav li{
        color: #ddd;
        float: left;
        width: 25%;
        height: 1rem;
        line-height: 1rem
    }
    nav li.active{
        color: #fff;
        font-weight: bolder;
        font-size: 16px
    }
</style>
<script>
export default {
    data(){
        return {
            activeTitle:'电影',
            activeClass:'movie',
            btnList:[
                {
                    name:'电影',
                    className:'movie',
                    path:'/'
                
                },
                {
                    name:'音乐',
                    className:'music',
                    path:'/music'
                },
                {
                    name:'书籍',
                    className:'book',
                    path:'/book'
                },
                {
                    name:'聊天',
                    className:'talk',
                    path:'/talk'
                }
            ]
        }
    },
    props: ['navVal'],
    methods:{
        go(obj){
            this.activeTitle=obj.name;
            this.activeClass=obj.className;
            this.$router.push(obj.path);
        }
    },
    computed: {
        propsVal(){
        // this.activeClass = this.navVal.className;
        // this.activeTitle = this.navVal.title
        return this.navVal.title
        }
    },
    watch: {
        propsVal(){
        this.activeClass = this.navVal.className;
        this.activeTitle = this.navVal.title
        }
    },
}
</script>


