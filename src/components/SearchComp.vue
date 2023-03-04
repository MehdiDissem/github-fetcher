<template>
    <div >
        <h1>Your Search here : </h1>
            <input class="hi" v-model="message" placeholder="Search here"/>
    <br/> 
            <div>
                <button>Search here</button>
            </div>
            <p class="ho">{{message}}</p>
        </div>

</template>
<script>
export default {
    name:'SearchComp',
    data(){
        return{
            message:''
        }
    }
}
</script>
<style scoped>
.hi{
    width: 250px;
    height:40px;
    color: green;
    border-radius: 10px;
}
.ho{
    color:black
}
</style>